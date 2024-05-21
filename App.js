import { useEffect, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/navigation";
import { FavoriteContextProvider } from "./src/services/favorite/favorite.context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { AuthContextProvider } from "./src/services/auth/auth.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <FavoriteContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavoriteContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
