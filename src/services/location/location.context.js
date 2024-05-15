import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransformed } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    locationRequest(searchKeyword.trim().toLowerCase())
      .then(locationTransformed)
      .then((result) => {
        setLocation(result);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  const value = {
    search: onSearch,
    isLoading,
    location,
    error,
    keyword,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
