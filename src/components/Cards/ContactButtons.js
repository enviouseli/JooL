import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"

const ContactButtons = props=> {
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
            borderRadius: 15,
            height:55,
            paddingHorizontal: 3,
            width: 35,
            marginVertical: 10,
            paddingTop:17,
            marginRight:2,
          },
          shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
         titleText: { color: "#0A2249", fontSize: 13,
         marginRight:5, marginTop:5, flexWrap:"wrap", alignSelf:"center", textAlign:"center"},
         icon:{alignSelf:"center"}
    },
)

export default ContactButtons;