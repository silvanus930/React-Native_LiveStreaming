/* eslint-disable no-use-before-define */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation';

const App = () => {
  const routeNameRef = React.useRef();
  return (
    <NavigationContainer ref={routeNameRef}>
      <Navigation initialRoute="HomeScreen" />
    </NavigationContainer>
  );
};

export default App;