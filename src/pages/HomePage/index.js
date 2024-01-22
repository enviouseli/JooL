import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Platform,

} from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SearchBar from "../../components/SearchBar";
import Style from "./styles";
// import Colors from "../../styles/colors";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import CheckBox from "expo-checkbox";

export default function Login({ navigation }) {
  const [data, setData] = useState(null);
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


    </SafeAreaView>
  );
  // }
}
