import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

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
  
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchBox:{ 
    width:"98%",
    marginTop:20, marginBottom:10, marginHorizontal:20, height:38, flexDirection:"row", 
    justifyContent:"space-between", 
    borderRadius:30,
    alignSelf:"center",
    backgroundColor:"white",
    alignItems:"center"},
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
  inputText: {
    width:"75%",
    color: "#000", 
    opacity:0.7, 
    fontSize: 14, 
    marginHorizontal:10, 
    textAlign:"left"},
  iconStyle:{
        marginLeft:10,
    },
  titleText: { 
    color: "#0A2249", 
    fontSize: 14,
    marginLeft:15, 
    marginVertical:5,
    fontWeight:"bold",
    },
  
  wrapper:{
    flexDirection:"row",
    },

number:{
    color: "#0A2249", 
    fontSize: 11,
    marginHorizontal:10,
    marginTop:5,
},
text: { 
    color: "#0A2249", 
    fontSize: 11,
    marginRight:5, 
    marginTop:5,
    flexShrink:1,
},
userBox:{
  height: 70,
  borderRadius:15,
  backgroundColor:"white",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  marginHorizontal:6,
  marginBottom:3,
},
profileImage:{
  height:65, 
  width:65, 
  resizeMode:"cover", 
  borderRadius: 65/2,
  marginHorizontal:5,
},
profileBox:{
  paddingTop:5,
  width:"80%",
  paddingRight:20,
},
userBoxName:{
  textAlign: 'left',
  flexWrap: 'wrap',
  fontSize:13,
  fontWeight:"bold",
},
userBoxJob:{
  fontSize:10,
  opacity:0.8,
  paddingBottom:3
},
userBoxHist:{
  fontSize:8,
  opacity:0.6,
  paddingBottom:3
},
videoTitle:{
  color: "#0A2249", 
  fontSize: 16,
  textAlign:"center"
},
videoTime:{
  flexDirection:"row",
  width:80,
  height:30,
  borderRadius: 10,
  backgroundColor:"gray",
  padding:5,
  margin:10,
  fontWeight:"bold",
},
videoTimeText:{
  color: "#fff", 
  fontSize: 14,
  textAlign:"center",
  padding:2,
},
callImage:{
  width:100,
  height:90,
  borderRadius:15,
  resizeMode:"cover",
  alignSelf:"flex-end",
  marginRight:15
},
callerImage:{
  width:"90%",
  height:"58%",
  resizeMode:"cover",
  alignSelf:"center",
  marginVertical:10,
},
callBtn:{
  flexDirection:"row", width:"50%", alignSelf:"center", justifyContent:"space-around"
},
chatText:{
  alignSelf:"center",
  color:"#000",
  opacity:0.8,
  fontSize:14,
  marginTop:5,
},
swipIcon:{
  padding:0,
  margin:0,
  alignSelf:"center"
}
});
export default style;
