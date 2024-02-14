import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
} from "react-native";

import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Fontisto, Ionicons } from "@expo/vector-icons";
import Style from "./styles";
import Colors from "../../styles/colors";

import HeaderMain from '../../components/Header/MainHeader'
import SmallButtons from '../../components/Cards/SmallButtons'
import SmallButtonsActive from '../../components/Cards/SmallButtonsActive'
import style from "./styles";




export default function PatientDashboard({ navigation }) {
  return (
      <SafeAreaView>
        <HeaderMain text="Patient Dashboard"
       drawer={() => navigation.toggleDrawer()}
       back={() => navigation.goBack()}
        />

    <View style={Style.userBox} >
      <Image source={require('../../../assets/TempPhotos/patient1.jpeg')} 
      style={Style.profileImage} />
          <View style={Style.profileBox}>
            <Text style={[Style.userBoxText,{alignContent:"center"}]}>Barbara Leo</Text>
            <Text style={Style.userBoxGreeting}>Age:72</Text>
          </View>
        <Fontisto name="bell" size={24} color="black" style={Style.icons}/>
        <Ionicons name="reorder-two-outline" size={24} color="black" style={Style.icons}/>
      </View>

      <View>
      <View style={[Style.box7,Style.shadowProp]}>
        <Text style={Style.titleText}>{new Date().toLocaleString()}</Text>
        
        <Image source={require('../../../assets/TempPhotos/patientScore.png')} 
        style={{height:220, width:330, resizeMode:"center", alignSelf:"center"}} />

        <View style={Style.wrapper}>
          <View style={Style.wrapper}>
            <FontAwesome name="circle" size={14} color="black" style={{marginRight:2, color:"#0DB131"}}/>
            <Text style={Style.text}>Vital Signs</Text>
          </View>
          <View style={Style.wrapper}>
            <FontAwesome name="circle" size={14} color="black" style={{marginRight:2, color:"#FECA57"}}/>
            <Text style={Style.text}>Activities of Daily Living</Text>
          </View>
          <View style={Style.wrapper}>
            <FontAwesome name="circle" size={14} color="black" style={{marginRight:2, color:"#0DB131"}}/>
            <Text style={Style.text}>Mood Score</Text>
          </View>
        </View>
      </View>
      <View style={[Style.box2,Style.shadowProp]}>
      <Text style={Style.titleText}>Summary:</Text>
        <View style={{flexDirection:"row", height:50, paddingTop:10}}>
          <Text style={{color:"red", fontWeight:"bold",  marginRight:5}}>ALERT:</Text>
          <Text style={Style.text}>Barbara’s overall ADL’s score is problematic.</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{color:"#000", fontWeight:"bold",  marginRight:5}}>Action</Text>
          <Text style={Style.text}>Your care-buddy and Barbara’s physician have been informed and will contact you soon. </Text>
        </View>
      </View>
      
      </View>
      

      </SafeAreaView>
  )
}