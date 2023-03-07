import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
// i18n
//@ts-ignore
import en from './public/locales/en/translation.ts';
//@ts-ignore
import sin from './public/locales/sin/translation.ts';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './Navigation/TabNavigation';
import { mainStyle } from './responsive/GlobalStyle';
import AppHeader from './Navigation/appbar/Appbar';
import ThemeProvider from './theme/hooks/ThemeProvider';


export default function App() {
  const [locale, setLocale] = useState(Localization.locale);

  i18n.fallbacks = true;
  i18n.translations = { en, sin };
  i18n.locale = locale;

  const changeLanguage = () => {
    if (locale == 'sin') {
      setLocale('en');
      return;
    }

    setLocale('sin');
  };
  return (
    <PaperProvider>
      <ThemeProvider>
        {/* <AppHeader /> */}
        <NavigationContainer>
          <SafeAreaView style={mainStyle.container}>
            <TabNavigation />
            {/* <Text>{i18n.t('title')}</Text>
        <Button onPress={changeLanguage} title="change language" /> */}
          </SafeAreaView>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
