
import React,{ useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { Fontisto,Ionicons } from '@expo/vector-icons';
import SlidingCard from '../../components/Cards/SlidingCards'
import MiddleButtons from '../../components/Cards/MiddleButtons'
 
import Style from "../HomePage/styles";
// import CareBuddyRegistration from '../pages/CareBuddyRegistration'
import {
  Text,
  View,
  Image,
  Button,
  DrawerLayoutAndroid,
  TouchableOpacity,
  ImageComponent,
} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';


export default function HomePage({ navigation }) {
  return (
    <View style={Style.conteiner}>


      <View style={Style.userBox} >
      <Image source={require('../../../assets/TempPhotos/2.jpg')} 
      style={Style.profileImage} />
          <View style={Style.profileBox}>
            <Text style={Style.userBoxGreeting}>Good Morning</Text>
            <Text style={[Style.userBoxText,{alignContent:"center"}]}>Asma Damankesh</Text>
          </View>
        <Fontisto name="bell" size={24} color="black" style={Style.icons}/>
        <Ionicons name="reorder-two-outline" size={24} color="black" style={Style.icons}/>
      </View>


      <View style={Style.mediaBox}>
        <TouchableOpacity style={[Style.mediaButton, {backgroundColor:"#0A2249"}]}>
          <Text style={[Style.mediaButtonText, {color:"#fff"}]}>Video</Text></TouchableOpacity>
        <TouchableOpacity style={Style.mediaButton}><Text style={Style.mediaButtonText}>Podcast</Text></TouchableOpacity>
        <TouchableOpacity style={Style.mediaButton}><Text style={Style.mediaButtonText}>Articles</Text></TouchableOpacity>
      </View>


      <View>
        <Text style={{marginTop:15, marginBottom:5}}>Recommended for you</Text></View>
      <ScrollView horizontal={true}>
        <SlidingCard image={require("../../../assets/TempPhotos/scroll1.jpg")} text="Help Others with dignity"/>
        <SlidingCard image={require("../../../assets/TempPhotos/scroll2.jpg")} text="Family Support and Guidance"/>
      </ScrollView>



      <View style={{marginBottom:10}}>
      <View style={Style.buttonRow}>
        <MiddleButtons text="My Care Circle" 
        icon=<Fontisto name='bell' size={20} color='black' style={Style.icons}/>
        page={() => navigation.navigate('CareCircle')}
        />
        <MiddleButtons text="My Care Academy" icon=<Fontisto name='bell' size={20} color='black' style={Style.icons}/>/>
      </View>
    
      <View style={Style.buttonRow}>
        <MiddleButtons text="My In-App Purchase" icon=<Fontisto name='bell' size={20} color='black' style={Style.icons}/>/>
        <MiddleButtons text="My Care Store" icon=<Fontisto name='bell' size={20} color='black' style={Style.icons}/>/>
      </View>
      <View style={Style.buttonRow}>
        <MiddleButtons text="My Health check" icon=<Fontisto name='bell' size={20} color='black' style={Style.icons}/>/>
        <MiddleButtons text="My Care Community" icon=<Fontisto name='bell' size={20} color='black' style={Style.icons}/>/>
      </View>
      </View>
    </View>
   
  )
}
