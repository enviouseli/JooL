import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Button,
  DrawerLayoutAndroid,
  Text,
  View,
  Platform,

} from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SearchBar from "../../components/SearchBar";
import Style from "./styles";
// import Colors from "../../styles/colors";
// import CheckBox from "expo-checkbox";

export default function HomePage({ navigation }) {



const drawer = useRef(null);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={Style.container}>
            <AntDesign name="menu-fold" size={28} color="black" 
            onPress={() => drawer.current.openDrawer()}
            />
          </View>
        )
      }
    });
  }, []);


  const drawerView = () => (
    <View style={[Style.container, Style.navigationContainer]}>
      <Text style={Style.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={drawerView}>
      <View style={Style.container}>
        <Text style={Style.paragraph}>Drawer on the 'left'!</Text>
        <Button
          title="Change Drawer Position"

        />
        <Text style={Style.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}
