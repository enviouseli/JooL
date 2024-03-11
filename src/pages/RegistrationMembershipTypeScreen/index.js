import {
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MessageReceived from "../../components/MessageReceived";
// import MessageSent from "../../components/MessageSent";
import CommonStyles from "../../common/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import { setLocalStorageItem } from "../../common/functions";
import COLOURS from "../../common/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import callMemberUpdate from "../../common/API/callMemberUpdate";
// import callMemberUpdate from "../../common/API/callMemberUpdate";

const RegistrationMembershipTypeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(()=>{
    
    navigation.setOptions({
      title:null,
      // headerBackTitle:'sdf',
      headerLeft:null
    });

    AsyncStorage.getItem("username").then((value) => {
      setUsername(value)
      // console.log( "registration details username: ",value );
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
              /* try {
                callMemberUpdate('asma', {type:'carer', first_name:'asmae', last_name:'dami'});
              }
              catch(e) {
                console.log(e);
              } */
              // setModalVisible(true);
              await setLocalStorageItem('member-type', 'carer');
              console.log( username );
              callMemberUpdate(username , {'type' : 'carer' });
              navigation.navigate('RegistrationDetailsCarerScreen')
            }}
          >
            <Text style={[CommonStyles.DarkBlueText]}>Carer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[CommonStyles.DarkBlueButton, {width:'45%'}]}
            onPress={async () => {
              // setModalVisible(true);
              await setLocalStorageItem('member-type', 'care-buddy');
              console.log( username );
              callMemberUpdate(username , {'type' : 'care-buddy' });
              navigation.navigate('RegistrationDetailsCareBuddyScreen')
            }}
          >
            <Text style={[CommonStyles.DarkBlueText]}>Care Buddy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Jool use current location</Text>
            <Text style={styles.modalText}>
              Jool wishes to use your location data for further functionality
              within the application. All data is completely confidential. You
              can change this in your phone settings.
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginHorizontal:3,
    width:100,
    backgroundColor: COLOURS.darkBlue,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalHeading: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:20,
    fontWeight:"bold"
  },
});

export default RegistrationMembershipTypeScreen;


