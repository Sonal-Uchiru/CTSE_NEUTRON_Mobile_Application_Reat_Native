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
import RoleNavigationChooser from './RoleNavigationChooser';
import { UserService } from '../api/services/UserService';
import { UserModel } from '../types/users/UserModel';
import AdminNavigation from './AdminNavigation';

export default function NavigationChooser() {
  const Stack = createNativeStackNavigator();
  const [userRole, setUserRole] = useState<number>(-99);

  useEffect(() => {
    (async () => {
      try {
        let user: any = await UserService.getUserAsync();
        setUserRole(user?.role);
      } catch (e) {
        setUserRole(-99);
      }

      // console.log(user?.firstName);
    })();
  }, [userRole]);

  return (
    <Stack.Navigator initialRouteName={userRole != -99 ? 'LoggedIn' : 'Guest'}>
      <Stack.Screen
        name="LoggedIn"
        component={RoleNavigationChooser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guest"
        component={GuestNavigation}
        options={{ headerShown: false }}
      />
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
