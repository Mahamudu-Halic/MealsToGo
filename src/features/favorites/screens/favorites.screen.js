import { Text, TouchableOpacity, View } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../../restaurant/components/restaurants-info-card.component";
import { useContext } from "react";
import { FavoriteContext } from "../../../services/favorite/favorite.context";
import { RestaurantList } from "../../../components/restaurant/restaurants.screen.styles";
import styled from "styled-components";

const NoFavoriteArea = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites: restaurants } = useContext(FavoriteContext);
  return (
    <SafeArea>
      {restaurants.length ? (
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
      ) : (
        <NoFavoriteArea>
          <Text>No Favorites</Text>
        </NoFavoriteArea>
      )}
    </SafeArea>
  );
};
