import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  messageView: {
    // backgroundColor: "#dedede",
    backgroundColor: "#0078fe",
    padding: 10,
    marginTop: 5,
    marginLeft: "5%",
    maxWidth: "75%",
    alignSelf: "flex-start",
    borderRadius: 20,
  },

  messageText: { 
    fontSize: 16, 
    color: "#fff", 
    justifyContent: "center" 
  },

  leftArrow: {
    position: "absolute",
    backgroundColor: "#0078fe",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#ffffff",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },
});
export default style;
