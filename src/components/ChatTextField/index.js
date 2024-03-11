import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CommonStyles from "../../common/CommonStyles";
import { Ionicons } from "@expo/vector-icons";

const ChatTextField = ({ textMessage, setTextMessage, handleMessage }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        height: 50,
      }}
    >
      <TextInput
        placeholder="enter text"
        onChangeText={(text) => setTextMessage(text)}
        style={[
          CommonStyles.textInput,
          { color: "black", paddingHorizontal: 3 },
        ]}
        onEndEditing={() => handleMessage()}
        value={textMessage}
      ></TextInput>
      <Ionicons
        name="send"
        size={24}
        color="black"
        style={{ color: "blue" }}
        onPress={() => handleMessage()}
      />
    </View>
  );
};

export default ChatTextField;

const styles = StyleSheet.create({});
