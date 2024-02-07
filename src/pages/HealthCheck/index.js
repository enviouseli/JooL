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

export default function HealthCheck({ navigation }) {
  return (
      <SafeAreaView>
        <HeaderMain text="My Health Check"
       drawer={() => navigation.toggleDrawer()}
       back={() => navigation.goBack()}
        />
      <Text>Health Check</Text>
      </SafeAreaView>
  )
}