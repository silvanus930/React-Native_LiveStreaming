import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import App from '../App';

const Stack = createStackNavigator();

function Navigation(props :any) {
  const { initialRoute } = props;
  
  return (
    <Stack.Navigator initialRouteName={initialRoute} detachInactiveScreens>
      
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="App" component={App} />
    </Stack.Navigator>
  );
}

export default Navigation;
