import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})``;
const ActivityIndicatorContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

export const RestaurantScreen = ({ navigation }) => {
  const restaurantContext = useContext(RestaurantContext);

  const { restaurants, isLoading, error } = restaurantContext;

  return (
    <SafeArea>
      <Search />
      <ActivityIndicatorContainer>
        <ActivityIndicator size={50} animating={isLoading} color="tomato" />
      </ActivityIndicatorContainer>

      {!isLoading && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { details: item })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
