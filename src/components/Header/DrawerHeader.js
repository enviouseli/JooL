import { View, StyleSheet,TouchableOpacity, Image,Text } from "react-native"
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
const DrawerHeader = props=> {
    return (
        <View style={headerStyle.box}>
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

export default DrawerHeader;