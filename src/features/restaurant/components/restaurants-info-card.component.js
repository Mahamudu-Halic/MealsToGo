import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantTitle,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  Icon,
  ClosedTempText,
  RestaurantCardCover,
  RestaurantCard,
} from "./restaurants-info-card.styles";
import { Favorite } from "../../../components/favorites/favorite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    address = "10 avenue Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />

      <Info>
        <RestaurantTitle>{name}</RestaurantTitle>
        <Section>
          <Rating>
            {ratingArray.map((rating, index) => (
              <SvgXml xml={star} width={20} height={20} key={name + index} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <ClosedTempText>Closed Temporary</ClosedTempText>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
