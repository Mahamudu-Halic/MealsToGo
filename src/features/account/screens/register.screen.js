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
import { ActivityIndicator } from "react-native-paper";
import LottieView from "lottie-react-native";
import { Text } from "react-native";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { isAuthorized, onRegister, isLoading, error } =
    useContext(AuthContext);

  const authRegister = () => {
    email.trim() &&
      password.trim() &&
      repeatedPassword.trim() &&
      onRegister(email, password, repeatedPassword);
  };

  const register = () => {
    isAuthorized && navigation.navigate("Restaurant");
  };

  useEffect(() => {
    register();
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
          <AccountTextInput
            placeholder="Confirm Password"
            value={repeatedPassword}
            onChangeText={setRepeatedPassword}
            secureTextEntry
            textContentType="password"
            autoCapitalize="none"
          />
        </AccountTextInputContainer>
        {error !== null && <Error>Error: {error}</Error>}

        {!isLoading ? (
          <AccountButton
            mode="contained"
            onPress={authRegister}
            icon={!isLoading && "account-plus"}
            disabled={isLoading}
          >
            "Register"
          </AccountButton>
        ) : (
          <ActivityIndicator size={20} animating={isLoading} color="tomato" />
        )}
      </AccountContainer>
      {!isLoading && (
        <AccountButton
          mode="contained"
          onPress={() => navigation.navigate("Home")}
          icon={"home"}
          disabled={isLoading}
        >
          Go back home
        </AccountButton>
      )}
    </AccountBackground>
  );
};
