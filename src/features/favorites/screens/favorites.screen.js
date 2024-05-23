import { Text, TouchableOpacity, View } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../../restaurant/components/restaurants-info-card.component";
import { useContext } from "react";
import { FavoriteContext } from "../../../services/favorite/favorite.context";
import { RestaurantList } from "../../../components/restaurant/restaurants.screen.styles";
import styled from "styled-components";
import { FadeInView } from "../../../components/animations/fade-in.animation";

const NoFavoriteArea = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites: restaurants } = useContext(FavoriteContext);
  return restaurants.length ? (
    <SafeArea>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { details: item })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoriteArea>
      <Text>No Favorites</Text>
    </NoFavoriteArea>
  );
};
