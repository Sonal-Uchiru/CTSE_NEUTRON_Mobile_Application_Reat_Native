import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import Paragraph from '../components/atoms/typographies/Paragraph';
import CreditCard from '../components/molecules/CreditCard';
import ModalButton from '../components/atoms/buttons/ModalButton';
import FormGroupWithIcon from '../components/molecules/FormGroupWithIcon';
import CartCard from '../components/molecules/CartCard';
import { Iphone } from '../assets/image';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';

export default function ViewCart() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const array = [1, 2, 3, 4, 5];
  const [totalPrice, setTotalPrice] = useState(0);
  let itemPrice = 420000;

  function calculateTotal(itemTotalPrice: number) {
    setTotalPrice(totalPrice + itemTotalPrice);
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerStyle}>
        <HeadLine3
          value={i18n.t('viewCartPage.title')}
          color={theme.COLORS.PRIMARY}
        />
      </View>
      <ScrollView>
        {array.map((value, i) => {
          return (
            <CartCard
              key={i}
              brand={'Apple'}
              itemName={'I phone 12 Pro Max '}
              skuNumber={'KS944RUR'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor..'
              }
              price={itemPrice}
              image={Iphone}
              calcTotal={calculateTotal}
            />
          );
        })}
      </ScrollView>
      <View style={style.row}>
        <HeadLine4
          value={i18n.t('viewCartPage.subTotal')}
          color={theme.COLORS.PRIMARY}
          marginLeft={10}
        />
        <Paragraph
          value={`(2 ${i18n.t('viewCartPage.items')})`}
          color={theme.COLORS.PRIMARY}
          marginLeft={10}
          marginTop={3}
        />
        <HeadLine4
          marginLeft={105}
          value={`LKR.${totalPrice}`}
          marginTop={3}
          color={theme.COLORS.PRIMARY}
        />
      </View>
      <View
        style={{
          borderStyle: 'dotted',
          borderWidth: 1,
          borderRadius: 1,
          borderColor: theme.COLORS.BLACK,
          width: '90%'
        }}
      />
      <View style={style.row}>
        <HeadLine4
          value={i18n.t('viewCartPage.totalAmount')}
          color={theme.COLORS.PRIMARY}
          marginLeft={10}
        />
        <HeadLine4
          marginLeft={130}
          value={`LKR.${totalPrice}`}
          marginTop={3}
          color={theme.COLORS.PRIMARY}
        />
      </View>
      <ModalButton
        value={i18n.t('viewCartPage.checkoutBtn')}
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
    column: { flexDirection: 'column' },
    row: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      marginTop: 20,
      marginBottom: 20
    }
  });
