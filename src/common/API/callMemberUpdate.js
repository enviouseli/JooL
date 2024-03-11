import API_URL, { MEMBER_UPDATE_ENDPOINT } from "../constants";
import { setLocalStorageItem } from "../functions";

const callMemberUpdate = async (username, values) => {
  //   const token = "";
  //   console.log( API_URL + MEMBER_UPDATE_ENDPOINT + `/${username}`, JSON.stringify(values) );
//   return values;
// console.log('callmember ', JSON.stringify(values));
  await fetch(API_URL + MEMBER_UPDATE_ENDPOINT + `/${username}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if (!json.error) {
        // setLocalStorageItem("registration-user", JSON.stringify(json));
        setLocalStorageItem("user", JSON.stringify(json));
        setLocalStorageItem("username", json.email);
        // setLocalStorageItem("token", JSON.stringify(json.token));
        return true;
      }
      else {
        console.log(json);
        if (json.error.errorInfo[1] == 1062) {
          throw "User already exist";
        } else {
          console.log("API THROW ERROR: " + json.error);
          throw "API returned DB error please contact administrator";
        }
      }
    })
    .catch((error) => {
      console.log("call error", error);
      throw new Error(" " + error);
    });
  return true;
};

export default callMemberUpdate;
