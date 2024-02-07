import React, { useState } from "react";
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
import Colors from "../../styles/colors";

import HeaderMain from '../../components/Header/MainHeader'

export default function CareCircle({ navigation }) {
  return (
      <SafeAreaView>
        <HeaderMain text="Care Circle"
       drawer={() => navigation.toggleDrawer()}
       back={() => navigation.goBack()}
        />
      <Text>CareCircle</Text>
      </SafeAreaView>
  )
}