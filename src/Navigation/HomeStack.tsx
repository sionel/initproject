import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screen/SplashScreen';
import LoginScreen from '../Screen/LoginScreen';
import MapScreen from '../Screen/MapScreen';
import FriendScreen from '../Screen/FriendScreen';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Friend" component={FriendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HomeStack;
