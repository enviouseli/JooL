import { StyleSheet } from "react-native";
import COLOURS from "./colors";

const CommonStyles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#fff",
  }, 
  subContainer: {
      flex:1,
      backgroundColor: "#ffffff",
      // backgroundColor: "#ff0000",
      paddingVertical: 20,
      paddingHorizontal: 10,
  },
  heading: {
    // margin: 20,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  strikeThroughLine: {
    backgroundColor: "black",
    height: 2,
    flex: 1,
    alignSelf: "center",
  },
  text1:{
    alignSelf: "center",
    paddingHorizontal: 5,
    fontSize: 15,
  },
  textInput: {
    flexGrow:1,
    borderColor:'#000',
    lineHeight:20,
    height:30,
    fontSize:15
  },
  checkbox:{
    alignSelf: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  whiteButton: {
    backgroundColor: "#fffff",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    margin: 5,
    // flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  whiteButtonText: {
    fontSize: 15,
    textAlign: "center",
  },

  DarkBlueButton:{
    backgroundColor: COLOURS.darkBlue,
    borderWidth:1,
    borderRadius:30,
    paddingVertical:10,
    paddingHorizontal:30,
    margin:5,
  },
  DarkBlueText: {
    fontSize:15,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  },

  SignUpButton: {
    backgroundColor: COLOURS.lightBlue,
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    margin: 5,
  },
  SignUpText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  LoginButton: {
    backgroundColor: "#0A2249",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    margin: 5,
  },
  LoginText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  ErrorBlock: {
    backgroundColor:'#f00',
    padding:5,
    margin:5
  },
  ErrorText:{
    color:'#fff',
    fontWeight:'bold',
  }
});


export default CommonStyles;