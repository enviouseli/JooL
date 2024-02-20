import {
  KeyboardAvoidingView,
  // StyleSheet,
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
import { setLocalStorageItem } from "../../common/functions";
// import callRegister from "../../common/API/callRegister";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSelected, setSelection] = useState(null);
  const [error, setError] = useState(null);
  const handleNavigation = (page) => {
    navigation.navigate(page);
  };
  const handleRegister = async () => {
    setError(null);
    if (username && password && isSelected) {
      try {
        // await callRegister(username, password);
        await setLocalStorageItem('username', username);
        navigation.reset({
          index: 0,
          routes: [{ name: "RegistrationMembershipTypeScreen" }],
        });
        // navigation.replace("RegistrationMembershipTypeScreen")
      } catch (e) {
        // console.log('Error logged from registerscreen ',e);
        setError(" " + e);
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
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

// const styles = StyleSheet.create({});
