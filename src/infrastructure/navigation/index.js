import React, { useContext } from "react";
import AppNavigator from "./app.navigator";
import { AuthContext } from "../../services/auth/auth.context";
import { AuthNavigator } from "./auth.navigator";

const Navigation = () => {
  const { isAuthorized } = useContext(AuthContext);
  return isAuthorized ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;
