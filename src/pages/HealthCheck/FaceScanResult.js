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
  style
} from "react-native";

import { ScrollView } from 'react-native-gesture-handler';
import SubPageHeader from '../../components/Header/SubPageHeader'
import ProgBar from '../../components/General/ProgBar'
import BarDetails from '../../components/General/HealthCheck/BarDetails'
import ResultBox from '../../components/General/HealthCheck/ResultBox'
import { MaterialIcons , FontAwesome5, FontAwesome, Feather, Ionicons, Entypo} from "@expo/vector-icons";

import Style from "./styles";


export default function FaceScanResult({ navigation }) {
  
  return (
      <SafeAreaView>
        <SubPageHeader text="My Health Check"
        back={() => navigation.navigate('HealthCheck')}
          />

        <View style={[Style.box3,Style.shadowProp]}>
          <FontAwesome5 name='user' size={22} color='#0A2249'/>
          <Text style={Style.blueText}>Facial pain scanning result</Text>
        </View>



        <View style={[Style.box4,Style.shadowProp, {marginVertical:80,}]}>
          <View style={{ flexDirection: 'row', marginLeft:13,}}>
            <MaterialIcons name="chat-bubble" size={28} color="#32A6F9" />
            <View style={{position:"absolute"}}>
              <Text style={{padding:2, marginTop:1, marginLeft:8, color:"#fff"}}>0</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", width:"99%", paddingLeft:20}}>
            <Entypo name="circle" size={10} color="gray" style={{paddingLeft:12, position:"absolute"}}/>
            <ProgBar size={1} color="#32A6F9" bgcolor="#32A6F9" opc={0.5} w={340}/>
          </View>

          <BarDetails txt1={0} txt2={2} txt3={4} txt4={6} txt5={8} txt6={10}
                      tc1="#000" tc2="#000" tc3="#000" tc4="#000" tc5="#000" tc6="#000"/>
          
          <View style={Style.barTextView}>
            <Text style={Style.barText}>No Pain</Text>
            <Text style={Style.barText}>Severe Pain</Text>
          </View>
        </View>

        <View style={[Style.box4,Style.shadowProp, {marginVertical:80,}]}>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
             <ResultBox text="Absent" bgc="#35A647" bc="#000" tc="#fff"/>
             <ResultBox text="Absent" bgc="#fff" bc="#FECA57" tc="#0A2249"/>
             <ResultBox text="Absent" bgc="#fff" bc="#FF9D0A" tc="#0A2249"/>
             <ResultBox text="Absent" bgc="#fff" bc="#F80D38" tc="#0A2249"/>
          </View>
        </View>

        <View style={Style.StartButton}>
        
        <TouchableOpacity onPress={()=>navigation.navigate("HomePage")}>
          <Text style={Style.buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>
          
    </SafeAreaView>
  ) 
}

