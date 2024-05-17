import { Card } from "react-native-paper";
import styled from "styled-components";

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space.lg};
  background-color: #fff;
`;

export const RestaurantTitle = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const Info = styled.View`
  padding-top: ${(props) => props.theme.space.md};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space.md} 0;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.space.lg};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const ClosedTempText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantCardCover = styled(Card.Cover)``;
