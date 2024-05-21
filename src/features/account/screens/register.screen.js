import { Text, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
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
import { ActivityIndicator } from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthorized, onRegister, isLoading } = useContext(AuthContext);

  const authRegister = () => {
    email.trim() && password.trim() && onRegister(email, password);
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
      <AccountContainer>
        <AccountTextInputContainer>
          <AccountTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <AccountTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </AccountTextInputContainer>
        <AccountButton
          mode="contained"
          onPress={authRegister}
          icon={!isLoading && "account-plus"}
          disabled={isLoading}
        >
          {!isLoading ? (
            "Register"
          ) : (
            <ActivityIndicator size={20} animating={isLoading} color="tomato" />
          )}
        </AccountButton>
        <AccountButton
          mode="contained"
          onPress={() => navigation.navigate("Home")}
          icon={"home"}
          disabled={isLoading}
        >
          Go back home
        </AccountButton>
      </AccountContainer>
    </AccountBackground>
  );
};
