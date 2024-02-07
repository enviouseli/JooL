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

import { AntDesign, Entypo, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

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
      
      <ScrollView horizontal={true} style={{marginBottom:15}}>
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing1.jpeg")} />
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing3.jpeg")} />
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing2.jpeg")} />
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing4.jpeg")} />
      </ScrollView>

      <View style={{marginBottom:10}}>
      <View style={Style.buttonRow}>
        <MiddleButtons text="Clothing" 
        icon=<Ionicons name='people-outline' size={26} color='#0A2249'/>
        />

        <MiddleButtons text="Books" 
        icon=<Ionicons name='book-outline' size={26} color='#0A2249'/>
        />
      
      </View>
    
      <View style={Style.buttonRow}>
        <MiddleButtons text="Gifts" 
        icon=<Ionicons name='basket-outline' size={26} color='#0A2249'/>
        />
        <MiddleButtons text="Supplements" 
        icon=<SimpleLineIcons name='basket' size={26} color='#0A2249'/>
        />
      </View>
      <View style={Style.buttonRow}>
        <MiddleButtons text="Monitor & Wearable" 
        icon=<Ionicons name='shield-checkmark-outline' size={26} color='#0A2249'/>
        page={() => navigation.navigate('HealthCheck')}
        />
        <MiddleButtons text="Assistive Devices" 
        icon=<Ionicons name='people' size={26} color='#0A2249'/>
        />
      </View>
      </View>


      </SafeAreaView>
  )
}