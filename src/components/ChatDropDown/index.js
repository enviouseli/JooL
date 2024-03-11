import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import COLOURS from "../../common/colors";

const ChatDropDown = ({ textMessage, setTextMessage, handleMessage }) => {
  //   const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <Picker
        selectedValue={textMessage}
        onValueChange={(itemValue, itemIndex) => setTextMessage(itemValue)}
      >
        <Picker.Item key={" "} label="Select one" value="select" />
        <Picker.Item key={"Male"} label="Male" value="Male" />
        <Picker.Item key={"Female"} label="Female" value="Female" />
      </Picker>
      <Pressable onPress={handleMessage} style={styles.button}>
        <Text style={styles.buttonText}>Select</Text>
      </Pressable>
    </View>
  );
};

export default ChatDropDown;

const styles = StyleSheet.create({
    button: {
        backgroundColor:COLOURS.darkBlue,
        color:'#ffffff',
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        borderRadius:10,
    },
    buttonText: {
        // backgroundColor:'orange',
        // alignContent:'center',
        color:'#ffffff',
        fontSize:20,
    }
});
