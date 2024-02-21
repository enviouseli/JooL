import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  // Platform,
  Image,
} from "react-native";

import HeaderMain from "../../../components/Header/MainHeader";
import ProfileCards from "../../../components/Cards/ProfileCards";
import Style from "../styles";
import {
  Octicons,
  Fontisto,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../../common/functions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("username").then((value) => setUsername(value));
  }, [username]);
  return (
    <SafeAreaView>
      <HeaderMain
        text="My Profile"
        drawer={() => navigation.toggleDrawer()}
        back={() => navigation.goBack()}
      />

      <View style={Style.userBox}>
        <Image
          source={require("../../../../assets/TempPhotos/2.jpg")}
          style={Style.profileImage}
        />
        <View style={Style.profileBox}>
          <Text style={Style.userBoxGreeting}>Good Morning</Text>
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

      <ProfileCards
        text="Edit Profile"
        icon=<FontAwesome5
          name="user"
          size={19}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        page={() => navigation.navigate("EditProfile")}
      />

      <ProfileCards
        text="Payment Options"
        icon=<MaterialIcons
          name="payment"
          size={19}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        page={() => {}}
      />

      <ProfileCards
        text="Notifications"
        icon=<Ionicons
          name="notifications-outline"
          size={19}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        page={() => {}}
      />

      <ProfileCards
        text="Security"
        icon=<Octicons
          name="shield-check"
          size={19}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        page={() => {}}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "70%",
          }}
        >
          <Ionicons
            name="language"
            size={19}
            color="black"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{ color: "#0A2249", fontSize: 15 }}>Language</Text>
        </View>
        <Text style={{ color: "#0961F5", fontSize: 14 }}>English(US)</Text>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons
            name="arrow-forward-ios"
            size={20}
            color="black"
            style={{ marginHorizontal: 10 }}
          />
        </TouchableOpacity>
      </View>

      <ProfileCards
        text="Dark Mode"
        icon=<Entypo
          name="eye"
          size={19}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        page={() => {}}
      />

      <ProfileCards
        text="Terms & Conditions"
        icon=<MaterialCommunityIcons
          name="shield-alert"
          size={19}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        page={() => {}}
      />
      <ProfileCards
        text="Help Center"
        icon=<MaterialIcons
          name="help"
          size={19}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        page={() => {}}
      />

      <ProfileCards
        text="Intive Friends"
        icon=<MaterialCommunityIcons
          name="email-send-outline"
          size={19}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        page={() => {}}
      />

      <ProfileCards
        text="Log out"
        icon=<AntDesign
          name="logout"
          size={19}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
        page={() => logout(navigation)}
      />
    </SafeAreaView>
  );
}
