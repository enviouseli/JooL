import React, { useEffect, useState } from "react";
// import { NavigationContainer } from '@react-navigation/native';
import { Fontisto, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import SlidingCard from "../../components/Cards/SlidingCards";
import MiddleButtons from "../../components/Cards/MiddleButtons";
import DrawerHeader from "../../components/Header/DrawerHeader";

import Style from "../HomePage/styles";
// import CareBuddyRegistration from '../pages/CareBuddyRegistration'
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
// import { getLocalStorageItem } from "../../common/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomePage() {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  useEffect(() => {
    /* getLocalStorageItem("username")
      .then((value) => {
        console.log("username from homepage: ", value);
      })
      .catch((e) => console.erro(e)); */
    AsyncStorage.getItem("user").then((value) => {
      let full_name = JSON.parse(value);
      setUsername( full_name.firstname + ' ' + full_name.lastname);
      console.log( "homepage username: ", full_name.firstname + ' ' + full_name.lastname );
    });
  }, [username]);
  return (
    <SafeAreaView>
      <DrawerHeader text="Home Page" drawer={() => navigation.toggleDrawer()} />
      <View style={Style.userBox}>
        <Image
          source={require("../../../assets/TempPhotos/2.jpg")}
          style={Style.profileImage}
        />
        <View style={Style.profileBox}>
          <Text style={Style.userBoxGreeting}>Hello</Text>
          <Text style={[Style.userBoxText, { alignContent: "center" }]}>
            {username}
          </Text>
        </View>
        <Fontisto name="bell" size={24} color="black" style={Style.icons} />
        <Ionicons
          name="reorder-two-outline"
          size={24}
          color="black"
          style={Style.icons}
        />
      </View>

      <View style={Style.mediaBox}>
        <TouchableOpacity
          style={[Style.mediaButton, { backgroundColor: "#0A2249" }]}
        >
          <Text style={[Style.mediaButtonText, { color: "#fff" }]}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.mediaButton}>
          <Text style={Style.mediaButtonText}>Podcast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.mediaButton}>
          <Text style={Style.mediaButtonText}>Articles</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ marginTop: 15, marginBottom: 5, marginLeft: 10 }}>
          Recommended for you
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <SlidingCard
          image={require("../../../assets/TempPhotos/scroll1.jpg")}
          text="Help others with dignity"
        />
        <SlidingCard
          image={require("../../../assets/TempPhotos/scroll2.jpg")}
          text="Family support and guidance"
        />
        <SlidingCard
          image={require("../../../assets/TempPhotos/scroll3.jpg")}
          text="Tools for better engagement"
        />
      </ScrollView>

      <View style={{ marginVertical: 15 }}>
        <View style={Style.buttonRow}>
          <MiddleButtons
            text="My Care Circle"
            icon=<Ionicons name="people-outline" size={26} color="#0A2249" />
            page={() => navigation.navigate("CareCircle")}
          />

          <MiddleButtons
            text="My Care Academy"
            icon=<Ionicons name="book-outline" size={26} color="#0A2249" />
            page={() => navigation.navigate("CareAcademy")}
          />
        </View>

        <View style={Style.buttonRow}>
          <MiddleButtons
            text="My In-App Purchase"
            icon=<Ionicons name="basket-outline" size={26} color="#0A2249" />
          />
          <MiddleButtons
            text="My Care Store"
            icon=<SimpleLineIcons name="basket" size={26} color="#0A2249" />
            page={() => navigation.navigate("CareStore")}
          />
        </View>
        <View style={Style.buttonRow}>
          <MiddleButtons
            text="My Health check"
            icon=<Ionicons
              name="shield-checkmark-outline"
              size={26}
              color="#0A2249"
            />
            page={() => navigation.navigate("HealthCheck")}
          />
          <MiddleButtons
            text="My Care Community"
            icon=<Ionicons name="people" size={26} color="#0A2249" />
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
