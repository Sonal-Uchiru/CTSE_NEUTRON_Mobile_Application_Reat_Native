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
import ViewItemScreen from '../screens/ViewItemScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import HelpScreen from '../screens/HelpScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import LoginScreen from '../screens/LoginScreen';

export default function HomeNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewCards"
        component={ViewItemScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Help"
        component={HelpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogOut"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
