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

export default function CardTitleView() {
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
      <Card.Title
        titleVariant={'headlineSmall'}
        titleStyle={style.titleStyle}
        title={i18n.t('helpPage.profileTopic')}
        left={() => (
          <IconButton
            style={{
              // alignSelf: 'flex-end'
              paddingEnd: 20
            }}
            icon="account"
            iconColor={theme.COLORS.PRIMARY}
            size={40}
          />
        )}
        right={() => (
          <IconButton
            icon="chevron-down"
            onPress={() => {}}
            iconColor={theme.COLORS.PRIMARY}
            size={50}
          />
        )}
      />
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
    },
    titleStyle: {
      flexDirection: 'row',
      color: theme.COLORS.PRIMARY,
      alignSelf: 'flex-start'
    }
  });
