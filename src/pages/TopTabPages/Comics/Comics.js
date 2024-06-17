import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import Loading from '../../../components/Loading/Loading';
import {getComics} from '../../../marvelAPI';
import styles from './Comics.style';

const Comics = ({navigation}) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Pulls data from marvelAPI.js and adds it to state.
    const fetchData = async () => {
      const result = await getComics();
      setComics(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleComicSelect = comic => {
    navigation.navigate('ComicDetail', {comic});
  };

  const renderComics = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleComicSelect(item)}>
        <View style={styles.comic_container}>
          <Image
            style={styles.comic_image}
            source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
          />
          <Text style={styles.comic_title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <Loading color="white" />
        </View>
      ) : (
        <FlatList
          data={comics}
          renderItem={renderComics}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Comics;
