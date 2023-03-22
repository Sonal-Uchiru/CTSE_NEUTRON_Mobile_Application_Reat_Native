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
import { useRoute } from '@react-navigation/native';

export default function RoleNavigationChooser() {
  const Stack = createNativeStackNavigator();
  const route = useRoute();

  const [userRole, setUserRole] = useState<number>(0);

  useEffect(() => {
    (async () => {
      setUserRole(route.params?.userRole);
      console.log(userRole);

      // let role = await ExpoLocalStorage.getRoleFromLocalStorageAsync();
      // role != null ? setUserRole(role) : setUserRole(-99);
      // console.log(userRole);
      // console.log(route.params?.userRole);
    })();
  }, [userRole]);

  return (
    <Stack.Navigator initialRouteName={false ? 'Client' : 'Admin'}>
      <Stack.Screen
        name="Admin"
        component={AdminNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Client"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
