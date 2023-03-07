import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import i18n from 'i18n-js';
import Login from '../components/organisms/forms/users/logins/login';
import PublicHeader from '../components/molecules/PublicHeader';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import ForgotPasswordStep1 from '../components/organisms/forms/users/forgotPasswordsStep1/ForgotPasswordStep1';
import ForgotPasswordStep2 from '../components/organisms/forms/users/forgotPasswordsStep2/ForgotPasswordStep2';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import * as Localization from 'expo-localization';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CardContentView from '../components/molecules/cards/CardContent';
import ParagraphBold from '../components/atoms/typographies/ParagraphBold';
import Paragraph from '../components/atoms/typographies/Paragraph';

export default function HelpScreen() {
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
    <SafeAreaView style={style.container}>
      <HeadLine3 value={i18n.t('helpPage.help')} color={theme.COLORS.PRIMARY} />
      <HeadLine4
        value={i18n.t('helpPage.subTopic')}
        color={theme.COLORS.BLACK}
        marginTop={20}
        marginBottom={20}
      />
      <Card mode="outlined" style={style.cardStyle}>
        <Card.Title
          titleVariant={'headlineSmall'}
          titleStyle={{ color: theme.COLORS.PRIMARY }}
          title={i18n.t('helpPage.profileTopic')}
          left={() => (
            <IconButton
              icon="account"
              iconColor={theme.COLORS.PRIMARY}
              size={30}
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
        <Card.Content style={style.cardContent}>
          <ParagraphBold value={'Step 1'} color={theme.COLORS.PRIMARY} />
          <Paragraph
            value={
              'Lorem ipsum dolor sit amet, consectetui Lorem ipsum dolor sit amet, consectetui'
            }
            marginTop={5}
          />
        </Card.Content>
      </Card>
    </SafeAreaView>
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
      flex: 1,
      backgroundColor: theme.COLORS.WHITE,
      alignItems: 'center'
      //   paddingStart: 20
    },
    cardStyle: {
      width: 380,
      borderColor: theme.COLORS.PRIMARY,
      backgroundColor: theme.COLORS.WHITE
    },
    cardContent: {
      alignItems: 'stretch'
    }
  });
