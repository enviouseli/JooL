import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CommonStyles from "../../common/CommonStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EmailInputField = ({username, setUsername}) => {
    // console.log(username);
  return (
    <View style={{marginBottom:50}}>
      <Text style={[CommonStyles.label]}>Email</Text>
      <View style={[styles.fieldRow]}>
        <TextInput
          placeholder="email@address.com"
          defaultValue={username}
          onChangeText={(text) => setUsername(text)}
          style={[CommonStyles.textInput]}
        ></TextInput>
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default EmailInputField;

const styles = StyleSheet.create({
  fieldRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
  },
});
