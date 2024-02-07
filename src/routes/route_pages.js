import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React,{ useRef } from 'react'
import ButtomTab from "../components/General/ButtomTab";

import { AntDesign, Ionicons, FontAwesome5, MaterialIcons} from '@expo/vector-icons';
 
// import { DrawerButton } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import RegistrationType from '../pages/RegistrationType'
import HomePage from '../pages/HomePage'


import Inbox from '../pages/Tabs/Inbox'
import Profile from '../pages/Tabs/Profile'
import Schedules from '../pages/Tabs/Schedules'
import Dashboard from '../pages/Tabs/Dashboard'


import CareCircle from '../pages/CareCircle'
import HealthCheck from '../pages/HealthCheck'
import CareAcademy from '../pages/CareAcademy'
import CareStore from '../pages/CareStore'

import Style from "../pages/HomePage/styles";
// import CareBuddyRegistration from '../pages/CareBuddyRegistration'
import {
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
  TouchableOpacity,
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
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackRouts(){
  return(
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fff'}, headerTitleAlign:"center"}}>

      <Stack.Screen name="HomePage" component={HomePage} 
      //fix this later
      options={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialIcons name="menu" size={25} />
          </TouchableOpacity>
        ),
      })} />
      
      <Stack.Screen name="CareCircle" component={CareCircle} options={{headerShown:false}}/> 
      <Stack.Screen name="HealthCheck" component={HealthCheck} options={{headerShown:false}}/> 
      <Stack.Screen name="CareAcademy" component={CareAcademy} options={{headerShown:false}}/> 
      <Stack.Screen name="CareStore" component={CareStore} options={{headerShown:false}}/> 
    </Stack.Navigator>

  )
}

function TabRouts(){
  return(
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        name="stack"
        component={StackRouts}
        options={{
          headerShown: false,
          tabBarLabel: "home", // renaming the tab label
          tabBarIcon: ({focused}) => 
            focused? 
            (<AntDesign name="home" size={24} color="white" />)
            :
            (<AntDesign name="home" size={24} color="white" />),
        }}
      />

    <Tab.Screen name="Dashboard" component={Dashboard} 
      
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
            (<AntDesign name="dashboard" size={24} color="white" />)
            :
            (<AntDesign name="dashboard" size={24} color="white" />)
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




function DrawerScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Drawer Screen!</Text>
    </View>
  );
}


const DrawerRoutes = () => (
  <Drawer.Navigator initialRouteName="HomePage" >
      <Drawer.Screen
        name="HomePage"
        component={TabRouts}
        options={{
          headerShown:false,
          title: "My Homepage",
          drawerLabel: "Home Page",
          drawerActiveTintColor: "#333",
          drawerActiveBackgroundColor: "lightblue",
          drawerContentStyle: {
          backgroundColor: "#fff",
          },
          drawerIcon: ({focused}) => 
          focused? 
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
          :
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
         ,
        }}
      />
      <Drawer.Screen name="CareCircle" component={CareCircle} options={{
          headerShown:false,
          drawerIcon: ({focused}) => 
          focused? 
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
          :
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
         ,
      }}/>
      <Drawer.Screen name="CareAcademy" component={CareAcademy} options={{
          headerShown:false,
          drawerIcon: ({focused}) => 
          focused? 
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
          :
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
         ,
      }}/>
      <Drawer.Screen name="HealthCheck" component={HealthCheck} options={{
          headerShown:false,
          drawerIcon: ({focused}) => 
          focused? 
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
          :
          (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
         ,
      }}/>
      
    </Drawer.Navigator>
);

const screenOptionStyle = {
  headerStyle: [{ color:"#fff"}],
  tabBarStyle: [{ backgroundColor: "#0A2249" }], 
};


export { DrawerRoutes as ScreenRoutes};