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
    alignItems:"flex-start"
  },

  box1: {
    backgroundColor: 'white',
    borderRadius: 20,
    height:"45%",
    paddingHorizontal: 10,
    width: '95%',
    marginVertical: 10,
    paddingTop:10,
    alignSelf:"center",
    alignItems:"flex-start",
  },
  box2: {
    backgroundColor: 'white',
    borderRadius: 20,
    height:"30%",
    paddingHorizontal: 10,
    width: '95%',
    marginVertical: 10,
    paddingTop:10,
    alignSelf:"center",
    alignItems:"flex-start",
  },
  StartButton:{
    backgroundColor: '#0A2249',
    height:40,
    borderWidth:1,
    borderRadius:30,
    padding:5,
    margin:5,
    verticalAlign:"bottom"
  },
  waitButton:{
    marginTop:10,
    backgroundColor: '#fff',
    height:40,
    borderRadius:30,
    padding:5,
    margin:5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  titleText: { 
    color: "#0A2249", 
    fontSize: 12,
    marginRight:5, 
    marginTop:5,
    fontWeight:"bold",
},
buttonText: { 
    color: "#fff", 
    fontSize: 16,
    marginRight:5, 
    marginTop:5,
    fontWeight:"bold",
    textAlign:"center"
},
resultText: { 
  color: "#5EA505", 
  fontSize: 18,
  marginRight:5, 
  marginTop:5,
  fontWeight:"bold",
  textAlign:"center"
},
wrapper:{
    flexDirection:"row",
    alignSelf:"center",
    justifyContent:"space-between",
    paddingTop:10
},

number:{
    color: "#0A2249", 
    fontSize: 11,
    marginHorizontal:10,
    marginTop:5,
},
text: { 
    color: "#0A2249", 
    fontSize: 12,
    marginRight:10,
},
box3: {
  backgroundColor: 'white',
  borderRadius: 20,
  height:85,
  paddingHorizontal: 10,
  width: '60%',
  marginVertical: 10,
  paddingTop:15,
  alignSelf:"center",
  alignItems:"center",
},
faceScanImg:{
  width:"75%",
  alignSelf:"center",
  height:400,
  marginVertical:25,
},
blueText:{
  color: "#0A2249", 
  fontSize: 14, 
  fontWeight:"bold",
  alignSelf:"center",
  paddingTop:5
},

box3: {
  backgroundColor: 'white',
  borderRadius: 20,
  height:85,
  paddingHorizontal: 10,
  width: '60%',
  marginVertical: 10,
  paddingTop:15,
  alignSelf:"center",
  alignItems:"center",
},
box4:{
  marginVertical:10,
  backgroundColor: '#fff',
  width:"98%",
  height:90,
  borderRadius:30,
  padding:5,
  alignSelf:"center",
  paddingTop:10
},
posmTxt:{
  color: "#0A2249", 
  fontSize: 12, 
  paddingLeft:15,
  marginTop:12
},
box5:{
  marginVertical:10,
  backgroundColor: '#fff',
  width:"98%",
  height:77,
  borderRadius:30,
  padding:5,
  alignSelf:"center",
  paddingTop:5
},
box6:{
  marginVertical:10,
  backgroundColor: '#fff',
  width:"98%",
  height:60,
  borderRadius:20,
  padding:5,
  alignSelf:"center",
  paddingTop:5
},
barText:{
  fontSize:11, opacity:0.8, color:"#000"
},
barTextView:{
  flexDirection:"row", width:"96%", paddingLeft:30, paddingTop:5, justifyContent:"space-between",
  paddingRight:10
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
  paddingTop:10,
},
userBoxGreeting:{
  fontSize:10,
  opacity:0.7,
  paddingBottom:10
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
  width:"90%",
  borderRadius:15,
  backgroundColor:"#D6D6D6",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  marginTop:15,
  alignSelf:"center"
},

box7: {
  backgroundColor: 'white',
  borderRadius: 20,
  height:"50%",
  paddingHorizontal: 10,
  width: '95%',
  marginVertical: 10,
  paddingTop:10,
  alignSelf:"center",
  alignItems:"flex-start",
},

});
export default style;
