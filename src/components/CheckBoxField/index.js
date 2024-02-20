import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Checkbox from 'expo-checkbox';
import CommonStyles from "../../common/CommonStyles";

const CheckBoxField = ({isSelected, setSelection}) => {
  return (
    <>
      <View style={CommonStyles.checkboxContainer}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={CommonStyles.checkbox}
        />
        <Text style={CommonStyles.labelCHK}>
          I agree to Terms &amp; Privacy Policy
        </Text>
      </View>
    </>
  );
};

export default CheckBoxField;

const styles = StyleSheet.create({});
