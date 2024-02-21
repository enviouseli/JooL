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

const RegistrationDetailsCareBuddyScreen = () => {
  const navigation = useNavigation();
  const [textMessage, setTextMessage] = useState(null);
  const [stages, setStages] = useState(null);
  const [completeButton, setCompleteButton] = useState(false);
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
    'last_name' : 'what is your last name?',
    'gender' : 'What is your gender?',
    'dob' : 'what is your date of birth?',
    'language' : 'what is your prefered language?',
    'nationality' : 'what is your nationality?',
    'care_area' : 'Allow us to know the location where care is provided?',
    'current_location' : 'what is your current location?',
  };

  const handleMessage = () => {
    // setMessages([...messages, ]);
    // console.log('stage shift: ', stages.shift());
    // console.log('stages after shift', stages);
    const stage = stages.shift();
    console.log( 'stage shift ', stage )
    if( questions[stage] ) {
      console.log( 'stage condition true', stage )
      setStages([...stages]);
      setMessages([...messages, ...[ ["man", textMessage, 'welcome'], ["bot", questions[stage], stage] ] ] );
      setTextMessage("");
      // console.log('handle message', questions[stage] );
      // console.log('handle message', stages );
    }
    else {
      setCompleteButton(true);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: null,
      // headerLeft:null
    });
    console.log('useeffect without dependencies')
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

    
    console.log(stages)
  }, []);
  return (
    <SafeAreaView style={[CommonStyles.container, { padding: 0 }]}>
      <ScrollView style={styles.scrollView} ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
      <View
        style={[
          CommonStyles.subContainer,
          { backgroundColor: "white" },
        ]}
      >
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
          { messages.map((item)=>{
            // console.log(item)
            if (item[0] === "bot")
                return <MessageReceived message={item[1]}></MessageReceived>;
              else return <MessageSent message={item[1]}></MessageSent>;
          }) 
          }

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
                style={[CommonStyles.textInput, { color: "black", paddingHorizontal:3 }]}
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
          {completeButton && 
          (<TouchableOpacity
            style={[CommonStyles.DarkBlueButton, { width: 200 }]}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={[CommonStyles.DarkBlueText]}>Complete</Text>
          </TouchableOpacity>
          ) }
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationDetailsCareBuddyScreen;

const styles = StyleSheet.create({});
