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
import AboutUsScreen from '../screens/AboutUsScreen';
import SavedCards from '../screens/SaveCardsScreen';
import ManageItems from '../screens/ManageItems';
import Login from '../components/organisms/forms/users/logins/login';
import DemoForm from '../components/organisms/forms/users/DIalogTesting/DemoForm';
import ViewCart from '../screens/ViewCartScreen';
import LoginScreen from '../screens/LoginScreen';
import UserRegisterScreen from '../screens/UserRegisterScreen';
import RegisterForm from '../components/organisms/forms/users/registers/RegisterForm';
import ViewItemScreen from '../screens/ViewItemScreen';
import AdminViewItemScreen from '../screens/AdminViewItemScreen';
import AddToCartAnimation from '../components/molecules/AddToCartAnimation';
import TermsAnsConditionsScreen from '../screens/TermsAndConditionsScreen';
import AdminViewAllCustomersScreen from '../screens/AdminViewAllCustomersScreen';
import AddCardScreen from '../screens/AddCardScreen';
import EditCardScreen from '../screens/EditCardScreen';
import ProfileScreen from '../screens/ViewProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

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
        <Tab.Screen name="Login" component={AddCardScreen} />
        <Tab.Screen name="Demo" component={DemoForm} />
        {/* {load && <Lazy />} */}
      </Tab.Navigator>
    </Suspense>
  );
}

const styles = StyleSheet.create({});
