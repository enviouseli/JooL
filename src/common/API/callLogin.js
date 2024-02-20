import API_URL, { MEMBER_LOGIN_ENDPOINT } from "../constants";
import { setLocalStorageItem } from "../functions";

const callLogin = async (username, password) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDA1MmZiYzMxNzE2YmYxNjlhYTg1MjJlNjg1MWRhNWMxZmY2OTQzNjRkM2RiYjYwMmFkMDUwMzFlODc2ODVmZjkzZjZiYTk1MzcwNzZhYjAiLCJpYXQiOjE3MDcwNzkzOTEuNDk3NzY2LCJuYmYiOjE3MDcwNzkzOTEuNDk3NzY3LCJleHAiOjE3MDcxNjU3OTEuNDk1NDk0LCJzdWIiOiIxMCIsInNjb3BlcyI6W119.dqUvvvgz-SviIelH3PbdtWNAm_wCIUOikz-1Zzn-YE2pHLacOUViarIU4w5-9YMq-rb-VDNaID_QJ8IlFxZslDgWccrZS_l0pmRax8Nj_g-9DrddZeucFN-Rc3CirxKcgw53ZoQa46sjrsQbK_4Hw8kz6fmjeTugrqZwFrJTCbGpYXLyeRiyKDMvm7_as4rL590O36KOAEvqMvtAzMsitmFFUPDn5mo3MTb09Dj-2yT7LewEnEPB8HFs04Uhw4RdiFWsPFjiJ1ZbrKm98Uu1ZQrPtRf9PXrZqxYBCRYIvmYwjAajPCsdc_Sr8D-nl_PlHUodRqYLEp3bKcTu7mXk7gQmq6mLKWSju9LBxPUjPynWTh6Z7mi989Rc9_Tl0ZgnW-56LeZ_Y7j_7oxoDrGhIio5lMUTzopQSHZRYsTpK_RFPWhPAxdz32bMTyLOjvvKGcCOX9kPWXHHPPwHbVDv9jGUPQ3c_vOOqMHWve9dVRMn18PwGLxqxix3UEiN830602VcBYdGv6KQiN4dYp2JVkGv5HylvDuaOCUqJkIWfeIrW41Usd1dz1FaSLATP-_AZg9iQtsaB997FM2O6tczupGzoYSbc5eEh9r-ItD2J68ywf45RguUcreyQGyu1K6FbhhvLw_UQs13fqW9Bif-fVTIvYJu-n3nA8C9_jV8im4";
  await fetch(API_URL + MEMBER_LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username: username,
      password: password,
      token: token,
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      // console.log(json);
      setLocalStorageItem("user", JSON.stringify(json));
      setLocalStorageItem("token", JSON.stringify(json.token));
      return true;
    })
    .catch((error) => {
      throw new Error("Error returned from login api call " + error);
    });
  return;
};

export default callLogin;
