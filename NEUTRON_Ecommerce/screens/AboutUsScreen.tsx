import { StyleSheet, SafeAreaView, Text, Image, View, ScrollView } from 'react-native';
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
      <ScrollView>
        <View style={style.title}>
      <HeadLine3
        value={i18n.t('aboutUsPage.aboutUs')}
        color={theme.COLORS.PRIMARY}
        marginBottom={10}
      />
      </View>
      <Image source={AboutUs} style={{ height: 250, width: 250, alignSelf:'center' }} />
      <View style={style.paragraphStyle}>
        <Paragraph value={i18n.t('aboutUsPage.para1')} />
        <Paragraph value={i18n.t('aboutUsPage.para2')} marginTop={20} />
      </View>
      {/* <View style={style.back}>
      <Hyperlink value={i18n.t('aboutUsPage.back')}/>
      </View> */}
      
      </ScrollView>
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
      alignSelf: 'center'
    },
    paragraphStyle: {
      textAlign: 'justify',
      padding: 20
    },
    back:{
      alignSelf:'center'
    },

    title:{
      alignSelf:'center'
    }
  });
