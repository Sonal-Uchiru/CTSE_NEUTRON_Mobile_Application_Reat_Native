import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView,
  Pressable
} from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import * as Localization from 'expo-localization';
import Paragraph from '../components/atoms/typographies/Paragraph';
import { AboutUs, Terms } from '../assets/image';
import Hyperlink from '../components/atoms/typographies/HyperLink';
import ParagraphBold from '../components/atoms/typographies/ParagraphBold';
import { COLORS } from '../theme/styles/Colors';
import { useNavigation } from '@react-navigation/native';

export default function TermsAndConditionsScreen() {
  const [locale, setLocale] = useState(Localization.locale);
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const navigation = useNavigation();

  const changeLanguage = () => {
    if (locale == 'sin') {
      setLocale('en');
      return;
    }

    setLocale('sin');
  };

  return (
    <SafeAreaView style={style.container}>
      <Image source={Terms} style={{ height: 80, width: 80 }} />
      <HeadLine3
        value={i18n.t('termsAndConditionsPage.terms')}
        color={theme.COLORS.PRIMARY}
        marginBottom={10}
      />
      <ScrollView>
        <View style={style.paragraphStyle}>
          <Paragraph value={i18n.t('termsAndConditionsPage.para1')} />
          <ParagraphBold
            value={i18n.t('termsAndConditionsPage.topic1')}
            marginTop={10}
            color={COLORS.PRIMARY}
          />
          <Paragraph
            value={i18n.t('termsAndConditionsPage.para2')}
            marginTop={10}
          />
          <ParagraphBold
            value={i18n.t('termsAndConditionsPage.topic3')}
            marginTop={10}
            color={COLORS.PRIMARY}
          />
          <Paragraph
            value={i18n.t('termsAndConditionsPage.para4')}
            marginTop={10}
          />
          <ParagraphBold
            value={i18n.t('termsAndConditionsPage.topic2')}
            marginTop={10}
            color={COLORS.PRIMARY}
          />
          <Paragraph
            value={i18n.t('termsAndConditionsPage.para3')}
            marginTop={10}
          />
          <ParagraphBold
            value={i18n.t('termsAndConditionsPage.topic4')}
            marginTop={10}
            color={COLORS.PRIMARY}
          />
          <Paragraph
            value={i18n.t('termsAndConditionsPage.para5')}
            marginTop={10}
          />
          <ParagraphBold
            value={i18n.t('termsAndConditionsPage.topic5')}
            marginTop={10}
            color={COLORS.PRIMARY}
          />
          <Paragraph
            value={i18n.t('termsAndConditionsPage.para6')}
            marginTop={10}
          />
        </View>
      </ScrollView>
      <View style={style.backView}>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Hyperlink value={i18n.t('termsAndConditionsPage.back')} />
        </Pressable>
      </View>
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
    },

    backView: {
      marginBottom: 20,
      marginTop: 20
    }
  });
