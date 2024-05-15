import React, { createContext, useContext, useEffect, useState } from "react";

import {
  restaurantRequest,
  restaurantTransformed,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const locationContext = useContext(LocationContext);

  const { location, search, keyword } = locationContext;
  const [restaurantLocation, setRestaurantLocation] = useState(location);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest(loc)
        .then(restaurantTransformed)
        .then((data) => {
          setRestaurants(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    const currentLocation = `${location?.lat},${location?.lng}`;
    retrieveRestaurants(currentLocation);
  }, [location]);

  const value = { restaurants, isLoading, error };
  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};
