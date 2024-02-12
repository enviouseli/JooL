import React from 'react'
// import { DrawerButton } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import RegistrationType from '../pages/RegistrationType'
import HomePage from '../pages/HomePage'
// import CareBuddyRegistration from '../pages/CareBuddyRegistration'
import {
  Text,
  View,
} from "react-native";

// function Login() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Login</Text>
//     </View>
//   );
// }
function CareBuddyRegistration() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CareBuddyRegistration</Text>
    </View>
  );
}

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator style={{ backgroundColor: '#000' }}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: false }} />
      <Stack.Screen name="RegistrationType" component={RegistrationType} options={{ title: false }} />
      <Stack.Screen name="CareBuddyRegistration" component={CareBuddyRegistration} />
      <Stack.Screen name="HomePage" component={HomePage} options={{ title: "My HomePage", headerRight: () => <Text>asd</Text> }} />
    </Stack.Navigator>
  )
}