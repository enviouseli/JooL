import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, FontAwesome5} from '@expo/vector-icons';

import Inbox from '../pages/Tabs/Inbox'
import Profile from '../pages/Tabs/Profile'
import Schedules from '../pages/Tabs/Schedules'


const TabNavigator = () => {
    return (

        <Tab.Navigator>
      <Tab.Screen name="HomePage" component={DrawerHome} options={() => ({
        headerShown: false,
        tabBarIcon: ({focused}) => 
            focused? 
            (<AntDesign name="home" size={24} color="black" />)
            :
            (<AntDesign name="home" size={24} color="black" />)
      })}/>
      <Tab.Screen name="Profile" component={Profile} options={() => ({
        headerShown: false,
        tabBarIcon: ({focused}) => 
            focused? 
            (<FontAwesome5 name="user" size={24} color="black" />)
            :
            (<FontAwesome5 name="user" size={24} color="black" />)
      })}/>
      <Tab.Screen name="Schedules" component={Schedules} options={() => ({
        headerShown: false,
        tabBarIcon: ({focused}) => 
            focused? 
            (<AntDesign name="calendar" size={24} color="black" />)
            :
            (<AntDesign name="calendar" size={24} color="black" />)
      })}/>
      <Tab.Screen name="Inbox" component={Inbox} options={() => ({
        headerShown: false,
        tabBarIcon: ({focused}) => 
            focused? 
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
            :
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
      })}/>
    </Tab.Navigator>
    )
}

export default TabNavigator;