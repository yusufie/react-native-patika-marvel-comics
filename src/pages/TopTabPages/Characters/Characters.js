import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import {getCharacters} from '../../../marvelAPI';
import styles from './Characters.style';

const Characters = ({navigation}) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Pulls data from marvelAPI.js and adds it to state.
    const fetchData = async () => {
      const result = await getCharacters();
      setCharacters(result);
    };
    fetchData();
  }, []);

  const handleCharacterSelect = item => {
    navigation.navigate('CharacterDetail', {character: item});
  };

  const renderCharacters = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleCharacterSelect(item)}>
        <View style={styles.characters_container}>
          <Image
            style={styles.characters_image}
            source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
          />
          <Text style={styles.characters_title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={characters}
        renderItem={renderCharacters}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Characters;
