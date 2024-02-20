import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  sentMessageView: {
    backgroundColor: "#dedede",
    // backgroundColor: "#0078fe",
    padding: 10,
    marginTop: 5,
    marginRight: "5%",
    maxWidth: "75%",
    alignSelf: "flex-end",
    borderRadius: 20,
  },
  sentMessageText: { fontSize: 16, color: "#000000", justifyContent: "center" },
  rightArrow: {
    position: "absolute",
    // backgroundColor: "#0078fe",
    backgroundColor: "#dedede",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },

  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#ffffff",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },
});
export default style;
