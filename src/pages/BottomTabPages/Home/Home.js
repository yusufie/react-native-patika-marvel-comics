import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Home.style';
import MyTabs from '../../TopTabPages/AllTabPages/MyTabs';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>HOME</Text>
        <Icon
          style={styles.header_icon}
          name="logout"
          size={25}
          color="white"
          onPress={() => auth().signOut()}
        />
      </View>
      <MyTabs />
    </View>
  );
};

export default Home;
