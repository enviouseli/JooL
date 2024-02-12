import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"

const SmallButtons = props=> {
    return (
        <View style={[buttonStyle.box, buttonStyle.shadowProp, {backgroundColor:props.bgc}]}>
            <TouchableOpacity onPress={props.page}>
            <View style={buttonStyle.icon}>
                {props.icon}
            </View>
            <Text style={[buttonStyle.titleText, {fontSize:props.font_size}]}>{props.text}</Text>
            </TouchableOpacity >
        </View>
    )
};

const buttonStyle = StyleSheet.create(
    {
        box: {
            backgroundColor: 'white',
            borderRadius: 20,
            height:80,
            paddingHorizontal: 15,
            width: '28%',
            marginVertical: 10,
            paddingTop:15,
            marginLeft:5,
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

export default SmallButtons;