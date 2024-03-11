import React, { useEffect, useState } from "react";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import { SafeAreaView, Text, View, Image } from "react-native";

import HeaderMain from "../../../components/Header/MainHeader";
// import ProfileCards from "../../../components/Cards/ProfileCards";
import Style from "../styles";
import {
  // Octicons,
  Fontisto,
  Ionicons,
  // MaterialIcons,
  // FontAwesome5,
  // Entypo,
  // MaterialCommunityIcons,
  // AntDesign,
} from "@expo/vector-icons";
import style from "../styles";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditProfile() {
  const navigation = useNavigation();
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState("date");
  // const [show, setShow] = useState(false);

  const [username, setUsername] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("user").then((value) => {
      let full_name = JSON.parse(value);
      setUsername( full_name.firstname + ' ' + full_name.lastname);
    });
  }, [username]);

  const [fullName, onChangedFN] = useState("Alireza Damankesh");
  const [nickName, onChangedNN] = useState("A.D");

  useEffect(() => {
    AsyncStorage.getItem("user").then((value) => {
      let full_name = JSON.parse(value);
      onChangedFN( full_name.firstname + ' ' + full_name.lastname);
    });
  }, [fullName]);

  return (
    <SafeAreaView>
      <HeaderMain
        text="Edit Profile"
        drawer={() => navigation.toggleDrawer()}
        back={() => navigation.goBack()}
      />

      <View style={Style.userBox}>
        <Image
          source={require("../../../../assets/TempPhotos/2.jpg")}
          style={Style.profileImage}
        />
        <View style={Style.profileBox}>
          <Text style={Style.userBoxGreeting}>Hello</Text>
          <Text style={[Style.userBoxText, { alignContent: "center" }]}>
            {username}
          </Text>
        </View>
        <Fontisto name="bell" size={24} color="black" style={Style.icons} />
        <Ionicons
          name="reorder-two-outline"
          size={24}
          color="black"
          style={Style.icons}
        />
      </View>

      <View style={[style.editProfBox, style.shadowProp]}>
        <Text style={Style.inputLable}>Full Name: </Text>
        <TextInput
          onChangeText={onChangedFN}
          value={fullName}
          placeholder={fullName}
          style={Style.inputBox}
        />
      </View>

      <View style={[style.editProfBox, style.shadowProp]}>
        <Text style={Style.inputLable}>Nick Name: </Text>
        <TextInput
          onChangeText={onChangedNN}
          value={nickName}
          placeholder={nickName}
          style={Style.inputBox}
        />
      </View>
    </SafeAreaView>
  );
}
