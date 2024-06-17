import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import {getSeries} from '../../../marvelAPI';
import styles from './Series.style';

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    //Pulls data from marvelAPI.js and adds it to state.
    const fetchData = async () => {
      const result = await getSeries();
      setSeries(result);
    };
    fetchData();
  }, []);

  const renderSeries = ({item}) => {
    return (
      <View style={styles.series_container}>
        <Image
          style={styles.series_image}
          source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
        />
        <Text style={styles.series_title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={series}
        renderItem={renderSeries}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Series;
