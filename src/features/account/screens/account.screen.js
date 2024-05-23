import { StyleSheet, Text } from "react-native";
import {
  AccountBackground,
  AccountButton,
  AccountContainer,
  AnimationWrapper,
  Overlay,
  Title,
} from "../components/account.styles";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
  return (
    <AccountBackground>
      <Overlay />
      <AnimationWrapper>
        <LottieView
          key={"animation"}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>

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
