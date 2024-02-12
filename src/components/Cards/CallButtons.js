import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"

const CallButtons = props=> {
    return (
        <View style={[buttonStyle.box, buttonStyle.shadowProp, {backgroundColor:props.bgc}]}>
            <TouchableOpacity onPress={props.page}>
            <View style={buttonStyle.icon}>
                {props.icon}
            </View>
            </TouchableOpacity >
        </View>
    )
};

const buttonStyle = StyleSheet.create(
    {
        box: {
            backgroundColor: 'white',
            borderRadius: 50/2,
            height:50,
            paddingHorizontal: 4,
            width: 50,
            paddingVertical:13,
            marginRight:2,
          },
          shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
         icon:{alignSelf:"center"}
    },
)

export default CallButtons;