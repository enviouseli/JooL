import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
  ScrollView,
  Linking
} from "react-native";

import { AntDesign, Entypo, Ionicons, SimpleLineIcons, Fontisto, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import Style from "./styles";
import Colors from "../../styles/colors";

import HeaderMain from '../../components/Header/MainHeader'
import SearchBar from '../../components/Search/SearchBar'
import SlidingStore from '../../components/Cards/SlidingStore'
import ClothingBox from '../../components/Cards/ClothingBox'
import MonitorBox from '../../components/Cards/MonitorBox'
import style from "./styles";

export default function Monitors({ navigation }) {
  return (
      <SafeAreaView style={{paddingBottom:20}}>
        <HeaderMain text="Monitors & Wearable"
       drawer={() => navigation.toggleDrawer()}
       back={() => navigation.goBack()}
        />
      <SearchBar />
      <Text style={style.title}>New Arrivals</Text>
      <ScrollView horizontal={true} style={{marginBottom:15}}>
      <MonitorBox 
        image="https://m.media-amazon.com/images/I/51qdnF7F1SL._SL1080_.jpg"
        text="Deluxe SM-110 Two Way Display Finger Pulse Oximeter with Carry Case"
        link={() => Linking.canOpenURL("https://www.amazon.ae/Deluxe-SM-110-Display-Finger-Oximeter/dp/B003TJH3LI/").then(() => {
            Linking.openURL("https://www.amazon.ae/Deluxe-SM-110-Display-Finger-Oximeter/dp/B003TJH3LI/");
        })}
        price={43.2}
        />
        <MonitorBox 
        image="https://m.media-amazon.com/images/I/61NxJfL53sL._AC_SL1177_.jpg"
        text="A&D Simple Upper Arm Blood Pressure Monitor, White - Ua611"
        link={() => Linking.canOpenURL("https://www.amazon.ae/Simple-Upper-Blood-Pressure-Monitor/dp/B00JQ7SZLO").then(() => {
            Linking.openURL("https://www.amazon.ae/Simple-Upper-Blood-Pressure-Monitor/dp/B00JQ7SZLO");
        })}
        price={35.5}
        />
        <MonitorBox 
        image="https://m.media-amazon.com/images/I/41jirT+AC5L._AC_SL1000_.jpg"
        text="Braun IRT 6525 Healthcare ThermoScan 7 Ear thermometer with Age Precision "
        link={() => Linking.canOpenURL("https://www.amazon.ae/Braun-Healthcare-ThermoScan-thermometer-temperature/dp/B09NWB542R").then(() => {
            Linking.openURL("https://www.amazon.ae/Braun-Healthcare-ThermoScan-thermometer-temperature/dp/B09NWB542R");
        })}
        price={58.5}
        />
      </ScrollView>

      <Text style={style.title}>Recommended</Text>
      <ScrollView style={{height:"47%"}}>
        <View style={{flexDirection:"row"}}>
        <ClothingBox 
        image="https://m.media-amazon.com/images/I/71OxdoiwmAL._AC_SL1500_.jpg"
        text="Provèn Digital Basal Body Thermometer, 1/100th Degree High Precision"
        link={() => Linking.canOpenURL("https://www.amazon.ae/iProvèn-Thermometer-Precision-Accurate-Ovulation/dp/B06XTVZ8WY/").then(() => {
            Linking.openURL("https://www.amazon.ae/iProvèn-Thermometer-Precision-Accurate-Ovulation/dp/B06XTVZ8WY/");
        })}
        price={35.5}
        />
        <ClothingBox 
        image="https://m.media-amazon.com/images/I/61+AGQGcyfL._AC_SL1200_.jpg"
        text="Daytech Caregiver Pager Call Button for Elderly Caregiver Paging System Home Alert Pager for Seniors Patient "
        link={() => Linking.canOpenURL("https://www.amazon.ae/Daytech-Caregiver-Elderly-Receiver-Emergency/dp/B089CLQH2M").then(() => {
            Linking.openURL("https://www.amazon.ae/Daytech-Caregiver-Elderly-Receiver-Emergency/dp/B089CLQH2M");
        })}
        price={55.4}
        />
        </View>

        <View style={{flexDirection:"row"}}>
        <ClothingBox 
        image="https://m.media-amazon.com/images/I/61O9msrFP9L._AC_SL1500_.jpg"
        text="Yussa Smart Watch | Latest Generation 2022 | Blood Pressure Monitor | Blood Oxygen SpO2 | Heart Rate | Sleep Monitor | IP67 "
        link={() => Linking.canOpenURL("https://ninelife.ae/products/yussa-smart-watch-latest-generation-2023-blood-pressure-monitor-blood-oxygen-spo2-heart-rate-sleep-monitor-ip67-waterproof-fitness-tracker-for-women-and-men-black?gad_source=1&gclid=CjwKCAiAt5euBhB9EiwAdkXWOznAxrdjQ-GxNnXbDwX8dC_Sfs2UOI-HSuzwQVQmRKnSLv1IRHSV5hoCawAQAvD_BwE").then(() => {
            Linking.openURL("https://ninelife.ae/products/yussa-smart-watch-latest-generation-2023-blood-pressure-monitor-blood-oxygen-spo2-heart-rate-sleep-monitor-ip67-waterproof-fitness-tracker-for-women-and-men-black?gad_source=1&gclid=CjwKCAiAt5euBhB9EiwAdkXWOznAxrdjQ-GxNnXbDwX8dC_Sfs2UOI-HSuzwQVQmRKnSLv1IRHSV5hoCawAQAvD_BwE");
        })}
        price={43.32}
        />
        <ClothingBox 
        image="https://m.media-amazon.com/images/I/516gey-Iz9L._AC_SL1500_.jpg"
        text="Frontier X2 Smart Heart Monitor with Chest Strap, Wireless Heart Health Monitoring Device with Strain, Breathing Rate, Body Shock"
        link={() => Linking.canOpenURL("https://www.amazon.ae/Frontier-X2-Monitoring-Breathing-Continuous/dp/B0CFWNLCRT/").then(() => {
            Linking.openURL("https://www.amazon.ae/Frontier-X2-Monitoring-Breathing-Continuous/dp/B0CFWNLCRT/");
        })}
        price={87.21}
        />
        </View>
        <View style={{flexDirection:"row"}}>
        <ClothingBox 
        image="https://m.media-amazon.com/images/I/51zWR630EnL._SL1000_.jpg"
        text="HealthTree Rechargeable Pulse Oximeter, Handheld Pulse Oximeter, Fingertip Blood Oxygen Saturation Monitor "
        link={() => Linking.canOpenURL("https://www.amazon.ae/HealthTree-Rechargeable-Saturation-Continuous-Monitoring/dp/B0BVBDZ6KN").then(() => {
            Linking.openURL("https://www.amazon.ae/HealthTree-Rechargeable-Saturation-Continuous-Monitoring/dp/B0BVBDZ6KN");
        })}
        price={43.32}
        />
        <ClothingBox 
        image="https://m.media-amazon.com/images/I/81qf2BZ3y0L._AC_SL1500_.jpg"
        text="Lunderg Chair Alarm System - Wireless Chair Alarms and Fall Prevention for Elderly and Dementia Patients "
        link={() => Linking.canOpenURL("https://www.amazon.ae/Lunderg-Chair-Alarm-System-Prevention/dp/B09R28R77W/").then(() => {
            Linking.openURL("https://www.amazon.ae/Lunderg-Chair-Alarm-System-Prevention/dp/B09R28R77W/");
        })}
        price={87.21}
        />
        </View>
        
      </ScrollView>

      </SafeAreaView>
  )
}