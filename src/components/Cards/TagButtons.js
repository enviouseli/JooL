import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"

const TagButtons = props=> {
    return (
        <View style={[buttonStyle.box, buttonStyle.shadowProp]}>
            <TouchableOpacity onPress={props.page}>
            <Text style={buttonStyle.titleText}>{props.text}</Text>
            </TouchableOpacity >
        </View>
    )
};

const buttonStyle = StyleSheet.create(
    {
        box: {
            backgroundColor: '#CECCCC',
            borderRadius: 15,
            height:20,
            paddingHorizontal: 15,
            marginVertical: 10,
            marginLeft:5,
          },
          shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
         titleText: { color: "#0A2249", fontSize: 12,
         marginRight:5, marginTop:3, flexWrap:"wrap", alignSelf:"center", textAlign:"center"},
         icon:{alignSelf:"center"}
    },
)

export default TagButtons;