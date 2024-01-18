import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
} from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SearchBar from "../../components/SearchBar";
import Style from "./styles";
import Colors from "../../styles/colors";

export default function Home({ navigation }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

    return (
    <SafeAreaView style={[
      Style.conteiner,
      { marginLeft: Platform.OS === "android" ? 0 : 20, marginRight: Platform.OS === "android" ? 0 : 20 },
    ]}>
      <View style={{ flex: 1, justifyContent: "flex-end", alignItems:'center', borderWidth:0 }}>
        <Image source={require('../../../assets/Logo/JooLLogo.png')} style={{ borderWidth:0, borderColor:'#ff0000' }} />
      </View>

      <View style={{ flex: 2, justifyContent: 'center' }}>
        <TouchableOpacity
          style={Style.SignUpButton}
          onPress={() => navigation.navigate("SignUp")}
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

      <View style={{ flexDirection: 'row', marginBottom: 5 }}>
        <View style={{ backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center' }} />
        <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 15 }}>or continue with</Text>
        <View style={{ backgroundColor: 'black', height: 2, flex: 1, alignSelf: 'center' }} />
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