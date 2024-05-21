import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import {
  AccountBackground,
  AccountButton,
  AccountContainer,
  AccountTextInput,
  AccountTextInputContainer,
  Overlay,
} from "../components/account.styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../services/auth/auth.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthorized, onLogin, isLoading } = useContext(AuthContext);

  const authLogin = () => {
    email.trim() && password.trim() && onLogin(email, password);
  };

  const login = () => {
    isAuthorized && navigation.navigate("Restaurant");
  };

  useEffect(() => {
    login();
  }, [isAuthorized]);
  return (
    <AccountBackground>
      <Overlay />
      <AccountContainer>
        <AccountTextInputContainer>
          <AccountTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType={"email-address"}
            textContentType="emailAddress"
          />
          <AccountTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType="password"
          />
        </AccountTextInputContainer>
        <AccountButton
          mode="contained"
          onPress={authLogin}
          icon={!isLoading && "lock-outline"}
        >
          {!isLoading ? (
            "Login"
          ) : (
            <ActivityIndicator size={20} animating={isLoading} color="tomato" />
          )}
        </AccountButton>
        <AccountButton
          mode="contained"
          onPress={() => navigation.navigate("Home")}
          icon={"home"}
        >
          Go back home
        </AccountButton>
      </AccountContainer>
    </AccountBackground>
  );
};
