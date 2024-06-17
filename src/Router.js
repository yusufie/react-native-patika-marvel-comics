import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import Login from './pages/AuthPages/Login';
import Sign from './pages/AuthPages/Sign';
import Home from './pages/BottomTabPages/Home';
import Favorites from './pages/BottomTabPages/Favorites';

import CharacterDetail from './pages/DetailPages/CharacterDetail';
import ComicDetail from './pages/DetailPages/ComicDetail';

import BottomTabBarIcon from './components/BottomTabBarIcon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabPages = () => {
  return (
    <Tab.Navigator screenOptions={TabBarScreenOptions}>
      <Tab.Screen name="Home" component={Home} options={HomeOptions} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={FavoritesOptions}
      />
    </Tab.Navigator>
  );
};

const AuthPages = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    // Queries whether the registered user ID exists and assigns this information to userSession. Because when the user opens the application, we use it to redirect to the home page if user has registered and has not logged out.
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthPages" component={AuthPages} />
        ) : (
          <Stack.Screen name="BottomTabPages" component={BottomTabPages} />
        )}
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetail}
          options={CharacterDetailOptions}
        />
        <Stack.Screen
          name="ComicDetail"
          component={ComicDetail}
          options={ComicDetailOptions}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

const TabBarScreenOptions = ({route}) => ({
  tabBarShowLabel: false,
  tabBarInactiveBackgroundColor: '#202020',
  tabBarActiveBackgroundColor: '#202020',
});

const HomeOptions = () => ({
  headerShown: false,
  tabBarIcon: ({focused}) => (
    <BottomTabBarIcon name="home" focused={focused} size={30} />
  ),
});

const FavoritesOptions = () => ({
  headerShown: false,
  tabBarIcon: ({focused}) => (
    <BottomTabBarIcon name="heart" focused={focused} size={28} />
  ),
});

const CharacterDetailOptions = () => ({
  headerShown: true,
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#202020',
  },
});

const ComicDetailOptions = () => ({
  headerShown: true,
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#202020',
  },
});

export default Router;
