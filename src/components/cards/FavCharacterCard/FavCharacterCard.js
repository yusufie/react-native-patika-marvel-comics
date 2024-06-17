import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import {showMessage} from 'react-native-flash-message';

import styles from './FavCharacterCard.style';

const FavCharacterCard = ({item, onPress, navigation}) => {
  const handleDeleteCharacter = () => {
    // It allows the user to delete the selected character from their favorites in the database. Since the character on the screen is pulled from the database, the deleted character is deleted from the screen.
    const user = auth().currentUser;
    const userId = user.uid;
    database()
      .ref(`/users/${userId}/favorites/characters/${item.id}`)
      .remove()
      .then(() =>
        showMessage({
          message: 'Character deleted from favorites.',
          type: 'success',
        }),
      );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.character.thumbnail.path}.${item.character.thumbnail.extension}`,
          }}
        />
        <Text style={styles.name}>{item.character.name}</Text>
        <Icon
          name="remove"
          color="red"
          size={25}
          onPress={handleDeleteCharacter}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FavCharacterCard;
