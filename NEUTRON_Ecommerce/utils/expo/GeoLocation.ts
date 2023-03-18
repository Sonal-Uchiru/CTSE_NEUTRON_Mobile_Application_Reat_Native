import * as Location from 'expo-location';

export const getCurrentPositionAsync =
  async (): Promise<Location.LocationObject> => {
    await Location.requestForegroundPermissionsAsync();
    return await Location.getCurrentPositionAsync({});
  };
