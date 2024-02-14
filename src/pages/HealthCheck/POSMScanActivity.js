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

export default function POSMScanActivity({ navigation }) {

  [isComplete,setIsComplete]=useState(false)
  return (
        <SafeAreaView>

      <SubPageHeader text="My Health Check"
       back={() => navigation.goBack()}
        />

      <View style={[Style.box3,Style.shadowProp]}>
        <FontAwesome5 name='user' size={22} color='#0A2249'/>
        <Text style={Style.blueText}>Activity of Daily Living</Text>
      </View>

      <ScrollView style={{height:500}}>
      
      <Text style={Style.posmTxt}>Mobility</Text>
      <View style={[Style.box5,Style.shadowProp,{marginVertical:5}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={26} color="#32A6F9" style={{marginLeft:277}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:283, color:"#fff", fontSize:10}}>4</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:288, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.80} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
          <BarDetails txt1={0} txt2={1} txt3={2} txt4={3} txt5={4} txt6={5}
                      tc1="#000" tc2="#000" tc3="#000" tc4="#000" tc5="#000" tc6="#000"/>
      </View>

      
      <Text style={Style.posmTxt}>Nutrition</Text>
      <View style={[Style.box5,Style.shadowProp,{marginVertical:5}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={26} color="#32A6F9" style={{marginLeft:140}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:148, color:"#fff", fontSize:10}}>2</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:151, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.40} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
          <BarDetails txt1={0} txt2={1} txt3={2} txt4={3} txt5={4} txt6={5}
                      tc1="#000" tc2="#000" tc3="#000" tc4="#000" tc5="#000" tc6="#000"/>
      </View>


      <Text style={Style.posmTxt}>Dressing</Text>
      <View style={[Style.box5,Style.shadowProp,{marginVertical:5}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={26} color="#32A6F9" style={{marginLeft:277}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:283, color:"#fff", fontSize:10}}>4</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:288, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.8} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
          <BarDetails txt1={0} txt2={1} txt3={2} txt4={3} txt5={4} txt6={5}
                      tc1="#000" tc2="#000" tc3="#000" tc4="#000" tc5="#000" tc6="#000"/>
      </View>

      <Text style={Style.posmTxt}>Personal Hygiene</Text>
      <View style={[Style.box5,Style.shadowProp,{marginVertical:5}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={26} color="#32A6F9" style={{marginLeft:312}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:316, color:"#fff", fontSize:10}}>4.5</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:322, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.90} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
          <BarDetails txt1={0} txt2={1} txt3={2} txt4={3} txt5={4} txt6={5}
                      tc1="#000" tc2="#000" tc3="#000" tc4="#000" tc5="#000" tc6="#000"/>
      </View>


      <Text style={Style.posmTxt}>Continence</Text>
      <View style={[Style.box5,Style.shadowProp,{marginVertical:5}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={26} color="#32A6F9" style={{marginLeft:140}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:148, color:"#fff", fontSize:10}}>2</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:151, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.40} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
          <BarDetails txt1={0} txt2={1} txt3={2} txt4={3} txt5={4} txt6={5}
                      tc1="#000" tc2="#000" tc3="#000" tc4="#000" tc5="#000" tc6="#000"/>
      </View>

      <Text style={Style.posmTxt}>Toileting</Text>
      <View style={[Style.box5,Style.shadowProp,{marginVertical:5}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={26} color="#32A6F9" style={{marginLeft:140}}/>
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:4, marginLeft:148, color:"#fff", fontSize:10}}>2</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <FontAwesome name="circle" size={10} color="white" 
            style={[{paddingLeft:151, position:"absolute", zIndex:1}, style.shadowProp]}/>
            <ProgBar size={0.40} color="#32A6F9" bgcolor="#88e2f2" opc={0.7} w={340} />
          </View>
          <BarDetails txt1={0} txt2={1} txt3={2} txt4={3} txt5={4} txt6={5}
                      tc1="#000" tc2="#000" tc3="#000" tc4="#000" tc5="#000" tc6="#000"/>
      </View>
      </ScrollView>

      <View style={[Style.StartButton, {marginTop:20}]}>
        <TouchableOpacity onPress={()=>navigation.navigate("POSMScanMood")}>
          <Text style={Style.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
          
    </SafeAreaView>
  ) 
}

