import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"

const SlidingCard = props=> {
    return (
        <View style={Style.userBox} >
        <Image source={require('../../../assets/TempPhotos/2.jpg')} 
        style={Style.profileImage} />
            <View style={Style.profileBox}>
                <Text style={Style.userBoxGreeting}>Good Morning</Text>
                <Text style={[Style.userBoxText,{alignContent:"center"}]}>Asma Damankesh</Text>
            </View>
            <Fontisto name="bell" size={24} color="black" style={Style.icons}/>
            <Ionicons name="reorder-two-outline" size={24} color="black" style={Style.icons}/>
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