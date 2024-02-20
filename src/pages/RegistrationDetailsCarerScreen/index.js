import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageReceived from "../../components/MessageReceived";
import CommonStyles from "../../common/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MessageSent from "../../components/MessageSent";
import { TouchableOpacity } from "react-native-gesture-handler";

const RegistrationDetailsCarerScreen = () => {
  const navigation = useNavigation();
  const [textMessage, setTextMessage] = useState(null);
  const [stage, setStage] = useState("first_name");
  const questions = [
    "first_name",
    "last_name",
    "gender",
    "dob",
    "language",
    "nationality",
    "care_area",
    "current_location",
  ];
  const [messages, setMessages] = useState([
    [
      "bot",
      "I see you are a Carer. Let's finish your profile. I’ll ask you a few questions. It won't take too much time...",
      "welcome",
    ],
    ["bot", "What is your first name?", "first_name"],
    // ["bot", "What is your last name?", "last_name"],
  ]);

  const handleMessage = () => {
    setMessages([...messages, ["man", textMessage]]);
    setTextMessage("");
    setStage("last_name");
  };

  useEffect(() => {
    navigation.setOptions({
      title: null,
      // headerLeft:null
    });
  }, []);
  return (
    <SafeAreaView style={[CommonStyles.container, { padding: 0 }]}>
      <View
        style={[
          CommonStyles.subContainer,
          { backgroundColor: "white", flex: 1 },
        ]}
      >
        <Text style={[CommonStyles.heading]}>
          Complete your profile of carer &#x1F464;
        </Text>
        {/* {messages.forEach((item, index) => <MessageReceived message={item}></MessageReceived>)} */}
        <View style={{}}>
          <FlatList
            data={messages}
            renderItem={({ item }) => {
              // (item[0] === 'bot') &&  (<MessageReceived message={item[1]}></MessageReceived>)
              // (item[0] === 'man') &&  (<MessageReceived message={item[1]}></MessageReceived>)
              if (item[0] === "bot")
                return <MessageReceived message={item[1]}></MessageReceived>;
              else return <MessageSent message={item[1]}></MessageSent>;
            }}
            style={{ borderWidth: 0 }}
          ></FlatList>
          <KeyboardAvoidingView>
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
                style={[CommonStyles.textInput, { color: "black" }]}
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
          </KeyboardAvoidingView>
        </View>
        <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
          <TouchableOpacity
            style={[CommonStyles.DarkBlueButton, { width: 200 }]}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={[CommonStyles.DarkBlueText]}>Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationDetailsCarerScreen;

const styles = StyleSheet.create({});
