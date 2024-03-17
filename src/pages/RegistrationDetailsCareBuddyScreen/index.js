import {
  // StyleSheet,
  Text,
  View,
  // FlatList,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageReceived from "../../components/MessageReceived";
import CommonStyles from "../../common/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MessageSent from "../../components/MessageSent";
import { TouchableOpacity } from "react-native-gesture-handler";
import callMemberUpdate from "../../common/API/callMemberUpdate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ChatTextField from "../../components/ChatTextField";
import ChatDropDown from "../../components/ChatDropDown";
import ChatCalendar from "../../components/ChatCalendar";

const RegistrationDetailsCareBuddyScreen = () => {
  const navigation = useNavigation();
  const [textMessage, setTextMessage] = useState(null);
  const [stages, setStages] = useState(null);
  const [completeButton, setCompleteButton] = useState(false);
  const [currentStage, setCurrentStage] = useState("first_name");
  const [username, setUsername] = useState(null);
  const scrollViewRef = useRef();
  // const questions = ;
  const [messages, setMessages] = useState([
    [
      "bot",
      "I see you are a Carer. Let's finish your profile. I’ll ask you a few questions. It won't take too much time...",
      "welcome",
    ],
    ["bot", "What is your first name?", "first_name"],
    // ["bot", "What is your last name?", "last_name"],
  ]);
  const questions = {
    // 'first_name' : 'what is your first name?',
    last_name: ["What is your last name?", "text"],
    gender: ["What is your gender?", "select"],
    dob: ["What is your date of birth?", "date"],
    language: ["What is your prefered language?", "text"],
    nationality: ["What is your nationality?", "text"],
    care_area: [
      "Allow us to know the location where care is provided?",
      "text",
    ],
    current_location: ["What is your current location?", "text"],
  };

  const handleMessage = () => {
    console.log(username, { [currentStage]: textMessage });
    callMemberUpdate(username, { [currentStage]: textMessage });

    const stage = stages.shift();
    console.log("stage shift ", stage);

    if (questions[stage]) {
      console.log("stage condition true", stage);
      setStages([...stages]);
      setMessages([
        ...messages,
        ...[
          ["man", textMessage, "welcome"],
          ["bot", questions[stage][0], stage],
        ],
      ]);
      setTextMessage("");
      setCurrentStage(stage);
    } else {
      setCompleteButton(true);
    }
  };

  const handleMessageDate = (textMsg) => {
    console.log(username, { [currentStage]: textMsg });
    callMemberUpdate(username, { [currentStage]: textMsg });
    let stage = stages.shift();
    // console.log("stage shift ", stage);
    if (questions[stage]) {
      setStages([...stages]);
      setMessages([
        ...messages,
        ...[
          ["man", textMsg, "welcome"],
          ["bot", questions[stage][0], stage],
        ],
      ]);
      setTextMessage("");
      setCurrentStage(stage);
    } else {
      setCompleteButton(true);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: null,
      // headerLeft:null
    });
    console.log("useeffect without dependencies");
    setStages([
      // "first_name",
      "last_name",
      "gender",
      "dob",
      "language",
      "nationality",
      "care_area",
      "current_location",
    ]);
    AsyncStorage.getItem("username").then((value) => {
      setUsername(value);
      // console.log( "registration details username: ",value );
    });

    console.log(stages);
  }, []);
  let inputElement =
    currentStage in questions ? questions[currentStage][1] : "text";
  return (
    <SafeAreaView style={[CommonStyles.container, { padding: 0 }]}>
      <ScrollView
        style={styles.scrollView}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <View style={[CommonStyles.subContainer, { backgroundColor: "white" }]}>
          <Text style={[CommonStyles.heading]}>
            Complete your profile of care buddy &#x1F464;
          </Text>
          {/* {messages.forEach((item, index) => <MessageReceived message={item}></MessageReceived>)} */}
          <View style={{}}>
            {/* <FlatList
            data={messages}
            renderItem={({ item }) => {
              if (item[0] === "bot")
                return <MessageReceived message={item[1]}></MessageReceived>;
              else return <MessageSent message={item[1]}></MessageSent>;
            }}
            style={{ borderWidth: 0 }}
          ></FlatList> */}
            {messages.map((item) => {
              // console.log(item)
              if (item[0] === "bot")
                return <MessageReceived message={item[1]}></MessageReceived>;
              else return <MessageSent message={item[1]}></MessageSent>;
            })}

            <KeyboardAvoidingView>
              {/* <Text>{currentStage} {(currentStage in questions)?questions[currentStage][1]:'-'} </Text> */}
              {inputElement == "text" && (
                <ChatTextField
                  textMessage={textMessage}
                  setTextMessage={setTextMessage}
                  handleMessage={handleMessage}
                ></ChatTextField>
              )}
              {inputElement == "select" && (
                <ChatDropDown
                  textMessage={textMessage}
                  setTextMessage={setTextMessage}
                  handleMessage={handleMessage}
                ></ChatDropDown>
              )}
              {inputElement == "date" && (
                <ChatCalendar
                  handleMessageDate={handleMessageDate}
                ></ChatCalendar>
              )}
            </KeyboardAvoidingView>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {completeButton && (
              <TouchableOpacity
                style={[CommonStyles.DarkBlueButton, { width: 200 }]}
                onPress={() => navigation.navigate("HomePage")}
              >
                <Text style={[CommonStyles.DarkBlueText]}>Complete</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationDetailsCareBuddyScreen;

const styles = StyleSheet.create({});
