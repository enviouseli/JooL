import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  

profileText: { 
    color: "#0A2249", 
    fontSize: 15,
},

profileBox:{
  paddingTop:5,
  width:"50%",
},
userBoxText:{
  flexGrow: 1, 
  flexShrink: 1, 
  textAlign: 'left',
  flexWrap: 'wrap',
  paddingBottom:10,
},
userBoxGreeting:{
  fontSize:10,
  opacity:0.7,
  paddingTop:10
},
profileImage:{
  height:65, 
  width:65, 
  resizeMode:"cover", 
  borderRadius: 65/2,
  marginHorizontal:5,

},
userBox:{
  height: 70,
  width:"97%",
  borderRadius:15,
  backgroundColor:"#D6D6D6",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  marginTop:15,
  alignSelf:"center"
},
editProfBox: {
  backgroundColor: 'white',
  borderRadius: 10,
  height:60,
  paddingHorizontal: 10,
  width: '95%',
  marginVertical: 10,
  alignSelf:"center",
  flexDirection:"row"
},
inputLable:{
  color: "#0A2249", 
  fontSize: 14,
  alignSelf:"center"
},
inputBox:{
  alignSelf:"center"
}

});
export default style;
