import React from "react";
import styles from "./styles";
// import Colors from '../../styles/colors';
import { View, Text } from "react-native";

export default function MessageSent(props) {
  let message=props.message;
  return (
    <View style={[styles.sentMessageView]}>
        <View style={styles.rightArrow}></View>
        <View style={styles.rightArrowOverlap}></View>
      
        <Text>{" "}</Text>
        {message.constructor === Array && message.map((item) => {
          return <Text style={[styles.sentMessageText]} key={item} >{item}</Text>;
        })}
        {message.constructor !== Array && (<Text style={[styles.sentMessageText]}>{message}</Text>)}
    </View>
  );
}
