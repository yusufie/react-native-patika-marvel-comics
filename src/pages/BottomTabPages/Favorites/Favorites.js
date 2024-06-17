import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Favorites.style';
import FavCharacterCard from '../../../components/cards/FavCharacterCard/FavCharacterCard';
import FavComicCard from '../../../components/cards/FavComicCard/FavComicCard';
import Loading from '../../../components/Loading/Loading';

const Favorites = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [sliderState, setSliderState] = useState({
    currentPage: 1,
  });

  const switchPage = page => {
    //It is used to make two different impressions inside a page.
    setSliderState({
      currentPage: page,
    });
  };

  useEffect(() => {
    const fetchFavoriteCharacters = async () => {
      // It pulls the characters that the user adds to the favorites from the database.
      const user = auth().currentUser;
      if (user) {
        const userId = user.uid;
        const favoritesRef = database().ref(
          `users/${userId}/favorites/characters`,
        );
        favoritesRef.on('value', snapshot => {
          const data = snapshot.val();
          if (data) {
            const charactersList = Object.keys(data).map(key => ({
              id: key,
              character: data[key].character,
            }));
            setCharacters(charactersList);
          }
          setLoading(false);
        });
      }
    };

    const fetchFavoriteComics = async () => {
      // It pulls the comics that the user adds to the favorites from the database.
      const user = auth().currentUser;
      if (user) {
        const userId = user.uid;
        const favoritesRef = database().ref(`users/${userId}/favorites/comics`);
        favoritesRef.on('value', snapshot => {
          const data = snapshot.val();
          if (data) {
            const comicsList = Object.keys(data).map(key => ({
              id: key,
              comic: data[key].comic,
            }));
            setComics(comicsList);
          }
          setLoading(false);
        });
      }
    };

    fetchFavoriteCharacters();
    fetchFavoriteComics();
  }, []);

  const renderCharacter = ({item}) => {
    return (
      <FavCharacterCard
        item={item}
        onPress={() => handleCharacterDetail(item)}
      />
    );
  };

  const handleCharacterDetail = item => {
    // Redirects to the detail page of the selected character.
    navigation.navigate('CharacterDetail', {character: item.character});
  };

  const renderComic = ({item}) => {
    return <FavComicCard item={item} onPress={() => handleComicDetail(item)} />;
  };

  const handleComicDetail = item => {
    // Redirects to the detail page of the selected comic.
    console.log(item);
    navigation.navigate('ComicDetail', {comic: item.comic});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>FAVORITES</Text>
      <View style={styles.menu_container}>
        <TouchableOpacity
          onPress={() => switchPage(1)}
          style={
            sliderState.currentPage === 1
              ? styles.menu_title_selected
              : styles.menu_title
          }>
          <Text style={styles.menu_title}>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => switchPage(2)}
          style={
            sliderState.currentPage === 2
              ? styles.menu_title_selected
              : styles.menu_title
          }>
          <Text style={styles.menu_title}>Comics</Text>
        </TouchableOpacity>
      </View>
      <View>
        {sliderState.currentPage === 1 ? (
          characters.length > 0 ? (
            <FlatList
              data={characters}
              keyExtractor={item => item.id}
              renderItem={renderCharacter}
            />
          ) : (
            <Text style={styles.no_favorites_text}>
              You don't have any favorite character.
            </Text>
          )
        ) : comics.length > 0 ? (
          <FlatList
            data={comics}
            keyExtractor={item => item.id}
            renderItem={renderComic}
          />
        ) : (
          <Text style={styles.no_favorites_text}>
            You don't have any favorite comic.
          </Text>
        )}
        {loading && (
          <View style={styles.loadingContainer}>
            <Loading color="#202020" />
          </View>
        )}
      </View>
    </View>
  );
};

export default Favorites;
