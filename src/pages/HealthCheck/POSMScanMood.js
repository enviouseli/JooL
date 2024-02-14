import React, { useState} from "react";
import { useRoute } from "@react-navigation/native"
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
  ImageBackground,
} from "react-native";

import { ScrollView } from 'react-native-gesture-handler';
import { Entypo , FontAwesome, FontAwesome5,MaterialIcons, Ionicons} from "@expo/vector-icons";

import Style from "./styles";

import SubPageHeader from '../../components/Header/SubPageHeader'
import ProgBar from '../../components/General/ProgBar'
import BarDetails from '../../components/General/HealthCheck/BarDetails'
import Bar from '../../components/General/HealthCheck/Bar'
import style from "./styles";

export default function POSMScanMood({ navigation }) {

  [isComplete,setIsComplete]=useState(false)
  return (
        <SafeAreaView>

      <SubPageHeader text="My Health Check"
       back={() => navigation.goBack()}
        />

      <View style={[Style.box3,Style.shadowProp]}>
        <FontAwesome5 name='user' size={22} color='#0A2249'/>
        <Text style={Style.blueText}>Mood Scale</Text>
      </View>

      <View style={{height:500}}>
      <View style={Style.barTextView}>
        <Text style={Style.barText}>Happy</Text>
        <Text style={Style.barText}>Sad</Text>
      </View>
      <View style={[Style.box6,Style.shadowProp,{marginVertical:5}]}>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20, paddingVertical:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:151, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.40} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
      </View>

      <View style={Style.barTextView}>
        <Text style={Style.barText}>Calm</Text>
        <Text style={Style.barText}>Tense</Text>
      </View>
      <View style={[Style.box6,Style.shadowProp,{marginVertical:5}]}>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20, paddingVertical:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:151, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.40} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
      </View>

      <View style={Style.barTextView}>
        <Text style={Style.barText}>Energetic</Text>
        <Text style={Style.barText}>Sleepy</Text>
      </View>
      <View style={[Style.box6,Style.shadowProp,{marginVertical:5}]}>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20, paddingVertical:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:151, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.40} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
      </View>

      <View style={Style.barTextView}>
        <Text style={Style.barText}>Relaxed</Text>
        <Text style={Style.barText}>Stressed</Text>
      </View>
      <View style={[Style.box6,Style.shadowProp,{marginVertical:5}]}>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20, paddingVertical:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:151, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.40} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
      </View>
      </View>
      <View style={[Style.StartButton, {marginTop:22, height:40}]}>
        <TouchableOpacity onPress={()=>navigation.navigate("PatientDashboard")}>
          <Text style={Style.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      
          
    </SafeAreaView>
  ) 
}

