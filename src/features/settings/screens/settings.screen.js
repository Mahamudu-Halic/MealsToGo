import { Text, View } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AccountButton } from "../../account/components/account.styles";
import { useContext } from "react";
import { AuthContext } from "../../../services/auth/auth.context";
import { ActivityIndicator } from "react-native-paper";

export const SettingsScreen = () => {
  const { isLoading, onSignOut } = useContext(AuthContext);
  return (
    <SafeArea>
      <View>
        <Text>Settings!</Text>
      </View>

      <AccountButton
        mode="contained"
        onPress={onSignOut}
        icon={!isLoading && "logout"}
        disabled={isLoading}
      >
        {!isLoading ? (
          "Logout"
        ) : (
          <ActivityIndicator size={20} animating={isLoading} color="tomato" />
        )}
      </AccountButton>
    </SafeArea>
  );
};
