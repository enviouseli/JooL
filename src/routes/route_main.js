import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ScreenRoutes, AuthenticationRoutes } from "./route_pages";

export default function Routes() {
  //const { user } = useContext(AuthContext);
  const user = false;
  return (
    <NavigationContainer>
      {user ? <ScreenRoutes /> : <AuthenticationRoutes />}
      {/* <ScreenRoutes /> */}
    </NavigationContainer>
  );
}
