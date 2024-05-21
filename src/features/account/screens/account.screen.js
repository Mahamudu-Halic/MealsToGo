import { StyleSheet, Text } from "react-native";
import {
  AccountBackground,
  AccountButton,
  AccountContainer,
  Overlay,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
  return (
    <AccountBackground>
      <Overlay />
      <AccountContainer>
        <AccountButton
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          icon={"lock-outline"}
        >
          login
        </AccountButton>
        <AccountButton
          mode="contained"
          onPress={() => navigation.navigate("Register")}
          icon={"account-plus"}
        >
          Register
        </AccountButton>
      </AccountContainer>
    </AccountBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
