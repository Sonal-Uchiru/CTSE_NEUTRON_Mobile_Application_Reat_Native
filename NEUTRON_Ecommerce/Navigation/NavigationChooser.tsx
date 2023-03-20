import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  useTransition
} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCardScreen from '../screens/AddCardScreen';
import SavedCards from '../screens/SaveCardsScreen';
import EditCardScreen from '../screens/EditCardScreen';
import TabNavigation from './TabNavigation';
import GuestNavigation from './GuestNavigation';
import ExpoLocalStorage from '../authentication/secure_stores/ExpoLocalStorage';

export default function NavigationChooser() {
  const Stack = createNativeStackNavigator();

  const [userRole, setUserRole] = useState<number>(-99);

  useEffect(() => {
    (async () => {
      let a = 0;
      let role = await ExpoLocalStorage.getRoleFromLocalStorageAsync();
      role != null ? setUserRole(role) : setUserRole(-99);
      console.log(role);
    })();
  }, [userRole]);

  return (
    <Stack.Navigator initialRouteName={userRole != -99 ? 'LoggedIn' : 'Guest'}>
      <Stack.Screen
        name="LoggedIn"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guest"
        component={GuestNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
