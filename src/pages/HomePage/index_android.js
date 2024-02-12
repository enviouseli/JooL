import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  Button,
  DrawerLayoutAndroid,
  Text,
  View,
  Image,
  Platform,

} from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
import { Ionicons, Entypo, FontAwesome5} from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SearchBar from "../../components/SearchBar";
import Style from "./styles";
import LogoSml from "../../components/General/LogoSml";
import Line from "../../components/General/Line";
import GeneralStyle from "../../styles/style";
import style from "./styles";
// import Colors from "../../styles/colors";
// import CheckBox from "expo-checkbox";

var { Icon, } = require('react-native-vector-icons');




export default function HomePage({ navigation }) {
const [isClosed,setIsClosed]=useState(true)

function open(){
  drawer.current.openDrawer();
  setIsClosed(false);
}

function close(){
  drawer.current.closeDrawer();
  setIsClosed(true);
}

const drawer = useRef(null);
const icon = useRef(null);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { 
        return (
            <View style={Style.container}>
              <Ionicons name="menu" size={40} color="black" 
              onPress={() => {
                open() ;
              }}
              />
            </View>
        )
      }
    });
  }, []);


  const drawerView = () => (
    <View style={[Style.container, Style.navigationContainer]}>
      <Ionicons name="close" size={24} color="black" onPress={() => drawer.current.closeDrawer()}/>
      <LogoSml size="40"/>
      <Text style={Style.drawerTitle}>Quick Access</Text>
      <Line color={"#000"} trans={0.25} size={1}/>
      <LinearGradient
        colors={['#0A2249', '#3BA9E8']}
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 1}}
        style={Style.activeScreen}
        >
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>  
          <FontAwesome5 name="user-circle" style={Style.drawerIcon} size={16}/>
          <Text style={Style.drawerTextActive} >My Care Circle</Text>
        </View>
      </LinearGradient>
   
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>  
          <FontAwesome5 name="user-circle" style={Style.drawerIconInactive} size={16}/>
          <Text style={Style.drawerTextInactive} >whatever</Text>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={drawerView}>
    </DrawerLayoutAndroid>
  );
}
