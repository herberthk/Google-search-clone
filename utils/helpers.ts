import { regions } from "./regions";

export const getLocation = () => {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return regions[zone];
};
