import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { FavoriteContext } from "../../services/favorite/favorite.context";

const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  right: 10px;
  z-index: 10;
`;

export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);

  const isFavorite = favorites.find((f) => f?.placeId === restaurant?.placeId);
  return (
    <FavoriteButton
      onPress={() =>
        isFavorite
          ? removeFromFavorites(restaurant)
          : addToFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        color={isFavorite ? "red" : "white"}
        size={24}
      />
    </FavoriteButton>
  );
};
