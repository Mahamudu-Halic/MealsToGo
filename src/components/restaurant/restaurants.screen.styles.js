import { FlatList } from "react-native";
import styled from "styled-components";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})``;
export const ActivityIndicatorContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
