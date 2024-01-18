import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  Platform,
  Image,
  Button,
  H2,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "../../components/SearchBar";
import Style from "./styles";
import Colors from "../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";

export default function Login({ navigation }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSelected, setSelection] = useState(null);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     setLoading(true);
  //     const getData = async () => {
  //       try {
  //         let notes = await AsyncStorage.getItem("notes");
  //         if (notes === undefined || notes === null) {
  //           notes = "[]";
  //         }
  //         if (notes.length > 0 && notes[0] !== "[") {
  //           notes = `[${notes}]`;
  //         }
  //         setData(JSON.parse(notes));
  //         setLoading(false);
  //       } catch (err) {
  //         // console.log(err);
  //         // alert("Error loading notes");
  //       }
  //     };
  //     getData();
  //   }, [])
  // );
  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <ActivityIndicator size={"large"} color={Colors.loading} />
  //     </View>
  //   );
  // } else {
  return (
    <SafeAreaView
      style={[
        Style.conteiner,
        {
          marginLeft: Platform.OS === "android" ? 0 : 20,
          marginRight: Platform.OS === "android" ? 0 : 20,
        },
      ]}
    >
      <View>
        <Text style={[Style.txtTitle]}>Welcome Back!</Text>
      </View>

      <View style={{ flexGrow: 1, paddingTop: 40 }}>
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
            secureTextEntry={true}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
            style={[Style.textInput]}
          ></TextInput>
          <AntDesign name="eyeo" size={24} color="black" />
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
            onPress={() => navigation.navigate("RegistrationType")}
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
