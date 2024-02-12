import { View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
const ProgBar= props=> {
    return(
        <ProgressBar progress={props.size} color={props.color} 
        style={{backgroundColor:props.bgcolor, borderRadius:20, 
            opacity:props.opc, width:props.w, height:5, alignSelf:"baseline",
             marginTop:2, }}/>
    )
    };
  
export default ProgBar;