import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
} from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";

import Style from "./styles";
// import Colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const navigation = useNavigation();
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("username").then((value) => setUsername(value));
  }, [username]);

  return (
    <SafeAreaView
      style={[
        Style.conteiner,
        {
          marginLeft: Platform.OS === "android" ? 0 : 0,
          marginRight: Platform.OS === "android" ? 0 : 0,
          // backgroundColor:'orange'
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          borderWidth: 0,
        }}
      >
        <Image
          source={require("../../../assets/Logo/JooL-Logo.png")}
          style={{ borderWidth: 0, borderColor: "#ff0000" }}
        />
      </View>

      <View style={{ flex: 2, justifyContent: "center" }}>
        {/* <Text>b{username}a</Text> */}
        <TouchableOpacity
          style={Style.SignUpButton}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={[Style.SignUpText]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.LoginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[Style.LoginText]}>Log in</Text>
        </TouchableOpacity>
      </View>

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
          style={{ alignSelf: "center", paddingHorizontal: 5, fontSize: 15 }}
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

      <View>
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
    </SafeAreaView>
  );
}
