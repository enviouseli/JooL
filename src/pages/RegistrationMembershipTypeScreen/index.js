import {
  SafeAreaView,
  // StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import MessageReceived from "../../components/MessageReceived";
// import MessageSent from "../../components/MessageSent";
import CommonStyles from "../../common/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import { setLocalStorageItem } from "../../common/functions";

const RegistrationMembershipTypeScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      title:null,
      // headerBackTitle:'sdf',
      headerLeft:null
    });
  },[]);
  return (
    <SafeAreaView style={[CommonStyles.container]}>
      <View style={[CommonStyles.subContainer]}>
        <View style={{ backgroundColor: "white" }}>
          <Text style={[CommonStyles.heading]}>
            Lets Get to Know You &#x1F464;
          </Text>
          <MessageReceived message="Hello, my name is Toelie, your personal Al assistance. It will only take a few moments to setup your care circle. Lets get started."></MessageReceived>
          <MessageReceived
            message={[
              "Are you a Carer or Care Buddy?",
              "• Carer - You provide care, companionship and support to a person, patient or loved one.",
              "• Care Buddy - You are trained and skilled in providing medical care, support and advice to patients and carers on the JooL platform.",
            ]}
          ></MessageReceived>
        </View>
        {/* <MessageSent message="asdfasdf"></MessageSent> */}
        <View style={{ paddingTop: 50, flexDirection: "row", justifyContent:'space-evenly' }}>
          <TouchableOpacity
            style={[CommonStyles.DarkBlueButton,{ width:'45%'}]}
            onPress={async () => {
              await setLocalStorageItem('member-type', 'carer');
              navigation.navigate('RegistrationDetailsCarerScreen')
            }}
          >
            <Text style={[CommonStyles.DarkBlueText]}>Carer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[CommonStyles.DarkBlueButton, {width:'45%'}]}
            onPress={async () => {
              await setLocalStorageItem('member-type', 'care-buddy');
              navigation.navigate('RegistrationDetailsCareBuddyScreen')
            }}
          >
            <Text style={[CommonStyles.DarkBlueText]}>Care Buddy</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <KeyboardAvoidingView>
        <View style={{ backgroundColor: "blue" }}>
          <Text style={{ fontSize: 30, color: "white", padding: 10 }}>
            asdfasdf
          </Text>
        </View>
      </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

export default RegistrationMembershipTypeScreen;


