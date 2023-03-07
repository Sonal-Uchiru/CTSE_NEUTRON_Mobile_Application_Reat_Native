import { StyleSheet, SafeAreaView, Text, Image, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import i18n from 'i18n-js';
import Login from '../components/organisms/forms/users/logins/login';
import PublicHeader from '../components/molecules/PublicHeader';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import * as Localization from 'expo-localization';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';
import { Card } from 'react-native-paper';
import ParagraphBold from '../components/atoms/typographies/ParagraphBold';
import Paragraph from '../components/atoms/typographies/Paragraph';
import CardTitleView from '../components/molecules/cards/CardTitle';
import { Padlock } from '../assets/image';
import Information from '../components/atoms/typographies/Information';
import Hyperlink from '../components/atoms/typographies/HyperLink';

export default function AboutUsScreen() {
  const [locale, setLocale] = useState(Localization.locale);
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCard, setShowCard] = useState(false);
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
      <HeadLine3
        value={i18n.t('aboutUsPage.aboutUs')}
        color={theme.COLORS.PRIMARY}
        marginBottom={20}
      />
      <Image source={Padlock} style={{ height: 240, width: 240 }} />
      <View style={style.paragraphStyle}>
        <Paragraph value={i18n.t('aboutUsPage.para1')} marginTop={5} />
        <Paragraph value={i18n.t('aboutUsPage.para2')} marginTop={20} />
      </View>
      <Hyperlink value={i18n.t('aboutUsPage.back')} />
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
    },
    paragraphStyle: {
      textAlign: 'justify',
      padding: 20
    }
  });
