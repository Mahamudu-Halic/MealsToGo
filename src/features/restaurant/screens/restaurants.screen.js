import { useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})``;

export const RestaurantScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search"
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </SearchBarContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
