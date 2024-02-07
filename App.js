import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
// import 'react-native-gesture-handler';

import Route from './src/routes/route';
import RouteMain from './src/routes/route_main';

//import Route from './src/pages/HomePage';

// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const loged_in=true;
  return (
    
    //<NavigationContainer>
      <StatusBar style='auto' />,
      <RouteMain />
    //</NavigationContainer>
  );
}
