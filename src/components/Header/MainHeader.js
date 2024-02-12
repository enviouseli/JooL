import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
const HeaderMain = props=> {
    return (
        <View style={headerStyle.box}>
           
            
            <TouchableOpacity onPress={props.back}>
            <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity >
            <Text style={headerStyle.headerText}>{props.text}</Text>
            <TouchableOpacity onPress={props.drawer}>
            <MaterialIcons name="menu" size={25} />
            </TouchableOpacity >
        </View>
    )
};

const headerStyle = StyleSheet.create(
    {
        box:{width:"100%", height:20, flexDirection:"row", justifyContent:"space-between"},
        headerText: { width:"80%",color: "#0A2249", fontSize: 16, marginRight:5, alignSelf:"center", textAlign:"center"},
    },
)

export default HeaderMain;