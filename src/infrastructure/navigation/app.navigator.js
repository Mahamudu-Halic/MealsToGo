import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import RestaurantsNavigator from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

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
          component={SettingsScreen}
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
