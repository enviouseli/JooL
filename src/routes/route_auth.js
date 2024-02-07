import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

 
// import { DrawerButton } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import RegistrationType from '../pages/RegistrationType'
import HomePage from '../pages/HomePage'


import Style from "../pages/HomePage/styles";

import {
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
} from "react-native";
import style from '../components/SearchBar/style';


function CareBuddyRegistration() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CareBuddyRegistration</Text>
    </View>
  );
}


const Stack = createStackNavigator();
export default function LoginRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fff'}, headerTitleAlign:"center"}}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: false }} />
      <Stack.Screen name="RegistrationType" component={RegistrationType} options={{ title: false }} />
      <Stack.Screen name="CareBuddyRegistration" component={CareBuddyRegistration} />
      <Stack.Screen name="HomePage" component={HomePage} 
      options={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialIcons name="menu" size={25} />
          </TouchableOpacity>
        ),
      })} />
    </Stack.Navigator>
  )
}

export { LoginRoutes as LoginRoutes};
