import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#fff",
  },  
  userBox:{
    height: 70,
    width:"98%",
    borderRadius:15,
    borderWidth:2,
    borderColor:"#0A2249",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:20,
    alignSelf:"center"

  },
  mediaBox:{
    height: 30,
    width:"98%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    alignSelf:"center"
  },
  profileImage:{
    height:65, 
    width:65, 
    resizeMode:"cover", 
    borderRadius: 65/2,
    marginHorizontal:5,

  },
  icons:{
    marginRight:5,
  },
  profileBox:{
    width:"50%",
    flexDirection:"column",
    justifyContent:"space-around"
  },
  userBoxText:{
    flexGrow: 1, 
    flexShrink: 1, 
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  userBoxGreeting:{
    fontSize:10,
    opacity:0.7,
    paddingBottom:5
  },
  mediaButton:{
    height: 30,
    width:"33%",
    borderRadius:30,
    borderWidth:1,
    borderColor:"#0A2249",
    marginTop:15,
  },
  mediaButtonText:{
    textAlign:"center",
    marginTop:5,
  },
  buttonRow:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"flex-start"
  },

  drawerTitle: {
    fontSize:14,
    color:"#0A2249",
    opacity:1,
  },
  activeScreen:{
    width:"100%",
    height:30,
    borderRadius:50,
  },
  drawerTextActive:{
    marginLeft:10,
    marginTop:5,
    paddingRight:10,
    color:"#fff",
    fontSize:12,
  },
  drawerIconActive:{
    marginLeft:10,
    marginTop:6,
    verticalAlign:"middle",
    color:"#fff",
  },
  drawerTextInactive:{
    marginLeft:10,
    marginTop:5,
    paddingRight:10,
    color:"#000",
    fontSize:12,
  },
  drawerIconInactive:{
    marginLeft:10,
    marginTop:6,
    verticalAlign:"middle",
    color:"#000",
  }
});
export default style;
