import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import { Avatar, Card, IconButton } from 'react-native-paper';
import useTheme from '../../../theme/hooks/UseTheme';
import useThemedStyles from '../../../theme/hooks/UseThemedStyles';
import ParagraphBold from '../../atoms/typographies/ParagraphBold';
import Paragraph from '../../atoms/typographies/Paragraph';

export default function CardContentView() {
  const [locale, setLocale] = useState(Localization.locale);
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const changeLanguage = () => {
    if (locale == 'sin') {
      setLocale('en');
      return;
    }

    setLocale('sin');
  };

  return (
    <>
      
    </>
  );
}

const styles = (theme: {
  COLORS: {
    WHITE: string;
    PRIMARY: string;
  };
}) =>
  StyleSheet.create({
    container: {
      alignItems: 'stretch'
    }
  });
