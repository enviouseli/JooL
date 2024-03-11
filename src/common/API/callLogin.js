import API_URL, { MEMBER_LOGIN_ENDPOINT } from "../constants";
import { setLocalStorageItem } from "../functions";
// const axios = require('axios');

const callLogin = async (username, password) => {
  console.log( 'user/pass: ', username, password);
  console.log( 'url: ', API_URL, MEMBER_LOGIN_ENDPOINT);
  const token = "";
  

  await fetch(API_URL + MEMBER_LOGIN_ENDPOINT, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: username,
      password: password,
      token: token,
    }),
  })
    .then((res) => {
      // console.log('res ',res);
      return res.json()
    })
    .then((json) => {
      if( json.error ) {
        console.log('not login', json.error)
        throw new Error(json.error);
      }
      // console.log( 'json ', json )
      setLocalStorageItem("user", JSON.stringify(json));
      // console.log( 'stringify json', JSON.stringify(json) )
      setLocalStorageItem("username", json.email);
      // console.log( 'username: ', json.email )
      setLocalStorageItem("token", JSON.stringify(json.token));
      // console.log( JSON.stringify(json.token) )
      return true;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  return;
};

export default callLogin;
