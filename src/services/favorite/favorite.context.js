import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth/auth.context";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavrites] = useState([]);
  const { user } = useContext(AuthContext);

  const add = (restaurant) => {
    setFavrites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (f) => f.placeId !== restaurant.placeId
    );
    setFavrites(newFavorites);
  };

  const storeFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${user?.uid}`, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favorites-${user?.uid}`);
      return setFavrites(() =>
        jsonValue != null ? JSON.parse(jsonValue) : []
      );
    } catch (e) {
      // error reading value
      console.log("getFavorites", e);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    storeFavorites(favorites);
  }, [favorites]);

  const value = {
    favorites,
    addToFavorites: add,
    removeFromFavorites: remove,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
