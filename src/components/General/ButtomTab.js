import { View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, FontAwesome5, MaterialIcons} from '@expo/vector-icons';

import Inbox from '../../pages/Tabs/Inbox'
import Profile from '../../pages/Tabs/Profile'
import Schedules from '../../pages/Tabs/Schedules'
import HomePage from "../../pages/HomePage";

const Tab = createBottomTabNavigator();
const ButtomTab= () => {
    return(
        <Tab.Navigator screenOptions={screenOptionStyle}>
          <Tab.Screen
            name="stack"
            component={HomePage}
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
};
const screenOptionStyle = {
    headerStyle: [{ color:"#fff"}],
    tabBarStyle: [{ backgroundColor: "#0A2249" }], 
  };

export default ButtomTab;