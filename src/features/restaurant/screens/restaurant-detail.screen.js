import { useState } from "react";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import styled from "styled-components";

const ListAccordion = styled(List.Accordion)`
  background-color: #fff;
`;

const RestaurantDetail = ({ route }) => {
  const { details } = route.params;
  const [breakfastexpanded, setBreakfastExpanded] = useState(false);
  const [lunchexpanded, setLunchExpanded] = useState(false);
  const [dinnerexpanded, setDinnerExpanded] = useState(false);
  const [drinksexpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={details} />

      <ScrollView>
        <ListAccordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastexpanded}
          onPress={() => setBreakfastExpanded(!breakfastexpanded)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </ListAccordion>
        <ListAccordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchexpanded}
          onPress={() => setLunchExpanded(!lunchexpanded)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </ListAccordion>
        <ListAccordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={dinnerexpanded}
          onPress={() => setDinnerExpanded(!dinnerexpanded)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </ListAccordion>
        <ListAccordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksexpanded}
          onPress={() => setDrinksExpanded(!drinksexpanded)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </ListAccordion>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetail;
