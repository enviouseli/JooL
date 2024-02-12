import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"

const MiddleButtons = props=> {
    return (
        <View style={[buttonStyle.box, buttonStyle.shadowProp]}>
            <TouchableOpacity onPress={props.page}>
            <View style={buttonStyle.icon}>
                {props.icon}
            </View>
            <Text style={buttonStyle.titleText}>{props.text}</Text>
            </TouchableOpacity >
        </View>
    )
};

const buttonStyle = StyleSheet.create(
    {
        box: {
            backgroundColor: 'white',
            borderRadius: 20,
            height:108,
            paddingHorizontal: 25,
            width: '45%',
            marginVertical: 2,
            paddingTop:15
          },
          shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
        titleText: { color: "#0A2249", fontSize: 16,
         marginRight:5, marginTop:5, flexWrap:"wrap", alignSelf:"center", textAlign:"center"},
         icon:{alignSelf:"center"}
    },
)

export default MiddleButtons;