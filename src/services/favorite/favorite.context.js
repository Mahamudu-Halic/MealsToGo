import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavrites] = useState([]);

  const add = (restaurant) => {
    setFavrites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (f) => f.placeId !== restaurant.placeId
    );
    setFavrites(newFavorites);
  };

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
