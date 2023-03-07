import { StyleSheet, SafeAreaView, Text, Image, View } from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import * as Localization from 'expo-localization';
import Paragraph from '../components/atoms/typographies/Paragraph';
import { AboutUs } from '../assets/image';
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
        marginBottom={10}
      />
      <Image source={AboutUs} style={{ height: 250, width: 250 }} />
      <View style={style.paragraphStyle}>
        <Paragraph value={i18n.t('aboutUsPage.para1')} />
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
