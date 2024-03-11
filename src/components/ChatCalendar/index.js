import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import COLOURS from "../../common/colors";
// import { Localization } from 'expo';


const ChatCalendar = ({ handleMessageDate }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    let currentDate = selectedDate;
    setDate(currentDate);
    Platform.OS=='ios' ? setShow(false):null;
    // setDate(currentDate);
    // setTextMessage(currentDate);
    currentDate = currentDate.getFullYear() + '-' + currentDate.getMonth().toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0');
    console.log(currentDate);
    handleMessageDate(currentDate.toString());
  };

  const showMode = (currentMode) => {
    if (Platform.OS == "android") {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    } else if (Platform.OS == "ios") {
      setShow(true);
      setMode(currentMode);
    }
  };

  const showDatepicker = () => {
    showMode("date");
  };

  useEffect(() => {
    Platform.OS == "ios" ? showMode("date"):null;
  });

  /*   const showTimepicker = () => {
    showMode('time');
  };
 */

  // console.log(Localization);

  return (
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      {Platform.OS == "android" && (
      <Pressable onPress={showDatepicker} style={styles.button}>
        <Text style={styles.buttonText}>Select Date</Text>
      </Pressable>
      )}
    </View>
  );
};


export default ChatCalendar;

const styles = StyleSheet.create({
  button: {
    // backgroundColor: COLOURS.darkBlue,
    // color: "#ffffff",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    margin:10,
    borderRadius: 10,
  },
  buttonText: {
    // backgroundColor:'orange',
    // alignContent:'center',
    // color: "#ffffff",
    color: "#000000",
    fontSize: 20,
  },
});
