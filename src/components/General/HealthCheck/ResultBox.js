
import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"

const ResultBox = props=> {
    return (
            <View style={[Style.box,{backgroundColor:props.bgc, borderColor:props.bc}]}>
              <Text style={[Style.text, {color:props.tc}]}>{props.text}</Text>
            </View>
    )
};
const Style = StyleSheet.create(
    {
        box: {
            height:65, 
            width:65, 
            borderWidth:1, 
            marginHorizontal:10,
            justifyContent:"center",
            backgroundColor:"white",
            marginTop:7

          },
          shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
         text:{
            fontSize:12,
            color:"#000",
            textAlign:"center"
         }
    },
)

export default ResultBox;