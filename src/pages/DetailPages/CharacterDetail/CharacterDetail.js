import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome';

import Loading from '../../../components/Loading/Loading';
import styles from './CharacterDetail.style';
import {getSeriesForCharacter, getComicsForCharacter} from '../../../marvelAPI';
import ComicsAndSeriesCard from '../../../components/cards/ComicsAndSeriesCard';

const CharacterDetail = ({route, navigation}) => {
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const {character} = route.params;

  useEffect(() => {
    // It pulls the series and cpmics data listed on the character detail page from the API using marvelAPI.js and adds it to the states.

    const fetchComicsAndSeries = async () => {
      const comicsResult = await getComicsForCharacter(character.id);
      setComics(comicsResult);

      const seriesResult = await getSeriesForCharacter(character.id);
      setSeries(seriesResult);

      setLoading(false);
    };
    fetchComicsAndSeries();
  }, [character]);

  const handleAddFavorites = async () => {
    //When the add to favorite icon is clicked, it sends the selected character to the user's data in the database.
    const user = auth().currentUser;
    if (user) {
      const userId = user.uid;
      const favoritesRef = database().ref(
        `users/${userId}/favorites/characters`,
      );
      const snapshot = await favoritesRef.once('value');
      const data = snapshot.val();
      let isExists = false;
      if (data) {
        for (const key in data) {
          if (data[key]?.character?.id === character.id) {
            isExists = true;
            break;
          }
        }
      }
      if (isExists) {
        showMessage({
          message: 'Failed! This character is already in your favorites!',
          type: 'danger',
        });
      } else {
        favoritesRef.push({
          id: character.id,
          character: character,
        });
        showMessage({
          message: 'The character has been added to favorites successfully!',
          type: 'success',
        });
      }
    }
  };

  const renderComics = ({item}) => {
    return (
      <ComicsAndSeriesCard
        item={item}
        onPress={() => handleComicSelect(item)}
      />
    );
  };

  const handleComicSelect = item => {
    // Redirects to the detail page of the selected comic.
    navigation.navigate('ComicDetail', {comic: item});
  };

  const renderSeries = ({item}) => {
    return <ComicsAndSeriesCard item={item} />;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.character_container}>
        <Image
          style={styles.character_image}
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}
        />
        <Text style={styles.character_name}>{character.name}</Text>
        <Text style={styles.character_description}>
          {character.description}
        </Text>
        <TouchableOpacity onPress={handleAddFavorites}>
          <Icon style={styles.icon} name="heart" size={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titles}>Comics</Text>
      {loading ? (
        <Loading color="#202020" />
      ) : (
        <FlatList
          horizontal
          data={comics}
          renderItem={renderComics}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      )}
      <Text style={styles.titles}>Series</Text>
      {loading ? (
        <Loading color="#202020" />
      ) : (
        <FlatList
          horizontal
          data={series}
          renderItem={renderSeries}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </ScrollView>
  );
};

export default CharacterDetail;
