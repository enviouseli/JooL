import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"

const SlidingCard = props=> {
    return (
        <View style={slidingStyle.box}>
            <Image source={props.image} style={slidingStyle.img}/>
            <TouchableOpacity>
            <Text style={slidingStyle.titleText}>{props.text}</Text>
            </TouchableOpacity >
        </View>
    )
};

const slidingStyle = StyleSheet.create(
    {
        box:{marginLeft:10},
        img:{width:250, height:150, borderRadius:20, },
        titleText: { color: "#000", opacity: 0.6, fontSize: 12, marginRight:5, marginTop:5},
    },
)

export default SlidingCard;