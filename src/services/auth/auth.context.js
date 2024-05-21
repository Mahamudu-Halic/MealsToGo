import { createContext, useState } from "react";
import { loginRequest } from "./auth.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

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
        setError(err);
        setIsLoading(false);
        setIsAuthorized(false);
      });
  };
  const value = {
    user,
    isLoading,
    error,
    isAuthorized,
    onLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
