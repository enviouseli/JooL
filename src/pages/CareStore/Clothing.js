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
import style from "./styles";

export default function Clothing({ navigation }) {
  return (
      <SafeAreaView style={{paddingBottom:20}}>
        <HeaderMain text="Clothing"
       drawer={() => navigation.toggleDrawer()}
       back={() => navigation.goBack()}
        />
      <SearchBar />
      <Text style={style.title}>New Arrivals</Text>
      <ScrollView horizontal={true} style={{marginBottom:10}}>
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing1.jpeg")} />
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing3.jpeg")} />
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing2.jpeg")} />
        <SlidingStore image={require("../../../assets/TempPhotos/CareStore/clothing4.jpeg")} />
      </ScrollView>

      <Text style={style.title}>Recommended</Text>
      <ScrollView style={{height:"47%"}}>
        <View style={{flexDirection:"row"}}>
        <ClothingBox 
        image="https://www.silverts.com/media/catalog/product/cache/409bf4e9d7b6b290272c5f0ef76a1fca/s/v/sv50120_svpi_0.jpg"
        text="Men's Flannel Hospital & Home Care Gown"
        link={() => Linking.canOpenURL("https://www.silverts.com/men-s-flannel-hospital-gowns").then(() => {
            Linking.openURL("https://www.silverts.com/men-s-flannel-hospital-gowns");
        })}
        price={35.5}
        />
        <ClothingBox 
        image="https://m.media-amazon.com/images/I/61-OWgGKHoL._AC_SL1500_.jpg"
        text="Deyeek Women's Adaptive Open Back Night Gown For Ladies - Assisted Dressing Hospital Gown With Snaps S-XXL"
        link={() => Linking.canOpenURL("https://www.amazon.ae/Deyeek-Womens-Adaptive-Night-Ladies/dp/B0CPDKS487/").then(() => {
            Linking.openURL("https://www.amazon.ae/Deyeek-Womens-Adaptive-Night-Ladies/dp/B0CPDKS487/");
        })}
        price={55.4}
        />
        </View>

        <View style={{flexDirection:"row"}}>
        <ClothingBox 
        image="https://www.silverts.com/media/catalog/product/cache/409bf4e9d7b6b290272c5f0ef76a1fca/s/v/sv702_sv2144_0_fswirceek2pe2g7j_1.jpg"
        text="Women's Self Dressing Knit Tracksuit Set"
        link={() => Linking.canOpenURL("https://www.silverts.com/women-s-self-dressing-knit-tracksuit-set").then(() => {
            Linking.openURL("https://www.silverts.com/women-s-self-dressing-knit-tracksuit-set");
        })}
        price={43.32}
        />
        <ClothingBox 
        image="https://www.silverts.com/media/catalog/product/cache/409bf4e9d7b6b290272c5f0ef76a1fca/s/v/sv516_sv2394_0.jpg"
        text="Women's Magnetic Button Front Shacket"
        link={() => Linking.canOpenURL("https://www.silverts.com/women-s-magnetic-button-front-shacket").then(() => {
            Linking.openURL("https://www.silverts.com/women-s-magnetic-button-front-shacket");
        })}
        price={87.21}
        />
        </View>
        <View style={{flexDirection:"row"}}>
        <ClothingBox 
        image="https://www.buckandbuck.com/media/catalog/product/cache/25bdfd4404dfde42c9bc277e51968403/2/9/29t_2016_245_srgb_1_1.jpg"
        text="Long Sleeve Sport Shirt w/ VELCRO® Brand fasteners"
        link={() => Linking.canOpenURL("https://www.buckandbuck.com/long-sleeve-sport-shirt-w-velcror-brand-fasteners.html").then(() => {
            Linking.openURL("https://www.buckandbuck.com/long-sleeve-sport-shirt-w-velcror-brand-fasteners.html");
        })}
        price={43.32}
        />
        <ClothingBox 
        image="https://joeandbella.com/cdn/shop/files/adaptive-carezips-women-s-adaptive-pants-joe-bella-39183957131501_1440x.jpg"
        text="CareZips® Women's Adaptive Pants"
        link={() => Linking.canOpenURL("https://joeandbella.com/products/carezips®-classic-womens-adaptive-pants?variant=43398716227821").then(() => {
            Linking.openURL("https://joeandbella.com/products/carezips®-classic-womens-adaptive-pants?variant=43398716227821");
        })}
        price={87.21}
        />
        </View>
        <View style={{flexDirection:"row"}}>
        <ClothingBox 
        image="https://joeandbella.com/cdn/shop/files/01.24.23Joe_Bella-StopMotion-Womens-01-NEW_1440x.gif"
        text="Men's Flannel Hospital & Home Care Gown"
        link={() => Linking.canOpenURL("https://www.silverts.com/men-s-flannel-hospital-gowns").then(() => {
            Linking.openURL("https://www.silverts.com/men-s-flannel-hospital-gowns");
        })}
        price={35.5}
        />
        <ClothingBox 
        image="https://www.buckandbuck.com/media/catalog/product/cache/25bdfd4404dfde42c9bc277e51968403/3/0/30sv_inset_srgb_1.jpg"
        text="Women's Everyday Long Sleeve Top"
        link={() => Linking.canOpenURL("https://joeandbella.com/products/womens-everyday-long-sleeve-top?variant=44163734569197").then(() => {
            Linking.openURL("https://joeandbella.com/products/womens-everyday-long-sleeve-top?variant=44163734569197");
        })}
        price={48}
        />
        </View>
        <View style={{flexDirection:"row"}}>
        <ClothingBox 
        image="https://www.silverts.com/media/catalog/product/cache/409bf4e9d7b6b290272c5f0ef76a1fca/s/v/sv702_sv2144_0_fswirceek2pe2g7j_1.jpg"
        text="Women's Self Dressing Knit Tracksuit Set"
        link={() => Linking.canOpenURL("https://www.silverts.com/women-s-self-dressing-knit-tracksuit-set").then(() => {
            Linking.openURL("https://www.silverts.com/women-s-self-dressing-knit-tracksuit-set");
        })}
        price={43.32}
        />
        <ClothingBox 
        image="https://www.silverts.com/media/catalog/product/cache/409bf4e9d7b6b290272c5f0ef76a1fca/s/v/sv516_sv2394_0.jpg"
        text="Women's Magnetic Button Front Shacket"
        link={() => Linking.canOpenURL("https://www.silverts.com/women-s-magnetic-button-front-shacket").then(() => {
            Linking.openURL("https://www.silverts.com/women-s-magnetic-button-front-shacket");
        })}
        price={87.21}
        />
        </View>
      </ScrollView>

      </SafeAreaView>
  )
}