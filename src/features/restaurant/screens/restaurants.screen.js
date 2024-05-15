import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import styled from "styled-components";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

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
  const [searchValue, setSearchValue] = useState("");
  const restaurantContext = useContext(RestaurantContext);
  const { restaurants, isLoading, error } = restaurantContext;
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search"
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </SearchBarContainer>
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
