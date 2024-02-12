import React, { useState} from "react";
import { useRoute } from "@react-navigation/native"
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
  ImageBackground
} from "react-native";

import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Entypo , FontAwesome5,FontAwesome, Feather, Ionicons} from "@expo/vector-icons";

import Style from "./styles";

import CallButtons from '../../components/Cards/CallButtons'
import style from "./styles";

export default function VideoCall({ navigation }) {
  const route = useRoute()
  const carebuddyImg = route.params.cbimg
  return (
        <SafeAreaView>
          <Text style={Style.videoTitle}>Video Call</Text>
          <View style={Style.videoTime}>
            <FontAwesome name="circle" size={13} style={{color:"red", marginHorizontal:5, opacity:1, padding:3}}/>
            <Text style={Style.videoTimeText}>1:32</Text>
          </View>
          
          <Image source={require('../../../assets/TempPhotos/2.jpg')} style={Style.callImage} />

          <Image source={{uri:carebuddyImg}} style={Style.callerImage} />

          <Image source={{uri:carebuddyImg}}/>

          <View style={Style.callBtn}>
          <CallButtons
            icon=<Ionicons name='mic-outline' size={22} color='#fff'/>
            bgc="gray" 
            />
            <CallButtons
            icon=<Feather name='phone' size={22} color='#fff'/>
            page={() => navigation.goBack()}
            bgc="#FF6C52" 
            />
            <CallButtons
            icon=<Feather name='video' size={22} color='#fff'/>
            bgc="gray" 
            />
          </View>
          <View>
            <Text style={style.chatText}>Swipe up to chat</Text>
            <FontAwesome5 name="chevron-up" size={22} color="black" style={Style.swipIcon} />
            <FontAwesome5 name="chevron-up" size={22} color="gray" style={Style.swipIcon}/>
          </View>
        </SafeAreaView>
  ) 
}

