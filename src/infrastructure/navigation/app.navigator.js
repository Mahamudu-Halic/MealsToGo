import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import RestaurantsNavigator from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavoriteContextProvider } from "../../services/favorite/favorite.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import SettingsNavigator from "./settings.navigator";

const AppNavigator = () => {
  const Tap = createBottomTabNavigator();
  return (
    <FavoriteContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tap.Navigator
              screenOptions={{
                tabBarActiveTintColor: "tomato",
                headerShown: false,
              }}
            >
              <Tap.Screen
                name="Restaurants Navigator"
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
                name="Settings Navigator"
                component={SettingsNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                  ),
                }}
              />
            </Tap.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavoriteContextProvider>
  );
};

export default AppNavigator;
