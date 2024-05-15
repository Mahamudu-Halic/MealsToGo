import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import styled from "styled-components";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { SearchBar } from "../components/search.component";

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

export const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantContext);
  // const locationContext = useContext(LocationContext);

  const { restaurants, isLoading, error } = restaurantContext;
  // const {
  //   location,
  //   isLoading: locationIsLoading,
  //   error: locationError,
  //   search,
  //   keyword,
  // } = locationContext;

  return (
    <SafeArea>
      <SearchBar />
      <ActivityIndicatorContainer>
        <ActivityIndicator size={50} animating={isLoading} color="tomato" />
      </ActivityIndicatorContainer>

      {!isLoading && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
