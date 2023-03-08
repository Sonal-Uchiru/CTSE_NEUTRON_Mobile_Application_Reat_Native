import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import * as Localization from 'expo-localization';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';
import ParagraphBold from '../components/atoms/typographies/ParagraphBold';
import Paragraph from '../components/atoms/typographies/Paragraph';
import CardTitleView from '../components/molecules/cards/CardTitle';
import { Card } from 'react-native-paper';
import { VisaImg } from '../assets/image';
import CreditCard from '../components/molecules/CreditCard';
import ModalButton from '../components/atoms/buttons/ModalButton';
import FormGroupWithIcon from '../components/molecules/FormGroupWithIcon';

export default function SavedCards() {
  const [locale, setLocale] = useState(Localization.locale);
  const [searchText, setSearchText] = useState('');
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const array = [1, 2, 3, 4, 5];
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
          value={i18n.t('savedCardsPage.title')}
          color={theme.COLORS.PRIMARY}
        />
        <Paragraph
          value={i18n.t('savedCardsPage.subTitle')}
          color={theme.COLORS.BLACK}
        />
      </View>
      <FormGroupWithIcon
        name={i18n.t('savedCardsPage.searchLabel')}
        id={'search'}
        fieldvalue={searchText}
        placeholder={i18n.t('savedCardsPage.searchPlaceHolder')}
        fieldstyle={style.textInput}
        onChangeText={undefined}
        error={undefined}
        iconFirst={'magnify'}
        iconSecond={'magnify'}
        callFunction={undefined}
      />
      <ScrollView>
        {array.map((value, i) => {
          return (
            <CreditCard
              id={i}
              cardName={"Kasun's Card"}
              cardNumber={'Visa ************ 456'}
              type={'visa'}
              date={'12/23'}
              owner={'John Do'}
            />
          );
        })}
      </ScrollView>
      <ModalButton
        value={i18n.t('savedCardsPage.buttonAddCard')}
        color={theme.COLORS.PRIMARY}
        marginBottom={25}
        width={160}
      />
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
      flexDirection: 'row',
      width: 380,
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
      borderColor: theme.COLORS.PRIMARY,
      backgroundColor: theme.COLORS.WHITE,
      marginTop: 40
    },
    headerStyle: {
      alignSelf: 'flex-start',
      marginStart: 20
    },
    textInput: {
      width: '80%',
      marginTop: 25,
      backgroundColor: theme.COLORS.WHITE
    },
    imageStyle: { height: 100, width: 150 },
    column: { flexDirection: 'column' }
  });
