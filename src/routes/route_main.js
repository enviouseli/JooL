import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { ScreenRoutes, AuthenticationRoutes } from "./route_pages";

export default function Routes() {
  //const { user } = useContext(AuthContext);
  const user=false
  return (
    <NavigationContainer>
      {user ? <ScreenRoutes /> : <AuthenticationRoutes />}
    </NavigationContainer>
  );
}

