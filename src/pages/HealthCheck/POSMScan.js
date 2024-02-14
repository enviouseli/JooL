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

export default function POSMScan({ navigation }) {

  [isComplete,setIsComplete]=useState(false)
  return (
        <SafeAreaView>

      <SubPageHeader text="My Health Check"
       back={() => navigation.goBack()}
        />

      {/*box1*/}
      <View style={[Style.box3,Style.shadowProp]}>
        <FontAwesome5 name='user' size={22} color='#0A2249'/>
        <Text style={Style.blueText}>Vital Signs</Text>
      </View>

      <Text style={Style.posmTxt}>Body Temperature</Text>
      <View style={[Style.box4,Style.shadowProp,{marginVertical:5}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={30} color="#32A6F9" style={{marginLeft:106}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:108, color:"#fff", fontSize:10}}>36.5</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:117, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.30} color="#32A6F9" bgcolor="#FFc7c7" opc={0.7} w={340} />
          </View>

          <BarDetails txt1={35} txt2={36} txt3={37} txt4={38} txt5={39} txt6={40}
                      tc1="#000" tc2="#000" tc3="#000" tc4="red" tc5="red" tc6="red"/>
      </View>


      <Text style={Style.posmTxt}>Pulse Rate(bpm)</Text>
      <View style={[Style.box4,Style.shadowProp,{marginVertical:5}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={30} color="#32A6F9" style={{marginLeft:140}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:145, color:"#fff", fontSize:10}}>80</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:151, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.40} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
            <View style={{width:50, height:5, color:"green", position:"absolute", zIndex:2}}>
              <Text> </Text>
            </View>
          </View>

          <BarDetails txt1={40} txt2={60} txt3={80} txt4={100} txt5={120} txt6={140}
                      tc1="#000" tc2="#000" tc3="#000" tc4="#000" tc5="red" tc6="red"/>
      </View>

      <Text style={Style.posmTxt}>Respiration</Text>
      <View style={[Style.box4,Style.shadowProp,{marginVertical:5}]}>
        <Bar tran={1} size={5} color="red" w={70} marginT={42} marginL={25}/>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={30} color="#32A6F9" style={{marginLeft:244}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:246, color:"#fff", fontSize:10}}>94%</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:254, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.70} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>

          <BarDetails txt1={80} txt2={84} txt3={88} txt4={92} txt5={96} txt6={100}
                      tc1="#000" tc2="#000" tc3="#000" tc4="red" tc5="red" tc6="red"/>
      </View>


      <Text style={Style.posmTxt}>Blood Pressure</Text>
      <View style={[Style.box4,Style.shadowProp,{marginVertical:5}]}>
          <View style={{ flexDirection: 'row', marginLeft:13, marginBottom:12}}>

            <FontAwesome name="circle" size={15} color="green"
            style={[{paddingLeft:83, position:"absolute", opacity:0.5}, style.shadowProp]}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginLeft:84, color:"#fff", fontSize:10, alignSelf:"center"}}>S</Text>
            </View>

            <FontAwesome name="circle" size={15} color="red"
            style={[{paddingLeft:218, position:"absolute", opacity:0.5}, style.shadowProp]}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginLeft:219, color:"#fff", fontSize:10, alignSelf:"center"}}>D</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
          <Bar tran={1} size={5} color="blue" w={132} marginT={32} marginL={80}/>
            <MaterialIcons name="chat-bubble" size={30} color="#32A6F9" style={{marginLeft:75}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:80, color:"#fff", fontSize:11}}>80</Text>
            </View>

            <MaterialIcons name="chat-bubble" size={30} color="#32A6F9" style={{marginLeft:105}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:214, color:"#fff", fontSize:10}}>120</Text>
            </View>
          </View>

          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:85, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:218, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
            <View style={{width:50, height:5, color:"green", position:"absolute", zIndex:2}}>
              <Text> </Text>
            </View>
          </View>

          <BarDetails txt1={60} txt2={80} txt3={100} txt4={120} txt5={140} txt6={160}
                      tc1="#000" tc2="#000" tc3="#000" tc4="#000" tc5="red" tc6="red"/>
      </View>

      <View style={[Style.StartButton, {marginTop:22}]}>
        <TouchableOpacity onPress={() => navigation.navigate('POSMScanActivity')}>
          <Text style={Style.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
          
    </SafeAreaView>
  ) 
}

