import React from "react";
import styles from "./styles";
// import Colors from '../../styles/colors';
import { View, Text } from "react-native";

export default function MessageReceived(props) {
  let message=props.message;
  return (
    <View style={[styles.messageView]}>
      
        <Text>{" "}</Text>
        {message.constructor === Array && message.map((item) => {
          return <Text style={[styles.messageText]} key={item} >{item}</Text>;
        })}
        {message.constructor !== Array && (<Text style={[styles.messageText]}>{message}</Text>)}
      
      <View style={styles.leftArrow}></View>
      <View style={styles.leftArrowOverlap}></View>
    </View>
  );
}
