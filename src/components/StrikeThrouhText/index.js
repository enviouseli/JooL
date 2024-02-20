import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CommonStyles from "../../common/CommonStyles";

const StrikeThroughText = ({children}) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 5 }}>
      <View style={[CommonStyles.strikeThroughLine]} />
      <Text style={[CommonStyles.text1]}>{children}</Text>
      <View style={[CommonStyles.strikeThroughLine]} />
    </View>
  );
};

export default StrikeThroughText;

const styles = StyleSheet.create({});
