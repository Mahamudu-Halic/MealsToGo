import { Text, View } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AccountButton } from "../../account/components/account.styles";
import { useContext } from "react";
import { AuthContext } from "../../../services/auth/auth.context";
import { ActivityIndicator, Avatar, List } from "react-native-paper";
import styled from "styled-components";

const AvatarContainer = styled.View`
  align-items: center;
  gap: 10px;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onSignOut, user } = useContext(AuthContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon icon="human" size={180} backgroundColor="#2182bd" />
        <Text>{user?.email}</Text>
      </AvatarContainer>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onSignOut}
        />
      </List.Section>
    </SafeArea>
  );
};
