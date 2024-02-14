import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Platform,
  Image,
  Button
} from "react-native";


import HeaderMain from '../../../components/Header/MainHeader'
import ProfileCards from '../../../components/Cards/ProfileCards'
import Style from "../styles";
import { Octicons, Fontisto, Ionicons,MaterialIcons, FontAwesome5, Entypo,
          MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";
import style from "../styles";
import { TextInput } from "react-native-gesture-handler";

          
export default function EditProfile({ navigation }) {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  const [fullName,onChangedFN]=useState("Alireza Damankesh");
  const [nickName,onChangedNN]=useState("A.D");
  return (
    <SafeAreaView>
     <HeaderMain text="Edit Profile"
       drawer={() => navigation.toggleDrawer()}
       back={() => navigation.goBack()}
        />

      <View style={Style.userBox} >
      <Image source={require('../../../../assets/TempPhotos/2.jpg')} 
      style={Style.profileImage} />
          <View style={Style.profileBox}>
            <Text style={Style.userBoxGreeting}>Good Morning</Text>
            <Text style={[Style.userBoxText,{alignContent:"center"}]}>Aliraza Damankesh</Text>
          </View>
        <Fontisto name="bell" size={24} color="black" style={Style.icons}/>
        <Ionicons name="reorder-two-outline" size={24} color="black" style={Style.icons}/>
      </View>

      <View style={[style.editProfBox, style.shadowProp]}>
        <Text style={Style.inputLable}>Full Name: </Text>
        <TextInput
        onChangeText={onChangedFN}
        value={fullName}
        placeholder={fullName} 
        style={Style.inputBox}/>
      </View>

      <View style={[style.editProfBox, style.shadowProp]}>
        <Text style={Style.inputLable}>Nick Name: </Text>
        <TextInput
        onChangeText={onChangedNN}
        value={nickName}
        placeholder={nickName} 
        style={Style.inputBox}/>
      </View>


    </SafeAreaView>
  )
}