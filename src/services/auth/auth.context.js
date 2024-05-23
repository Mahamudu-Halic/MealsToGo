import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest, signOutRequest } from "./auth.service";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((credentials) => {
        setUser(credentials);
        setError(null);
        setIsLoading(false);
        setIsAuthorized(true);
      })
      .catch((err) => {
        setError(err.code);
        setIsLoading(false);
        setIsAuthorized(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword)
      return setError("Error: Passwords do not match");
    setIsLoading(true);
    registerRequest(email, password)
      .then((credentials) => {
        setUser(credentials);
        setError(null);
        setIsLoading(false);
        setIsAuthorized(true);
      })
      .catch((err) => {
        setError(err.code);

        setIsLoading(false);
        setIsAuthorized(false);
      });
  };

  const onSignOut = () => {
    setUser(null);
    setIsAuthorized(false);
    signOutRequest();
  };

  // const storeUser = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     console.log("[storeUser]:", jsonValue);
  //     await AsyncStorage.setItem("@user", jsonValue);
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  // const getUser = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("@user");
  //     if (jsonValue != "null") {
  //       console.log("[getuser]: ", jsonValue);
  //       setUser(() => JSON.parse(jsonValue));
  //       setIsAuthorized(true);
  //     }
  //   } catch (e) {
  //     // error reading value
  //     console.log("getUser", e);
  //   }
  // };

  // useEffect(() => {
  //   storeUser(user);
  // }, [user]);

  // useEffect(() => {
  //   getUser();
  // }, []);

  const value = {
    user,
    isLoading,
    error,
    isAuthorized,
    onLogin,
    onRegister,
    onSignOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
