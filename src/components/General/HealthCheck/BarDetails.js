import { View, Text} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
const BarDetails= props=> {
    return(
      <View>
        <View style={{flexDirection:"row", width:"96%", paddingLeft:20, paddingTop:5, justifyContent:"space-between"}}>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
            <Text style={{fontSize:5, opacity:0.5}}>|</Text>
          </View>
          <View style={{flexDirection:"row", width:"96%", paddingLeft:20, paddingTop:5, justifyContent:"space-between"}}>
            <Text style={{fontSize:8, opacity:0.5, color:props.tc1}}>{props.txt1}</Text>
            <Text style={{fontSize:8, opacity:0.5, color:props.tc2}}>{props.txt2}</Text>
            <Text style={{fontSize:8, opacity:0.5, color:props.tc3}}>{props.txt3}</Text>
            <Text style={{fontSize:8, opacity:0.5, color:props.tc4}}>{props.txt4}</Text>
            <Text style={{fontSize:8, opacity:0.5, color:props.tc5}}>{props.txt5}</Text>
            <Text style={{fontSize:8, opacity:0.5, color:props.tc6}}>{props.txt6}</Text>
          </View>
          </View>
    )
    };
  
export default BarDetails;