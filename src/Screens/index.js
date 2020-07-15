import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PicScreen from './PicScreen';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pic" component={PicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
