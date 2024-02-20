import { View, TouchableOpacity, Text } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
const ProfileCards = ({ text, icon, page }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "50",
        }}
      >
        {icon}
        <Text style={{ color: "#0A2249", fontSize: 15 }}>{text}</Text>
      </View>
      <TouchableOpacity onPress={page}>
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default ProfileCards;
