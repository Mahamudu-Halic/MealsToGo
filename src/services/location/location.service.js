import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchParam) => {
  return new Promise((resolve, reject) => {
    const location = locations[searchParam];

    if (!location) reject("not found");

    resolve(location);
  });
};

export const locationTransformed = ({ results = [] }) => {
  const { geometry = {} } = results[0];
  const { viewport } = geometry;
  const { lng, lat } = geometry.location;

  return { lng, lat, viewport };
};
