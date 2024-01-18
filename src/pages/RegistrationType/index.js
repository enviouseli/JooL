import React from "react";
import styles from "./styles";
import Colors from '../../styles/colors';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import MessageReceived from "../../components/MessageReceived";

export default function RegistrationType( ) {
  return (
    <SafeAreaView>
      <View>
        <Text style={[styles.txtTitle]}>Let&apos;s Get to Know You &#x1F464;</Text>
      </View>

      <MessageReceived message="Hello, my name is Toelie, your personal AI assistant👋. It will only
        take a few moments to setup your care circle. Let&apos;s get started..." id={1} />
      
      <MessageReceived message={ [
        "Are You a Carer or Care Buddy?",
        "• Carer - You provide care, companionship and support to a person,patient or loved one.",
        "• Care Buddy -You are trained and skilled in providing medical care, support and advice to patients and carers on the JooL platform.",        
        ]} id={1} />

      <View style={{ flexDirection:'row', marginTop:30 }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.darkBlue,
            borderWidth: 1,
            borderRadius: 30,
            padding: 10,
            margin: 5,
            flexGrow:1,
          }}
        >
          <Text style={{ color:'#ffffff', fontWeight:'bold', textAlign:'center', fontSize:15 }}>Carer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.lightBlue,
            borderWidth: 1,
            borderRadius: 30,
            padding: 10,
            margin: 5,
            flexGrow:1,
          }}
        >
          <Text style={{ color:'#ffffff', fontWeight:'bold', textAlign:'center', fontSize:15 }}>Care Buddy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
