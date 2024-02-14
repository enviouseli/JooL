import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContentScrollView, createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React,{ useRef } from 'react'


import { AntDesign, Ionicons, FontAwesome5, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';
 
// import { DrawerButton } from "react-native";
import { createStackNavigator} from '@react-navigation/stack'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import RegistrationType from '../pages/RegistrationType'
import HomePage from '../pages/HomePage'


import Inbox from '../pages/Tabs/Inbox'
import Schedules from '../pages/Tabs/Schedules'
import Dashboard from '../pages/Tabs/Dashboard'
import Profile from '../pages/Tabs/Profile/Profile'
import EditProfile from '../pages/Tabs/Profile/EditProfile'


import CareCircle from '../pages/CareCircle'
import HealthCheck from '../pages/HealthCheck'
import CareAcademy from '../pages/CareAcademy'

import CareStore from '../pages/CareStore'
import VideoCall from '../pages/CareCircle/VideoCall'
import Clothing from '../pages/CareStore/Clothing'
import Monitors from '../pages/CareStore/Monitors'

import FaceScan from '../pages/HealthCheck/FaceScan';
import FaceScanResult from '../pages/HealthCheck/FaceScanResult';

import POSMScan from '../pages/HealthCheck/POSMScan';
import POSMScanActivity from '../pages/HealthCheck/POSMScanActivity';
import POSMScanMood from '../pages/HealthCheck/POSMScanMood';
import PatientDashboard from '../pages/HealthCheck/PatientDashboard';


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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CareBuddyRegistration() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CareBuddyRegistration</Text>
    </View>
  );
}

const LoginRoutes = (navigation) =>{
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fff'}, headerTitleAlign:"center"}}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: false }} />
      <Stack.Screen name="RegistrationType" component={RegistrationType} options={{ title: false }} />
      <Stack.Screen name="CareBuddyRegistration" component={CareBuddyRegistration} />
      <Stack.Screen name="HomePage" component={DrawerRoutes} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

function StackRouts(){
  return(
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fff'}, headerTitleAlign:"center"}}
    initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}}/>
      <Stack.Screen name="CareCircle" component={CareCircle} options={{headerShown:false}}/> 
      <Stack.Screen name="HealthCheck" component={HealthCheck} options={{headerShown:false}}/> 
      <Stack.Screen name="CareAcademy" component={CareAcademy} options={{headerShown:false}}/> 
      <Stack.Screen name="CareStore" component={CareStore} options={{headerShown:false}}/>
      <Stack.Screen name="VideoCall" component={VideoCall} options={{headerShown:false}}/> 
      <Stack.Screen name="Clothing" component={Clothing} options={{headerShown:false}}/> 
      <Stack.Screen name="Monitors" component={Monitors} options={{headerShown:false}}/>
      <Stack.Screen name="FaceScan" component={FaceScan} options={{headerShown:false}}/>
      <Stack.Screen name="FaceScanResult" component={FaceScanResult} options={{headerShown:false}}/>
      <Stack.Screen name="POSMScan" component={POSMScan} options={{headerShown:false}}/>
      <Stack.Screen name="POSMScanActivity" component={POSMScanActivity} options={{headerShown:false}}/>
      <Stack.Screen name="POSMScanMood" component={POSMScanMood} options={{headerShown:false}}/>
      <Stack.Screen name="PatientDashboard" component={PatientDashboard} options={{headerShown:false}}/>
    </Stack.Navigator>

  )
}

function ProfileStack(){
  return(
      <Stack.Navigator >
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

function TabRouts(){
  return(
    <Tab.Navigator screenOptions={screenOptionStyle} >
      <Tab.Screen
        name="Stack"
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

      <Tab.Screen name="Profile" component={ProfileStack} options={() => ({
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

const CustomDrawer = ({navigation}) => { {
  return (
    <DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc",}}>
        <TouchableOpacity onPress={() => navigation.navigate('CareCircle')} style={{ paddingVertical: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name='people-outline' size={26} color='#0A2249'/>
            <Text style={{fontSize: 15,marginLeft: 5,}}>
              Care Circle
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CareStore')} style={{ paddingVertical: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SimpleLineIcons name='basket' size={26} color='#0A2249'/>
            <Text style={{fontSize: 15,marginLeft: 5,}}>
              Care Store
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CareAcademy')} style={{ paddingVertical: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name='shield-checkmark-outline' size={26} color='#0A2249'/>
            <Text style={{fontSize: 15,marginLeft: 5,}}>
              Care Academy
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      </DrawerContentScrollView>
  );

}}


const DrawerRoutes = () => (
  <Drawer.Navigator initialRouteName="HomePage" 
  drawerContent={(props) => <CustomDrawer {...props} />}>
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
  </Drawer.Navigator>
);




const screenOptionStyle = {
  headerStyle: [{ color:"#fff"}],
  tabBarStyle: [{ backgroundColor: "#0A2249" }], 
};


export { DrawerRoutes as ScreenRoutes};
export { LoginRoutes as AuthenticationRoutes};