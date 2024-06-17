import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome';

import {getCharactersForComic, getCreatorsForComic} from '../../../marvelAPI';
import CharactersAndCreatorsCard from '../../../components/cards/CharactersAndCreatorsCard';
import styles from './ComicDetail.style';
import Loading from '../../../components/Loading/Loading';

const ComicDetail = ({route, navigation}) => {
  const {comic} = route.params;
  const [characters, setCharacters] = useState([]);
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // It pulls the character and creators data listed on the comic detail page from the API using marvelAPI.js and adds it to the states.

    const fetchCharactersAndCreators = async () => {
      const charactersResult = await getCharactersForComic(comic.id);
      setCharacters(charactersResult);

      const creatorsResult = await getCreatorsForComic(comic.id);
      setCreators(creatorsResult);

      setLoading(false);
    };
    fetchCharactersAndCreators();
  }, [comic]);

  const handleAddFavorites = async () => {
    // When the add to favorite icon is clicked, it sends the selected comic to the user's data in the database.
    const user = auth().currentUser;
    if (user) {
      const userId = user.uid;
      const favoritesRef = database().ref(`users/${userId}/favorites/comics`);
      const snapshot = await favoritesRef.once('value');
      const data = snapshot.val();
      let isExists = false;
      if (data) {
        for (const key in data) {
          if (data[key]?.comic?.id === comic.id) {
            isExists = true;
            break;
          }
        }
      }
      if (isExists) {
        showMessage({
          message: 'Failed! This comic is already in your favorites!',
          type: 'danger',
        });
      } else {
        favoritesRef.push({
          id: comic.id,
          comic: comic,
        });
        showMessage({
          message: 'The comic has been added to favorites successfully!',
          type: 'success',
        });
      }
    }
  };

  const renderCharacters = ({item}) => {
    return (
      <CharactersAndCreatorsCard
        item={item}
        onPress={() => handleCharacterSelect(item)}
      />
    );
  };

  const handleCharacterSelect = item => {
    // Redirects to the detail page of the selected character.
    navigation.navigate('CharacterDetail', {character: item});
  };

  const renderSeries = ({item}) => {
    return <CharactersAndCreatorsCard item={item} />;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.comic_container}>
        <Image
          source={{uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`}}
          style={styles.comic_image}
        />
        <Text style={styles.comic_name}>{comic.title}</Text>
        <Text style={styles.comic_description}>{comic.description}</Text>
        <TouchableOpacity onPress={handleAddFavorites}>
          <Icon style={styles.icon} name="heart" size={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titles}>Characters</Text>
      {loading ? (
        <Loading color="#202020" />
      ) : (
        <FlatList
          horizontal
          keyExtractor={item => item.id.toString()}
          data={characters}
          renderItem={renderCharacters}
          showsHorizontalScrollIndicator={false}
        />
      )}
      <Text style={styles.titles}>Creators</Text>
      {loading ? (
        <Loading color="#202020" />
      ) : (
        <FlatList
          horizontal
          keyExtractor={item => item.id.toString()}
          data={creators}
          renderItem={renderSeries}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </ScrollView>
  );
};

export default ComicDetail;
