import {
  // Alert,
  KeyboardAvoidingView,
  // Modal,
  // Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommonStyles from "../../common/CommonStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import EmailInputField from "../../components/EmailInputField";
import PasswordInputField from "../../components/PasswordInputField";
import CheckBoxField from "../../components/CheckBoxField";
import StrikeThroughText from "../../components/StrikeThrouhText";
import WhiteButton from "../../components/WhiteButton";
import { AntDesign } from "@expo/vector-icons";
// import { setLocalStorageItem } from "../../common/functions";
import callRegister from "../../common/API/callRegister";
import COLOURS from "../../common/colors";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSelected, setSelection] = useState(null);
  const [error, setError] = useState(null);
  const handleNavigation = (page) => {
    navigation.navigate(page);
  };
  const isEmail = (username) => {
    let reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (reg.test(username) === true) {
      console.log("Email is Correct");
      // this.setState({ email: text })
      return true;
    } else {
      // this.setState({ email: text })
      console.log("Email is not Correct");
      return false;
    }
  };
  const handleRegister = async () => {
    console.log('registeration started');
    setError(null);
    if (username && password && isSelected) {
      if (isEmail(username)) {
        try {
          await callRegister(username, password);
          navigation.reset({
            index: 0,
            routes: [{ name: "RegistrationMembershipTypeScreen" }],
          });
          // navigation.replace("RegistrationMembershipTypeScreen")
        } catch (e) {
          // console.log('Error logged from registerscreen ',e);
          setError(" " + e);
        }
      }
      else {
        setError('Email is not valid');
      }
    } else {
      setError(
        "Please provide username/password and accept the terms and conditions"
      );
    }
  };
  useEffect(() => {
    navigation.setOptions({
      title: null,
      headerBackTitle: "Back",
    });
  }, []);

  return (
    <SafeAreaView style={[CommonStyles.container]}>
      <View style={[CommonStyles.subContainer]}>
        <Text style={[CommonStyles.heading]}>
          Your JooL Care Circle Welcomes You! &#128075;
        </Text>
        <Text>
          Please enter your email &amp; password to login to your account
        </Text>

        <KeyboardAvoidingView>
          {error && (
            <View style={[CommonStyles.ErrorBlock]}>
              <Text style={[CommonStyles.ErrorText]}>{error}</Text>
            </View>
          )}
          <View style={{ flexGrow: 1, paddingTop: 40 }}>
            <EmailInputField
              username={username}
              setUsername={setUsername}
            ></EmailInputField>
            <PasswordInputField
              password={password}
              setPassword={setPassword}
            ></PasswordInputField>
            <CheckBoxField
              isSelected={isSelected}
              setSelection={setSelection}
            ></CheckBoxField>

            <View style={{ flexGrow: 1 }}>
              <StrikeThroughText>or continue with</StrikeThroughText>
              <View style={{ flexDirection: "row" }}>
                <WhiteButton
                  title="Apple"
                  targetScreen="HomeScreen"
                  clickFunction={handleNavigation}
                >
                  <AntDesign name="apple1" size={24} color="black" />
                </WhiteButton>
                <WhiteButton
                  title="Facebook"
                  targetScreen="HomeScreen"
                  clickFunction={handleNavigation}
                >
                  <AntDesign name="apple1" size={24} color="black" />
                </WhiteButton>
                <WhiteButton
                  title="Facebook"
                  targetScreen="HomeScreen"
                  clickFunction={handleNavigation}
                >
                  <AntDesign name="apple1" size={24} color="black" />
                </WhiteButton>
              </View>
              <View>
                <TouchableOpacity
                  style={CommonStyles.DarkBlueButton}
                  onPress={() => handleRegister()}
                >
                  <Text style={[CommonStyles.DarkBlueText]}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
    marginHorizontal: 3,
    width: 100,
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
    fontSize: 20,
    fontWeight: "bold",
  },
});
