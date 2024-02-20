import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    // paddingLeft: 20,
    paddingTop: 20,
    // marginTop: 20,
    backgroundColor: "#fff",
    // backgroundColor: "orange",
  },
  txtTitle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    // textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    flexGrow:1,
    // borderBottomWidth:1,
    borderColor:'#000',
    // borderWidth:1,
    lineHeight:20,
    height:40
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginTop:30
  },
  labelCHK: {
    margin: 8,
  },
  SSOButton: {
    backgroundColor: '#fffff',
    borderWidth:1,
    borderRadius:30,
    padding:10,
    margin:5,
    // flex:1,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'center',
    gap: 10,
  },
  SSOText: {
    fontSize:15,
    textAlign:'center'
  },

  ContinueButton:{
    backgroundColor: '#0A2249',
    borderWidth:1,
    borderRadius:30,
    padding:10,
    margin:5,
  },
  ContinueText: {
    fontSize:15,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  }
  
});
export default style;
