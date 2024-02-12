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
      <View style={[Style.box4,Style.shadowProp,{marginVertical:12}]}>
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


      {/*box2*/}
      <View style={[Style.box4,Style.shadowProp,{marginVertical:12}]}>
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

      {/*box3*/}
      <View style={[Style.box4,Style.shadowProp,{marginVertical:12}]}>
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


      {/*box4*/}
      <View style={[Style.box4,Style.shadowProp,{marginVertical:12}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={30} color="#32A6F9" style={{marginLeft:106}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:108, color:"#fff", fontSize:10}}>36.5</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:117, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.30} color="#32A6F9" bgcolor="#F80D38" opc={0.7} w={340} />
          </View>

          <BarDetails txt1={35} txt2={36} txt3={37} txt4={38} txt5={39} txt6={40}
                      tc1="#000" tc2="#000" tc3="#000" tc4="red" tc5="red" tc6="red"/>
      </View>

      <View style={[Style.StartButton, {marginTop:22}]}>
        <TouchableOpacity onPress={()=>setIsComplete(true)}>
          <Text style={Style.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
          
    </SafeAreaView>
  ) 
}

