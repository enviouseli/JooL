import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#fff",
  },  
  
  icons:{
    marginRight:5,
  },
  
  buttonRow:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"flex-start",
    marginBottom:5,
  },
  title:{
    color:"#0A2249",
    fontSize:14,
    marginLeft:15,
    marginVertical:5
  }

});
export default style;
