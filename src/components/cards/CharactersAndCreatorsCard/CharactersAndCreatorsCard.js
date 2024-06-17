import React from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './CharactersAndCreatorsCard.style';

const CharactersAndCreatorsCard = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
        />
        <Text style={styles.title_character}>{item.name}</Text>
        <Text style={styles.title_creator}>{item.fullName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CharactersAndCreatorsCard;
