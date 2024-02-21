import { View, StyleSheet,TextInput } from "react-native"
import React, { useState,useEffect } from "react";
import { Ionicons,Entypo } from '@expo/vector-icons';
const SearchBar = props=> {
    const [searchText, setSearchText] = useState("");
    return (
        <View style={[barStyle.box,barStyle.shadowProp]}>
            <Ionicons name="search-sharp" size={20} color="gray" style={{marginLeft:10}}/>
            <TextInput style={barStyle.inputText}
            value={searchText}
            placeholder="search for ... "
            onChangeText={(text) => setSearchText(text)}
            />
            <Entypo name="sound-mix" size={24} color="black" style={{marginRight:10, 
                }}/>
        </View>
    )
};

const barStyle = StyleSheet.create(
    {
        box:{ 
        width:"98%",
        marginTop:20, marginBottom:10, marginHorizontal:20, height:38, flexDirection:"row", 
        justifyContent:"space-between", 
        borderRadius:30,
        alignSelf:"center",
        backgroundColor:"white",
        alignItems:"center"},
        shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
        inputText: {width:"75%",color: "#000", opacity:0.7, fontSize: 14, 
        marginHorizontal:10, textAlign:"left"},
        iconStyle:{
            marginLeft:10,
        }
    },
)

export default SearchBar;