import { StyleSheet, SafeAreaView, Image, View } from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import { VisaImg } from '../../assets/image';
import useThemedStyles from '../../theme/hooks/UseThemedStyles';
import HeadLine3 from '../atoms/typographies/HeadLine3';
import HeadLine4 from '../atoms/typographies/HeadLine4';
import ParagraphBold from '../atoms/typographies/ParagraphBold';
import * as Localization from 'expo-localization';
import useTheme from '../../theme/hooks/UseTheme';
import Paragraph from '../atoms/typographies/Paragraph';
import ModalButton from '../atoms/buttons/ModalButton';

interface props {
  key: number;
  cardName: string;
  cardNumber: string;
  type: string;
  passedDate: string;
  owner: string;
}

export default function CreditCard({
  cardName,
  cardNumber,
  type,
  passedDate,
  owner
}: props) {
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
      <View style={style.cardStyle}>
        <View style={style.column}>
          <Image
            resizeMode="contain"
            source={VisaImg}
            style={style.imageStyle}
          />
        </View>
        <View style={style.column}>
          <HeadLine4
            marginTop={10}
            marginLeft={30}
            value={cardName}
            color={theme.COLORS.GREY}
          />
          <ParagraphBold
            marginLeft={30}
            marginTop={10}
            value={`${cardNumber.substring(
              0,
              5
            )} **** **** **** ${cardNumber.substring(11, 15)}`}
            color={theme.COLORS.PRIMARY}
          />
          <ParagraphBold
            marginTop={10}
            marginLeft={30}
            value={`${passedDate.substring(5, 7)}/${passedDate
              .toString()
              .substring(8, 10)}`}
            color={theme.COLORS.PRIMARY}
          />
          <ParagraphBold
            marginTop={10}
            marginLeft={30}
            value={owner}
            color={theme.COLORS.PRIMARY}
          />
          <View style={style.buttonView}>
            <ModalButton
              value={i18n.t('savedCardsPage.buttonEditCard')}
              color={theme.COLORS.ACTION}
              marginTop={10}
            />
          </View>
        </View>
      </View>
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
    imageStyle: { height: 100, width: 150 },
    column: { flexDirection: 'column' },
    buttonView: { alignSelf: 'flex-end' }
  });
