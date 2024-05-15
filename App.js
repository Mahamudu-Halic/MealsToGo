import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurantScreen } from "./src/features/restaurant/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";

const Settings = () => (
  <SafeArea>
    <View>
      <Text>Settings!</Text>
    </View>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <View>
      <Text>Map!</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) return null;

  const Tap = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tap.Navigator
              screenOptions={{
                tabBarActiveTintColor: "tomato",
                // tabBarActiveTintColor: "#e91e63",
              }}
            >
              <Tap.Screen
                name="Restaurant"
                component={RestaurantScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="restaurant" size={size} color={color} />
                  ),
                }}
              />
              <Tap.Screen
                name="Map"
                component={Map}
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
        </RestaurantContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
