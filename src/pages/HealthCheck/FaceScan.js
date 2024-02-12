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

import SubPageHeader from '../../components/Header/SubPageHeader'
import style from "./styles";

export default function FaceScan({ navigation }) {

  [isComplete,setIsComplete]=useState(false)
  return (
        <SafeAreaView>

      <SubPageHeader text="My Health Check"
       back={() => navigation.goBack()}
        />

      <View style={[Style.box3,Style.shadowProp]}>
        <FontAwesome5 name='user' size={22} color='#0A2249'/>
        {isComplete?
        <Text style={Style.blueText}>Face scanning Complete</Text>
        :
        <Text style={Style.blueText}>Face scanning ...</Text>
        }
      </View>

      <Image source={require('../../../assets/TempPhotos/faceScan.png')} style={Style.faceScanImg}/>

      <View style={[Style.waitButton,Style.shadowProp]}>
      {isComplete?
        <TouchableOpacity onPress={() => navigation.navigate('FaceScanResult')}>
        <Text style={Style.resultText}> View Result</Text>
        </TouchableOpacity>
        :
        <Text style={Style.blueText}> Important: Hold still.</Text>
        }
      </View>

      <View style={[Style.StartButton, {marginTop:22}]}>
        {isComplete?
        <TouchableOpacity>
          <Text style={Style.buttonText}>Face Scanning ... 100% complete</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>setIsComplete(true)}>
          <Text style={Style.buttonText}>Face Scanning ... 60% complete</Text>
        </TouchableOpacity>
        }
      </View>
          
    </SafeAreaView>
  ) 
}

