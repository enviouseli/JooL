import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { LoginRoutes } from "./route_auth";
import { ScreenRoutes } from "./route_pages";

export default function Routes() {
  //const { user } = useContext(AuthContext);
  const {user}=true
  return (
    <NavigationContainer>
      {user ? <ScreenRoutes /> : <ScreenRoutes />}
    </NavigationContainer>
  );
}