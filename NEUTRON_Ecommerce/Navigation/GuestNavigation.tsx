import { LogBox, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
import CardNavigation from './CardNavigation';
import LoginScreen from '../screens/LoginScreen';
import UserRegisterScreen from '../screens/UserRegisterScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';

export default function GuestNavigation() {
  const Stack = createNativeStackNavigator();
  LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={UserRegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Terms"
        component={TermsAndConditionsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
