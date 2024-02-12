import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
} from "react-native";

import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Style from "./styles";
import Colors from "../../styles/colors";

import HeaderMain from '../../components/Header/MainHeader'
import SmallButtons from '../../components/Cards/SmallButtons'
import SmallButtonsActive from '../../components/Cards/SmallButtonsActive'
import style from "./styles";




export default function HealthCheck({ navigation }) {
  const [showFace,setShowFace]=useState(true)
  const [showPOSM,setShowPOSM]=useState(false)
  return (
      <SafeAreaView>
        <HeaderMain text="My Health Check"
       drawer={() => navigation.toggleDrawer()}
       back={() => navigation.goBack()}
        />
      <View style={Style.buttonRow}>
      
        <SmallButtons text="Face"
        icon=<FontAwesome5 name='user' size={26} color='#0A2249'/>
        page={() => {setShowFace(true); setShowPOSM(false)}}
        bgc={showFace?"#CECCCC":"white"}
        />
      
          <SmallButtons text="POSM" 
          icon=<MaterialCommunityIcons name='dots-grid' size={26} color='#0A2249'/>
          page={() => {setShowFace(false); setShowPOSM(true)}}
          bgc={showPOSM?"#CECCCC":"white"}
          />
      </View>

      {
      showFace ?
      <View>
      <View style={[Style.box1,Style.shadowProp]}>
        <Text style={Style.titleText}>Facial Scan</Text>
        <Text style={Style.text}>
        In order to get accurate pain recognition readings, follow the guidelines below:
        </Text>
        <Text style={[Style.text, {marginTop:15}]}>
        Device:
        </Text>
        <View style={Style.wrapper}>
          <Text style={Style.number}>1.</Text>
          <Text style={Style.text}>Ensure battery level is above 20% and not in power-save mode.</Text>
        </View>
        <View style={Style.wrapper}>
          <Text style={Style.number}>2.</Text>
          <Text style={Style.text}>Ensure your camera lenses are clean and unscratched.</Text>
        </View>
        <View style={Style.wrapper}>
          <Text style={Style.number}>3.</Text>
          <Text style={Style.text}>Place device on a stand (if possible) and about 30cm away from the face.</Text>
        </View>
        <View style={Style.wrapper}>
          <Text style={Style.number}>4.</Text>
          <Text style={Style.text}>Position the device at forehead height or above, with the the face in the scan circle.</Text>
        </View>
      </View>
      <View style={[Style.box2,Style.shadowProp]}>
      <Text style={Style.titleText}>Subject</Text>
        <View style={Style.wrapper}>
          <Text style={Style.number}>1.</Text>
          <Text style={Style.text}>Be still during the measurement.</Text>
        </View>
        <View style={Style.wrapper}>
          <Text style={Style.number}>2.</Text>
          <Text style={Style.text}>Make sure the face is fully exposed , ensuring it is not covered by hair or accessories (i.e. mask, glasses, hat).</Text>
        </View>
        <View style={Style.wrapper}>
          <Text style={Style.number}>3.</Text>
          <Text style={Style.text}>Avoid moving or talking throughout the measurement and remain focused on the screen until the measurement is complete.</Text>
        </View>
      </View>
      <View style={Style.StartButton}>
        <TouchableOpacity onPress={() => navigation.navigate('FaceScan')}>
          <Text style={Style.buttonText}>Start
        </Text>

        </TouchableOpacity>
      </View>
      </View>
      :
      <View>
      <View style={[Style.box1,Style.shadowProp]}>
        <Text style={Style.titleText}>Patient Outcome Scoring Matrix (POSM):</Text>
        <Text style={Style.text}>
        In order to get accurate pain recognition readings, follow the guidelines below:
        </Text>
        <Text style={[Style.text, {marginTop:10, marginBottom:20}]}>
        The Patient Outcome Scoring Matrix (POSM) collects the patient's functional metrics across three distinct datapoints:
        </Text>
        
        <Text style={[Style.titleText, {marginVertical:15}]}>Vital Signs</Text>
        <Text style={[Style.titleText, {marginVertical:15}]}>Activities of daily living (ADL’s) </Text>
        <Text style={[Style.titleText, {marginVertical:15}]}>Mood Scale</Text>
      </View>

      <View style={[Style.box2,Style.shadowProp]}>
        <Text style={Style.titleText}>Reporting Dashboard</Text>
        <Text style={Style.text}>The reporting mechanism provides a real-time dashboard for caregivers to derive insights, ensuring that care provided is dynamically tailored to the patient's evolving state, backed by empirical data analysis.</Text>
      </View>

      <View style={Style.StartButton}>
      <TouchableOpacity onPress={() => navigation.navigate('POSMScan')}>
          <Text style={Style.buttonText}>Start</Text>
      </TouchableOpacity>
      </View>
      </View>

    }

      </SafeAreaView>
  )
}