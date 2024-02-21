import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
  TextInput,
  ActivityIndicator,
  FlatList,
} from "react-native";

import {
  Entypo,
  Ionicons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

import Style from "./styles";
// import Colors from "../../styles/colors";

import HeaderMain from "../../components/Header/MainHeader";
import SmallButtons from "../../components/Cards/SmallButtons";
import ContactButtons from "../../components/Cards/ContactButtons";
import TagButtons from "../../components/Cards/TagButtons";
import { ScrollView } from "react-native-gesture-handler";
import API_ENDPOINT from "../../../assets/Files/CareBuddies.json";
import { useNavigation } from "@react-navigation/native";
// import filter from "lodash.filter";

//const API_ENDPOINT="https://randomuser.me/api"

export default function CareCircle() {
  const navigation = useNavigation();
  const [showContact, setShowContact] = useState({ show: false, id: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fettchData(API_ENDPOINT);
  }, []);

  const fettchData = async (url) => {
    try {
      //const response=await fetch(url);
      //const json=await response.json();
      setData(url);
      setFullData(url);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const searchByDiciplain = (text) => {};

  const searchByTag = (text) => {};

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = fullData.filter(
      (carebuddy) =>
        carebuddy.language.includes(query) ||
        carebuddy.location.includes(query) ||
        carebuddy.dicipline.includes(query)
    );
    setData(filteredData);
  };

  const contains = ({ location, dicipline, language }, query) => {
    if (language.includes(query)) {
      return true;
    } else {
      return false;
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#000"} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Check your internet connection</Text>
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        // marginLeft: Platform.OS === "android" ? 0 : 20,
        // marginRight: Platform.OS === "android" ? 0 : 20,
        marginTop: Platform.OS === "android" ? 30 : 50,
        // backgroundColor:'orange'
      }}
    >
      <HeaderMain
        text="Care Circle"
        drawer={() => navigation.toggleDrawer()}
        back={() => navigation.goBack()}
      />
      <View style={[Style.searchBox, Style.shadowProp]}>
        <Ionicons
          name="search-sharp"
          size={20}
          color="gray"
          style={{ marginLeft: 10 }}
        />
        <TextInput
          style={Style.inputText}
          value={searchQuery}
          placeholder="search for ... "
          onChangeText={(query) => handleSearch(query)}
        />
        <Entypo
          name="sound-mix"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </View>

      <ScrollView horizontal={true}>
        <TagButtons
          text="#heart"
          page={() => {
            searchByTag("#heart");
          }}
        />
        <TagButtons
          text="#teeth"
          page={() => {
            searchByTag("#teeth");
          }}
        />
        <TagButtons
          text="#blood pressue"
          page={() => {
            searchByTag("#blood pressue");
          }}
        />
        <TagButtons
          text="#mouth"
          page={() => {
            searchByTag("#mouth");
          }}
        />
        <TagButtons
          text="#knees"
          page={() => {
            searchByTag("#knees");
          }}
        />
      </ScrollView>

      <ScrollView horizontal={true} style={{ marginVertical: 5 }}>
        <SmallButtons
          text="CareBuddy"
          icon=<FontAwesome5 name="user" size={26} color="#0A2249" />
          page={() => {
            searchByDiciplain("CareBuddy");
          }}
          bgc="#FFE2DC"
          font_size={12}
        />
        <SmallButtons
          text="Psychologist"
          icon=<FontAwesome5 name="user" size={26} color="#0A2249" />
          page={() => {
            searchByDiciplain("Psychologist");
          }}
          bgc="#CECCCC"
          font_size={12}
        />
        <SmallButtons
          text="Social Worker"
          icon=<FontAwesome5 name="user" size={26} color="#0A2249" />
          page={() => {
            searchByDiciplain("Social Worker");
          }}
          bgc="#E0EAF9"
          font_size={12}
        />
        <SmallButtons
          text="Therapist"
          icon=<FontAwesome5 name="user" size={26} color="#0A2249" />
          page={() => {
            searchByDiciplain("Therapist");
          }}
          bgc="#FFF8E2"
          font_size={12}
        />
      </ScrollView>

      <Text style={Style.titleText}>Care Buddies</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                Style.userBox,
                Style.shadowProp,
                showContact.show && showContact.id === index
                  ? { width: "69%" }
                  : null,
              ]}
              onPress={() => {
                showContact.show
                  ? setShowContact({ show: false, id: index })
                  : setShowContact({ show: true, id: index });
              }}
            >
              <Image source={{ uri: item.image }} style={Style.profileImage} />
              <View style={Style.profileBox}>
                <Text style={Style.userBoxName}>{item.name}</Text>
                <Text style={Style.userBoxJob}>{item.dicipline}</Text>
                <Text style={Style.userBoxHist}>
                  Last connected: 28.12.2023
                </Text>
              </View>
            </TouchableOpacity>

            {showContact.show && showContact.id === index ? (
              <View style={{ flexDirection: "row" }}>
                <ContactButtons
                  icon=<Ionicons
                    name="chatbox-ellipses-outline"
                    size={24}
                    color="#fff"
                  />
                  bgc="#167F71"
                />
                <ContactButtons
                  icon=<Feather name="phone" size={22} color="#fff" />
                  bgc="#32A6F9"
                />
                <ContactButtons
                  icon=<Feather name="video" size={22} color="#fff" />
                  page={() =>
                    navigation.navigate("VideoCall", { cbimg: item.image })
                  }
                  bgc="#5FD05D"
                />
              </View>
            ) : (
              <View></View>
            )}
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
