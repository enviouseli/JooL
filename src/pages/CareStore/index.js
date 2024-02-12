import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
  ScrollView,
} from "react-native";

import { AntDesign, Entypo, Ionicons, SimpleLineIcons, Fontisto, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import Style from "./styles";
import Colors from "../../styles/colors";

import HeaderMain from '../../components/Header/MainHeader'
import SearchBar from '../../components/Search/SearchBar'
import SlidingStore from '../../components/Cards/SlidingStore'
import MiddleButtons from '../../components/Cards/MiddleButtons'

export default function CareStore({ navigation }) {
  return (
      <SafeAreaView>
        <HeaderMain text="Care Store"
       drawer={() => navigation.toggleDrawer()}
       back={() => navigation.goBack()}
        />
      <SearchBar />
      
      <ScrollView horizontal={true} style={{marginBottom:20}}>
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing1.jpeg")} />
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing3.jpeg")} />
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing2.jpeg")} />
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing4.jpeg")} />
      </ScrollView>

      <View >
      <View style={Style.buttonRow}>
        <MiddleButtons text="Clothing" 
        icon=<Ionicons name='shirt-outline' size={26} color='#0A2249'/>
        page={() => navigation.navigate('Clothing')}
        />

        <MiddleButtons text="Books" 
        icon=<Ionicons name='book-outline' size={26} color='#0A2249'/>
        />
      
      </View>
    
      <View style={Style.buttonRow}>
        <MiddleButtons text="Gifts" 
        icon=<Ionicons name='gift-outline' size={26} color='#0A2249'/>
        />
        <MiddleButtons text="Supplements" 
        icon=<Ionicons name='medkit-outline' size={26} color='#0A2249'/>
        />
      </View>
      <View style={Style.buttonRow}>
        <MiddleButtons text="Monitor & Wearable" 
        icon=<MaterialIcons name='devices-other' size={26} color='#0A2249'/>
        page={() => navigation.navigate('Monitors')}
        />
        <MiddleButtons text="Assistive Devices" 
        icon=<FontAwesome name='assistive-listening-systems' size={26} color='#0A2249'/>
        />
       
      </View>
      </View>


      </SafeAreaView>
  )
}