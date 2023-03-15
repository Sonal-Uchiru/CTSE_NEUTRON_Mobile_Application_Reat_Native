import { Coordinations } from '../../types/items/Coordinations';
export const GetDistance = (
  userLocation: Coordinations,
  itemLocation: Coordinations
) => {
  var rad = function (x: number) {
    return (x * Math.PI) / 180;
  };

  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(itemLocation.latitude - userLocation.latitude);
  var dLong = rad(itemLocation.longitude - userLocation.longitude);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(itemLocation.latitude)) *
      Math.cos(rad(itemLocation.latitude)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};
