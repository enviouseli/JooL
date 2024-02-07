
import {
    Image,
  } from "react-native";

const logoIcon= ({size}) => {
    perc=size+"%";
    return(
    <Image source={require('../../../assets/Logo/JooLLogo.png')} 
    style={{ borderWidth:0, borderColor:'#ff0000', width: perc,
    height: perc, resizeMode: 'contain',}} />)
    };
  
  export default logoIcon;


