import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import {
  AccountBackground,
  AccountButton,
  AccountContainer,
  AccountTextInput,
  AccountTextInputContainer,
  Error,
  Overlay,
  Title,
} from "../components/account.styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../services/auth/auth.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthorized, onLogin, isLoading, error } = useContext(AuthContext);

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
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AccountTextInputContainer>
          <AccountTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType={"email-address"}
            textContentType="emailAddress"
            autoCapitalize="none"
          />
          <AccountTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType="password"
            autoCapitalize="none"
          />
        </AccountTextInputContainer>
        {error !== null && <Error>Error: {error}</Error>}
        {!isLoading ? (
          <AccountButton
            mode="contained"
            onPress={authLogin}
            icon={!isLoading && "lock-outline"}
            disabled={isLoading}
          >
            "Login"
          </AccountButton>
        ) : (
          <ActivityIndicator size={20} animating={isLoading} color="tomato" />
        )}
      </AccountContainer>
      <AccountButton
        mode="contained"
        onPress={() => navigation.navigate("Home")}
        icon={"home"}
        disabled={isLoading}
      >
        Go back home
      </AccountButton>
    </AccountBackground>
  );
};
