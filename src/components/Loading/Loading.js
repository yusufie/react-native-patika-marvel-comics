import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

// Using this component, we can show a loading indicator until the data is loaded on the page we want.

const Loading = ({color}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default Loading;
