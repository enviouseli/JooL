import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLocalStorageItem = async (itemName) => {
  AsyncStorage.getItem(itemName).then((value) => {
    // console.log('localstore value from common junction: ', value);
    return new Promise((resolve, reject) => {
      // console.log('localstore value from common junction promise: ', value ? 'resolve' : 'reject');
      value ? resolve(value) : reject(value);
    });
  });
};

export const setLocalStorageItem = async (itemName, value) => {
  try {
    await AsyncStorage.setItem(itemName, value);
    return true;
  } catch (e) {
    // read error
    throw new Error("Error while saving local storage item".e.Error);
  }
};

export const checkLoginStatus = async (page) => {
  try {
    const token = await AsyncStorage.getItem("token");
    console.log("login check from " + page, token);
    if (token) {
      // navigation.replace("MemberScreen");
    }
  } catch (err) {
    console.log("error message", err);
  }
};

export const logout = (navigation) => {
  console.log("logout");
  AsyncStorage.removeItem("user");
  AsyncStorage.removeItem("token");
  navigation.navigate("Home");
};

export default checkLoginStatus;
