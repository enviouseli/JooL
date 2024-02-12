import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"
const ClothingBox = props=> {
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
        box:{marginLeft:10, width:"48%", marginTop:5},
        img:{height:150, resizeMode:"cover"},
        linkText: { color: "#000", opacity: 0.8, fontSize: 12, marginRight:5, marginTop:5,
                    flexShrink:1, flexWrap:"wrap"},
        priceText:{ color: "#000", opacity: 0.8, fontSize: 12, marginRight:5, marginTop:5, fontWeight:"bold"}
    },
)

export default ClothingBox;