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
import ParagraphBold from '../components/atoms/typographies/ParagraphBold';
import Paragraph from '../components/atoms/typographies/Paragraph';
import CardTitleView from '../components/molecules/cards/CardTitle';

export default function HelpScreen() {
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
      <View style={style.headerStyle}>
        <HeadLine3
          value={i18n.t('helpPage.help')}
          color={theme.COLORS.PRIMARY}
        />
        <HeadLine4
          value={i18n.t('helpPage.subTopic')}
          color={theme.COLORS.BLACK}
          marginTop={20}
        />
      </View>
      <Card mode="outlined" style={style.cardStyle}>
        <CardTitleView
          visible={showProfile}
          changeVisible={() => setShowProfile(!showProfile)}
          headerIcon={'account'}
          cardTopic={i18n.t('helpPage.profileTopic')}
        />
        <Card.Content
          style={showProfile ? style.cardContent : style.hiddenCardContent}
        >
          <ParagraphBold
            value={i18n.t('helpPage.step01')}
            color={theme.COLORS.PRIMARY}
          />
          <Paragraph value={i18n.t('helpPage.profileStep01')} marginTop={5} />
          <ParagraphBold
            value={i18n.t('helpPage.step02')}
            color={theme.COLORS.PRIMARY}
            marginTop={20}
          />
          <Paragraph value={i18n.t('helpPage.profileStep02')} marginTop={5} />
          <ParagraphBold
            value={i18n.t('helpPage.step03')}
            color={theme.COLORS.PRIMARY}
            marginTop={20}
          />
          <Paragraph value={i18n.t('helpPage.profileStep03')} marginTop={5} />
        </Card.Content>
      </Card>
      <Card mode="outlined" style={style.cardStyle}>
        <CardTitleView
          visible={showCart}
          changeVisible={() => setShowCart(!showCart)}
          headerIcon={'cart'}
          cardTopic={i18n.t('helpPage.cartTopic')}
        />
        <Card.Content
          style={showCart ? style.cardContent : style.hiddenCardContent}
        >
          <ParagraphBold
            value={i18n.t('helpPage.step01')}
            color={theme.COLORS.PRIMARY}
          />
          <Paragraph value={i18n.t('helpPage.cardStep01')} marginTop={5} />
          <ParagraphBold
            value={i18n.t('helpPage.step02')}
            color={theme.COLORS.PRIMARY}
            marginTop={20}
          />
          <Paragraph value={i18n.t('helpPage.cardStep02')} marginTop={5} />
          <ParagraphBold
            value={i18n.t('helpPage.step03')}
            color={theme.COLORS.PRIMARY}
            marginTop={20}
          />
          <Paragraph value={i18n.t('helpPage.cardStep03')} marginTop={5} />
        </Card.Content>
      </Card>
      <Card mode="outlined" style={style.cardStyle}>
        <CardTitleView
          visible={showCard}
          changeVisible={() => setShowCard(!showCard)}
          headerIcon={'credit-card'}
          cardTopic={i18n.t('helpPage.cardTopic')}
        />
        <Card.Content
          style={showCard ? style.cardContent : style.hiddenCardContent}
        >
          <ParagraphBold
            value={i18n.t('helpPage.step01')}
            color={theme.COLORS.PRIMARY}
          />
          <Paragraph value={i18n.t('helpPage.cartStep01')} marginTop={5} />
          <ParagraphBold
            value={i18n.t('helpPage.step02')}
            color={theme.COLORS.PRIMARY}
            marginTop={20}
          />
          <Paragraph value={i18n.t('helpPage.cartStep02')} marginTop={5} />
          <ParagraphBold
            value={i18n.t('helpPage.step03')}
            color={theme.COLORS.PRIMARY}
            marginTop={20}
          />
          <Paragraph value={i18n.t('helpPage.cartStep03')} marginTop={5} />
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
      width: 385,
      borderColor: theme.COLORS.PRIMARY,
      backgroundColor: theme.COLORS.WHITE,
      marginTop: 40
    },
    cardContent: {
      display: 'flex'
    },
    hiddenCardContent: {
      display: 'none'
    },
    headerStyle: {
      alignSelf: 'flex-start',
      marginStart: 20
    }
  });
