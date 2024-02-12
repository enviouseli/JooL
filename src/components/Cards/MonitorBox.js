import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"
const MonitorBox = props=> {
    return (
        <View style={slidingStyle.box}>
            <Image source={{uri:props.image}} style={slidingStyle.img}/>
            <Text style={slidingStyle.linkText}
            onPress={props.link}
            >{props.text}</Text>
            <Text style={slidingStyle.priceText}>${props.price}</Text>
        </View>
    )
};

const slidingStyle = StyleSheet.create(
    {
        box:{marginLeft:10, width:170, marginTop:5, borderRadius:20},
        img:{height:150, resizeMode:"cover", borderRadius:20},
        linkText: { color: "#000", opacity: 0.8, fontSize: 12, marginRight:5, marginTop:5,
                    flexShrink:1, flexWrap:"wrap"},
        priceText:{ color: "#000", opacity: 0.8, fontSize: 12, marginRight:5, marginTop:5, fontWeight:"bold"}
    },
)

export default MonitorBox;