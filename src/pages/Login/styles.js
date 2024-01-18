import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  txtTitle: {
    margin: 20,
    // textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    flexGrow:1,
    // borderBottomWidth:1,
    borderColor:'#000',
    // borderWidth:1,
    lineHeight:5,
    height:50
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
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
  
});
export default style;
