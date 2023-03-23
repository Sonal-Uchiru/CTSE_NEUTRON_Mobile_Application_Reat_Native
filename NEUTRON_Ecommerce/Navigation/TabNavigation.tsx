import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
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
import ViewCards from '../screens/SaveCardsScreen';
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
import { Ionicons } from '@expo/vector-icons';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import useTheme from '../theme/hooks/UseTheme';
import { COLORS } from '../theme/styles/Colors';
import CardNavigation from './CardNavigation';
import HomeNavigation from './HomeNavigation';
import AppHeader from './appbar/Appbar';
import { mainStyle } from '../responsive/GlobalStyle';

export default function TabNavigation() {
  const [, startTransition] = useTransition();
  const [load, setLoad] = useState(false);
  const Tab = createBottomTabNavigator();
  return (
    <>
      <AppHeader />
      <SafeAreaView style={mainStyle.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: any = '';

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Cards') {
                iconName = focused ? 'card' : 'card-outline';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
              }

              // You can return any component that you like here!
              return (
                <Ionicons name={iconName} size={30} color={COLORS.PRIMARY} />
              );
            },
            tabBarActiveTintColor: COLORS.PRIMARY,
            tabBarInactiveTintColor: COLORS.DARK_GREY
          })}
        >
          <Tab.Screen name="Home" component={HomeNavigation} />
          <Tab.Screen name="Cards" component={CardNavigation} />
          <Tab.Screen name="Cart" component={ViewCart} />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
}
