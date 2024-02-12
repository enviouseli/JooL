import { View, StyleSheet,TouchableOpacity, Image} from "react-native"

const SlidingStore = props=> {
    return (
        <View style={slidingStyle.box}>
            <Image resizeMode='cover' source={props.image} style={slidingStyle.img} />
        </View>
    )
};

const slidingStyle = StyleSheet.create(
    {
        box:{marginLeft:10},
        img:{width:200, height:225, borderRadius:20, borderRadius:20 },
        
    },
)

export default SlidingStore;