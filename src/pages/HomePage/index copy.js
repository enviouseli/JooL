// Asma
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator} from '@react-navigation/stack'

import React, { useEffect, useRef, useState } from "react";

import {
  SafeAreaView,
  Button,
  DrawerLayoutAndroid,
  Text,
  View,
  Platform,

} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Style from "./styles";
import Login from '../Login'
import SignUp from '../SignUp'
import RegistrationType from '../RegistrationType'
import Home from '../HomePage'


function CareBuddyRegistration() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CareBuddyRegistration</Text>
    </View>
  );
}

// Asma
const Drawer = createDrawerNavigator();

const DrawerHome = () => (
  <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "My dashboard",
          drawerLabel: "Dashboard label",
          drawerActiveTintColor: "#333",
          drawerActiveBackgroundColor: "lightblue",
          drawerContentStyle: {
          backgroundColor: "#c6cbef",
          },
        }}
      />
      <Drawer.Screen name="Settings" component={SignUp} />
    </Drawer.Navigator>
);


const Stack = createStackNavigator();

export default function HomePage({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fff'}, headerTitleAlign:"center"}}>

      <Stack.Screen name="Home" component={DrawerHome} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: false }} />
      <Stack.Screen name="RegistrationType" component={RegistrationType} options={{ title: false }} />
      <Stack.Screen name="CareBuddyRegistration" component={CareBuddyRegistration} />
      <Stack.Screen name="HomePage" component={HomePage} 
      options={() => ({
        title: 'Home Page',
      })}/>
    </Stack.Navigator>
  )
}