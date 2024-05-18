import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

import { RestaurantScreen } from "../../features/restaurant/screens/restaurants.screen";
import { SafeArea } from "../../components/utility/safe-area.component";
import RestaurantsNavigator from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Settings = () => (
  <SafeArea>
    <View>
      <Text>Settings!</Text>
    </View>
  </SafeArea>
);

const AppNavigator = () => {
  const Tap = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tap.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          headerShown: false,
        }}
      >
        <Tap.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="restaurant" size={size} color={color} />
            ),
          }}
        />
        <Tap.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map" size={size} color={color} />
            ),
          }}
        />
        <Tap.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tap.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
