import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    // paddingHorizontal: 20,
    // paddingTop: 20,
    // marginTop: 20,
    backgroundColor: "#fff",
  },
  txtTitle: {
    margin: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
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
  SignUpButton: {
    backgroundColor: '#3B5B8F',
    borderWidth:1,
    borderRadius:30,
    padding:10,
    margin:5,
  },
  SignUpText: {
    fontSize:15,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  },
  LoginButton:{
    backgroundColor: '#0A2249',
    borderWidth:1,
    borderRadius:30,
    padding:10,
    margin:5,
  },
  LoginText:{
    fontSize:15,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  },
});

export default style;
