import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  useTransition
} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import GuestNavigation from './GuestNavigation';
import ExpoLocalStorage from '../authentication/secure_stores/ExpoLocalStorage';
import AdminNavigation from './AdminNavigation';

export default function RoleNavigationChooser() {
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
    <Stack.Navigator initialRouteName={userRole != 0 ? 'Client' : 'Admin'}>
      <Stack.Screen
        name="Client"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Admin"
        component={AdminNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
