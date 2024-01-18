import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Platform,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import Style from "./styles";
import CheckBox from "expo-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSelected, setSelection] = useState(null);
  return (
    <SafeAreaView
      style={[
        Style.conteiner,
        {
          marginLeft: Platform.OS === "android" ? 0 : 20,
          marginRight: Platform.OS === "android" ? 0 : 20,
        },
      ]}
    >
      <View style={{ flex: 1, justifyContent: "flex-start", borderWidth: 0 }}>
        <View>
          <Text style={[Style.txtTitle, { borderWidth: 0 }]}>
            Your JooL Care Circle Welcomes You! &#x1F44B;
          </Text>
          <Text style={{ marginTop: 5, fontSize: 15 }}>
            Please enter your email &amp; password to create an account.
          </Text>
        </View>

        <View style={{ flexGrow: 1, paddingTop: 40 }}>
          <Text style={[Style.label]}>Email</Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="email@address.com"
              defaultValue={username}
              onChangeText={(text) => setUsername(text)}
              style={[Style.textInput]}
            ></TextInput>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
          </View>

          <Text style={[Style.label]}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              alignItems: "center",
            }}
          >
            <TextInput
              secureTextEntry={true}
              defaultValue={password}
              onChangeText={(text) => setPassword(text)}
              style={[Style.textInput]}
            ></TextInput>
            <AntDesign name="eyeo" size={24} color="black" />
          </View>

          <View style={Style.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={Style.checkbox}
            />
            <Text style={Style.labelCHK}>
              I agree to Terms &amp; Privacy Policy
            </Text>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <View
              style={{
                backgroundColor: "black",
                height: 2,
                flex: 1,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                paddingHorizontal: 5,
                fontSize: 15,
              }}
            >
              or continue with
            </Text>
            <View
              style={{
                backgroundColor: "black",
                height: 2,
                flex: 1,
                alignSelf: "center",
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={Style.SSOButton}
              onPress={() => navigation.navigate("CareBuddyRegistration")}
            >
              <AntDesign name="apple1" size={24} color="black" />
              <Text style={[Style.SSOText]}>Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Style.SSOButton}
              onPress={() => navigation.navigate("CareBuddyRegistration")}
            >
              <Entypo name="facebook-with-circle" size={24} color="black" />
              <Text style={[Style.SSOText]}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Style.SSOButton}
              onPress={() => navigation.navigate("CareBuddyRegistration")}
            >
              <AntDesign name="google" size={24} color="black" />
              <Text style={[Style.SSOText]}>Google</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={Style.ContinueButton}
              onPress={() => navigation.navigate("RegistrationType")}
            >
              <Text style={[Style.ContinueText]}>Continue</Text>
            </TouchableOpacity>
            <Text style={{ fontSize:15, textAlign:'center', marginVertical:10 }}>Already have an account? Log in</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
