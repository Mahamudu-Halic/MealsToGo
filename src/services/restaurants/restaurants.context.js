import React, { createContext, useEffect, useState } from "react";

import {
  restaurantRequest,
  restaurantTransformed,
} from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantTransformed)
        .then((data) => {
          setRestaurants(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        })
        .finally(() => setIsLoading(false));
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  const value = { restaurants, isLoading, error };
  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};
