import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import Paragraph from '../components/atoms/typographies/Paragraph';
import CreditCard from '../components/molecules/CreditCard';
import ModalButton from '../components/atoms/buttons/ModalButton';
import FormGroupWithIcon from '../components/molecules/FormGroupWithIcon';
import UserService from '../api/services/UserService';
import CartService from '../api/services/CartService';
import CardService from '../api/services/CardService';
import { CardModel } from '../types/cards/CardModel';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';

export default function SavedCards() {
  const [searchText, setSearchText] = useState('');
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const array = [1, 2, 3, 4, 5];
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [cardList, setCardList] = useState<CardModel[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [copyCards, setCopyCards] = useState<CardModel[]>([]);

  const credentials = {
    email: 'sonal@gmail.com',
    password: 'Sonal123$'
  };

  useEffect(() => {
    fetchCardList();
  }, []);

  async function fetchCardList() {
    const ss = await UserService.loginAsync(credentials);
    setLoading(true);
    try {
      const resCards = await CardService.getCardListAsync();
      console.log(resCards);
      if (resCards.length > 0) {
        setCount(resCards.length);
        setCardList(resCards);
        setCopyCards(resCards);
      }
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  const searchCards = (input: any) => {
    if (input.length == 1) return setCardList(copyCards);

    if (input.length > 3) {
      const content: CardModel[] = copyCards.filter((i) =>
        i.displayName.toLowerCase().includes(input.toLowerCase())
      );
      setCardList(content);
    }
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
        onChangeText={(input: React.SetStateAction<string>) => {
          setSearchText(input);
          searchCards(input);
        }}
        error={undefined}
        iconFirst={'magnify'}
        iconSecond={'magnify'}
        callFunction={undefined}
      />
      {loading ? (
        <HeadLine4
          value={'Loading...'}
          marginLeft={20}
          marginBottom={30}
          color={theme.COLORS.WARNING}
        />
      ) : (
        <ScrollView>
          {cardList.map((card, i) => {
            return (
              <CreditCard
                key={i}
                cardName={card.displayName}
                cardNumber={`Visa ${card.cardNumber}`}
                type={'visa'}
                passedDate={card.expiryDate}
                owner={card.nameOnCard}
              />
            );
          })}
        </ScrollView>
      )}

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
