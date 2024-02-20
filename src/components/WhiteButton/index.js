import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const WhiteButton = ({title, targetScreen, clickFunction, children}) => {
  return (
    <TouchableOpacity
      style={styles.SSOButton}
      onPress={() => clickFunction(targetScreen)}
    >
      {children}
      <Text style={[styles.SSOText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default WhiteButton;

const styles = StyleSheet.create({
  SSOButton: {
    backgroundColor: "#fffff",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    margin: 5,
    // flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  SSOText: {
    fontSize: 15,
    textAlign: "center",
  },
});
