import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { lazy, Suspense, useState, useTransition } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lazy from '../components/organisms/forms/paddy/lazyComponent/Lazy';
import ForgotPasswordStep1 from '../components/organisms/forms/users/forgotPasswordsStep1/ForgotPasswordStep1';
import ForgotPasswordStep2 from '../components/organisms/forms/users/forgotPasswordsStep2/ForgotPasswordStep2';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import UserAccessScreen from '../screens/UserAccessScreen';
import HelpScreen from '../screens/HelpScreen';

export default function TabNavigation() {
  const [, startTransition] = useTransition();
  const [load, setLoad] = useState(false);
  const Tab = createBottomTabNavigator();

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name="Login" component={HelpScreen} />
        <Tab.Screen name="Demo" component={Lazy} />
        {/* {load && <Lazy />} */}
      </Tab.Navigator>
    </Suspense>
  );
}

const styles = StyleSheet.create({});
