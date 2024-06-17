import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTabBarIcon = ({name, focused, size}) => {
  return (
    <View>
      <Icon name={name} size={size} color={focused ? '#ec1d24' : 'white'} />
    </View>
  );
};

export default BottomTabBarIcon;
