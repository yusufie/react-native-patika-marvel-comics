import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Comics from '../Comics';
import Characters from '../Characters';
import Series from '../Series';
import Events from '../Events';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={TabBarOptions}>
      <Tab.Screen name="Comics" component={Comics} />
      <Tab.Screen name="Characters" component={Characters} />
      <Tab.Screen name="Series" component={Series} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
};

const TabBarOptions = {
  tabBarStyle: {backgroundColor: 'red'},
  tabBarLabelStyle: {fontSize: 10, fontWeight: 'bold', color: 'black'},
  tabBarIndicatorStyle: {backgroundColor: 'black'},
};

export default MyTabs;
