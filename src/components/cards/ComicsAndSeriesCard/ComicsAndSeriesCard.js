import React from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './ComicsAndSeriesCard.style';

const ComicsAndSeriesCard = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ComicsAndSeriesCard;
