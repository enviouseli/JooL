import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SearchBar from "../../components/SearchBar";
import Style from "./styles";
// import Colors from "../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
// import callLogin from "../../common/API/callLogin";
import CommonStyles from "../../common/CommonStyles";
// import { setLocalStorageItem } from "../../common/functions";
import callLogin from "../../common/API/callLogin";
// import axios from "axios";
// import API_URL, { MEMBER_LOGIN_ENDPOINT } from "../../common/constants";

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSelected, setSelection] = useState(null);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); 
  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
}; 
  useEffect(() => {
    navigation.setOptions({
      title: "Login",
      headerBackTitle: "Back",
    });
  }, []);
  const handleLogin = async () => {
    
    /* await axios.post(API_URL + MEMBER_LOGIN_ENDPOINT, {
      username: username,
      password: password,
    })
    .then((res)=>console.log('axios ', res.data)); */

    if (username && password) {
      try {
        await callLogin(username, password);
        // await setLocalStorageItem('username', username);
        navigation.replace("HomePage");
      } catch (e) {
        setError(" " + e);
      }
    } else {
      setError("Please enter username and password");
    }
  };

  return (
    <SafeAreaView
      style={[
        Style.container,
        {
          marginLeft: Platform.OS === "android" ? 0 : 0,
          marginRight: Platform.OS === "android" ? 0 : 0,
        },
      ]}
    >
      <View style={{paddingHorizontal:5}}>
        <Text style={[Style.txtTitle]}>Welcome Back!</Text>
        <Text>
          Please enter your email &amp; password to login to your account
        </Text>
      </View>

      
        {error && (
          <View style={[CommonStyles.ErrorBlock]}>
            <Text style={[CommonStyles.ErrorText]}>{error}</Text>
          </View>
        )}

        <View
          style={{
            flexGrow: 1,
            paddingTop: 40,
            // backgroundColor: "orange",
            paddingHorizontal: 10,
          }}
        >
          <KeyboardAvoidingView>
          <Text style={[Style.label]}>Email</Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="email@address.com"
              defaultValue={username}
              onChangeText={(text) => setUsername(text)}
              style={[Style.textInput]}
            ></TextInput>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
          </View>

          <Text style={[Style.label]}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              alignItems: "center",
            }}
          >
            <TextInput
              secureTextEntry={!showPassword}
              defaultValue={password}
              onChangeText={(text) => setPassword(text)}
              style={[Style.textInput]}
            ></TextInput>
            <AntDesign name="eyeo" size={24} color="black" onPress={toggleShowPassword} />
          </View>

          <View style={Style.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={Style.checkbox}
            />
            <Text style={Style.labelCHK}>
              I agree to Terms &amp; Privacy Policy
            </Text>
          </View>

          </KeyboardAvoidingView>
        </View>
      
      <View>
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <View
            style={{
              backgroundColor: "black",
              height: 2,
              flex: 1,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              paddingHorizontal: 5,
              fontSize: 15,
            }}
          >
            or continue with
          </Text>
          <View
            style={{
              backgroundColor: "black",
              height: 2,
              flex: 1,
              alignSelf: "center",
            }}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={Style.SSOButton}
            onPress={() => navigation.navigate("CareBuddyRegistration")}
          >
            <AntDesign name="apple1" size={24} color="black" />
            <Text style={[Style.SSOText]}>Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.SSOButton}
            onPress={() => navigation.navigate("CareBuddyRegistration")}
          >
            <Entypo name="facebook-with-circle" size={24} color="black" />
            <Text style={[Style.SSOText]}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.SSOButton}
            onPress={() => navigation.navigate("CareBuddyRegistration")}
          >
            <AntDesign name="google" size={24} color="black" />
            <Text style={[Style.SSOText]}>Google</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={Style.ContinueButton}
            onPress={() => handleLogin()}
          >
            <Text style={[Style.ContinueText]}>Continue</Text>
          </TouchableOpacity>
          <Text
            style={{ fontSize: 15, textAlign: "center", marginVertical: 10 }}
          >
            Already have an account? Log in
          </Text>
        </View>
      </View>
      {/* <View style={{ flex: 1, justifyContent: "center" }}>
        <Image source={require("../../../assets/Logo/JooLLogo.png")} />
      </View> */}
    </SafeAreaView>
  );
  // }
}
