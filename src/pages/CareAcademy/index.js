import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
} from "react-native";

import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from "@expo/vector-icons";

import Style from "./styles";
import Colors from "../../styles/colors";

import HeaderMain from '../../components/Header/MainHeader'
import SlidingCard from '../../components/Cards/SlidingCards'
import SearchBar from '../../components/Search/SearchBar'
export default function CareAcademy({ navigation }) {
  return (
      <SafeAreaView style={{
        // marginLeft: Platform.OS === "android" ? 0 : 20,
        // marginRight: Platform.OS === "android" ? 0 : 20,
        marginTop: Platform.OS === "android" ? 30 : 50,
        // backgroundColor:'orange'
      }} >
        <HeaderMain text="My Care Academy"
       drawer={() => navigation.toggleDrawer()}
       back={() => navigation.goBack()}
        />
      
      <SearchBar />
      
      <ScrollView nestedScrollEnabled={true} style={{marginBottom:15}}>
      <View>
        <Text style={Style.title}>Level 1 Caregiver Course Foundation - Completed</Text>
      </View>
      <ScrollView horizontal={true}>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll9.jpg")} text="Fundamental of caregiving - 100%"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll8.jpg")} text="Fundamental skills of caregiving - 100%"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll4.jpg")} text="Infection & Nutrition - 100%"/>
      </ScrollView>

      <View>
        <Text style={Style.title}>Level 2 Caregiver Course (Intermediate) - 65%</Text>
      </View>
      <ScrollView horizontal={true}>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll5.jpg")} text="Underestanding Cancer - 65%"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll6.jpg")} text="Working with Cancer Patients - 28%"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll7.jpg")} text="How Aging Affects the Body - 0%"/>
      </ScrollView>

      <View>
        <Text style={Style.title}>Level 3 Caregiver Course (Advanced) - Not Started</Text>
      </View>
      <ScrollView horizontal={true}>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll1.jpg")} text="Help others with dignity"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll2.jpg")} text="Family support and guidance"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll3.jpg")} text="Tools for better engagement"/>
      </ScrollView>

      <View>
        <Text style={Style.title}>Level 4 Caregiver Course (Extra) - Not Started</Text>
      </View>
      <ScrollView horizontal={true}>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll10.jpg")} text="Fundamental Caregiving - Exercise"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll11.jpg")} text="Fundamental Caregiving - Nutrition"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll12.jpg")} text="Fundamental Caregiving - Family Support"/>
      </ScrollView>

      <View>
        <Text style={Style.title}>Caregiver Course (Certification) - Not Started</Text>
      </View>
      <ScrollView horizontal={true}>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll13.jpg")} text="Fundamental Caregiving Certificate - Level 1"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll14.jpg")} text="Fundamental Caregiving Certificate - Level 2"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll15.jpg")} text="Fundamental Caregiving Certificate - Level 3"/>
      </ScrollView>


      <View>
        <Text style={Style.title}>Nursing Caregiver Course - Not Started</Text>
      </View>
      <ScrollView horizontal={true}>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll16.jpg")} text="Nursing Caregiver Course - Level 1"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll17.jpg")} text="Nursing Caregiver Course - Level 2"/>
        <SlidingCard image={require("../../../assets/TempPhotos/CareAcademy/scroll18.jpg")} text="Nursing Caregiver Course - Level 3"/>
      </ScrollView>

      </ScrollView>

      </SafeAreaView>
  ) 
}

