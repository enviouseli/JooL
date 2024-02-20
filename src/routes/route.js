import 'react-native-gesture-handler';
// import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'

import { AntDesign, Ionicons, FontAwesome5} from '@expo/vector-icons';
 
// import { DrawerButton } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import RegistrationType from '../pages/RegistrationType'
import HomePage from '../pages/HomePage'


import Inbox from '../pages/Tabs/Inbox'
import Profile from '../pages/Tabs/Profile/Profile'
import Schedules from '../pages/Tabs/Schedules'

// import Style from "../pages/HomePage/styles";
// import CareBuddyRegistration from '../pages/CareBuddyRegistration'
import {
  Text,
  View,
} from "react-native";
// import style from '../components/SearchBar/style';


function CareBuddyRegistration() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CareBuddyRegistration</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();
function TabRout(){
  return(
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="HomePage" component={DrawerHome} options={() => ({
        headerShown: false,
        tabBarIcon: ({focused}) => 
            focused? 
            (<AntDesign name="home" size={24} color="white" />)
            :
            (<AntDesign name="home" size={24} color="white" />)
      })}/>
      <Tab.Screen name="Profile" component={Profile} options={() => ({
        headerShown: false,
        tabBarIcon: ({focused}) => 
            focused? 
            (<FontAwesome5 name="user" size={24} color="white" />)
            :
            (<FontAwesome5 name="user" size={24} color="white" />)
      })}/>
      <Tab.Screen name="Schedules" component={Schedules} 
      
      listeners={{
        tabPress: e => {
          // add your conditions here
          e.preventDefault(); // <-- this function blocks navigating to screen
        },
      }}
      
      options={() => ({
        headerShown: false,
        tabBarIcon: ({focused}) => 
            focused? 
            (<AntDesign name="calendar" size={24} color="white" />)
            :
            (<AntDesign name="calendar" size={24} color="white" />)
      })}/>
      <Tab.Screen name="Inbox" component={Inbox} 
      listeners={{
        tabPress: e => {
          // add your conditions here
          e.preventDefault(); // <-- this function blocks navigating to screen
        },
      }}
      options={() => ({
        headerShown: false,
        tabBarIcon: ({focused}) => 
            focused? 
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />)
            :
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />)
      })}/>
    </Tab.Navigator>
  )
}


function DrawerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Drawer Screen!</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const DrawerHome = () => (
  <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={HomePage}
        options={{
          title: "My Homepage",
          drawerLabel: "Home Page",
          drawerActiveTintColor: "#333",
          drawerActiveBackgroundColor: "lightblue",
          drawerContentStyle: {
          backgroundColor: "#fff",
          drawerIcon: (({focused}) => 
          focused? 
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
          :
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
         ),
          },
        }}
      />
      <Drawer.Screen name="Drawer Screen" component={DrawerScreen} />
    </Drawer.Navigator>
);

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fff'}, headerTitleAlign:"center"}}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: false }} />
      <Stack.Screen name="RegistrationType" component={RegistrationType} options={{ title: false }} />
      <Stack.Screen name="CareBuddyRegistration" component={CareBuddyRegistration} />
      <Stack.Screen name="HomePage" component={DrawerHome} 
      options={() => ({
        title: 'Home Page',
        headerShown: false
      })}/>
    </Stack.Navigator>
    
  )
}

const screenOptionStyle = {
  headerStyle: [{ color:"#fff"}],
  tabBarStyle: [{ backgroundColor: "#0A2249" }], 
};


