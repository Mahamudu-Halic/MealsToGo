import { Text, TouchableOpacity, View } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AccountButton } from "../../account/components/account.styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../services/auth/auth.context";
import { ActivityIndicator, Avatar, List } from "react-native-paper";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";

const AvatarContainer = styled.View`
  align-items: center;
  gap: 10px;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onSignOut, user, profile } = useContext(AuthContext);

  const getProfile = async (id) => {
    // const profile = await AsyncStorage.getItem(`@profile-${id}`);
    // setPhoto(profile);
  };
  // useFocusEffect(() => {
  //   return () => getProfile(user?.uid);
  // }, [user]);
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!profile && (
            <Avatar.Icon icon="human" size={180} backgroundColor="#2182bd" />
          )}
          {profile && (
            <Avatar.Image
              source={{ uri: profile }}
              size={180}
              backgroundColor="#2182bd"
            />
          )}
        </TouchableOpacity>
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
