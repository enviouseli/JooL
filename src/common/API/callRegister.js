import API_URL, { MEMBER_REGISTER_ENDPOINT } from "../constants";
import { setLocalStorageItem } from "../functions";

const callRegister = async (username, password) => {
  const token = "";
  await fetch(API_URL + MEMBER_REGISTER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: username,
      password: password,
      token: token,
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (!json.error) {
        // console.log(json.data);
        // console.log(JSON.stringify(json.data));
        // console.log(json.data.email);
        setLocalStorageItem("registration-user", JSON.stringify(json.data));
        setLocalStorageItem("user", JSON.stringify(json.data));
        setLocalStorageItem("username", json.data.email);
        // setLocalStorageItem("token", JSON.stringify(json.token));
        // setLocalStorageItem( 'token', JSON.stringify(json.token));
        return true;
      } else {
        if (json.error.errorInfo[1] == 1062) {
          throw "User already exist";
        } else {
          console.log("API THROW ERROR: " + json.error);
          throw "API returned DB error please contact administrator";
        }
      }
    })
    .catch((error) => {
      throw new Error(" " + error);
    });
  return true;
};

export default callRegister;
