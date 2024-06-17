import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import {getEvents} from '../../../marvelAPI';
import styles from './Events.style';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    //Pulls data from marvelAPI.js and adds it to state.
    const fetchData = async () => {
      const result = await getEvents();
      setEvents(result);
    };
    fetchData();
  }, []);

  const renderEvents = ({item}) => {
    return (
      <View style={styles.events_container}>
        <Image
          style={styles.events_image}
          source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
        />
        <Text style={styles.events_title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderEvents}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Events;
