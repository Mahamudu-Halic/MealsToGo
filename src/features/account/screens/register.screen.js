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

export const RegisterScreen = ({ navigation }) => {
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
          />
          <AccountTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </AccountTextInputContainer>
        <AccountButton
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          icon={"account-plus"}
        >
          Register
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
