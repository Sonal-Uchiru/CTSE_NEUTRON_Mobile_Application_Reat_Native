import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
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
import CardService from '../api/services/CardService';
import { CardModel } from '../types/cards/CardModel';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';
import ErrorSnackbar from '../hooks/snackbar/ErrorSnackbar';
import { AuthenticationData } from '../types/authentication/AuthenticationData';
import { useIsFocused, useNavigation } from '@react-navigation/native';

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
  const [errorMsg, setErrorMsg] = useState<string>('');

  type Nav = {
    navigate: (value: string, metaData?: any) => void;
  };

  const navigation = useNavigation<Nav>();

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchCardList();
  }, [isFocused]);

  async function fetchCardList() {
    setLoading(true);
    try {
      const resCards = await CardService.getCardListAsync();
      if (resCards.length > 0) {
        setCount(resCards.length);
        setCardList(resCards);
        setCopyCards(resCards);
      }else{
        setCount(0);
        setCardList([]);
        setCopyCards([]);
      }
      setError(false);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setError(true);
      setErrorMsg(error.message);
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
        <View style={style.loading}>
        <ActivityIndicator size="large" />
      </View>
      ) : (
        <HeadLine4 value={''} marginTop={12} marginBottom={0} />
      )}
        <ScrollView>
          {cardList.map((card, i) => {
            return (
              <CreditCard
                key={i}
                cardName={card.displayName}
                cardNumber={`${card.cardNumber}`}
                type={card.type}
                passedDate={card.expiryDate}
                owner={card.nameOnCard}
                documentId={card.docId}
              />
            );
          })}
        </ScrollView>

      <ModalButton
        value={i18n.t('savedCardsPage.buttonAddCard')}
        color={theme.COLORS.PRIMARY}
        marginBottom={25}
        width={160}
        marginTop={40}
        callFunction={() => navigation.navigate('AddCards')}
      />

      <ErrorSnackbar
        text={errorMsg}
        iconName={undefined}
        isVisible={error}
        dismissFunc={() => setError(false)}
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

    // loading: {
    //   position: 'absolute',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   left: 0,
    //   right: 0,
    //   top: '60%',
    //   bottom: 0,
    // },

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
