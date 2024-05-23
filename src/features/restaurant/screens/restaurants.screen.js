import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { FavoriteContext } from "../../../services/favorite/favorite.context";
import {
  ActivityIndicatorContainer,
  RestaurantList,
} from "../../../components/restaurant/restaurants.screen.styles";

export const RestaurantScreen = ({ navigation }) => {
  const restaurantContext = useContext(RestaurantContext);

  const { favorites } = useContext(FavoriteContext);

  const { restaurants, isLoading, error } = restaurantContext;

  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <SafeArea>
      <Search isFavoriteToggled={isToggled} onFavoriteToggle={onToggle} />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
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
