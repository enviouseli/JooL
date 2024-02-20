import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import CommonStyles from '../../common/CommonStyles';


const PasswordInputField = ({password, setPassword}) => {
  return (
    <View style={{marginBottom:50}}>
        <Text style={[CommonStyles.label]}>Password</Text>
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
              style={[CommonStyles.textInput]}
            ></TextInput>
            <AntDesign name="eyeo" size={24} color="black" />
          </View>
    </View>
  )
}

export default PasswordInputField

const styles = StyleSheet.create({})