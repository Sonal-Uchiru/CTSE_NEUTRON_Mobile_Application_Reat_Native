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

export default function CardNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewItems"
        component={SavedCards}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddCards"
        component={AddCardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditCard"
        component={EditCardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
