import React from "react";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const RestaurantDetail = ({ route }) => {
  const { details } = route.params;

  console.log(details);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={details} />
    </SafeArea>
  );
};

export default RestaurantDetail;
