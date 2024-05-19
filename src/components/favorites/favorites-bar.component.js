import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavoriteBarContainer = styled.View`
  padding: 10px;
`;
export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) return null;
  return (
    <FavoriteBarContainer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((favorite) => (
          <View key={favorite?.name} style={{ marginRight: 10 }}>
            <TouchableOpacity
              onPress={() =>
                onNavigate("RestaurantDetail", { details: favorite })
              }
            >
              <CompactRestaurantInfo restaurant={favorite} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </FavoriteBarContainer>
  );
};
