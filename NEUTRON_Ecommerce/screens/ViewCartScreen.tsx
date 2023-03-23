import { StyleSheet, SafeAreaView, View, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import { CartItemModel } from '../types/cart_Items/CartItemModel';
import CartItemService from '../api/services/CartService';
import UserService from '../api/services/UserService';
import ErrorSnackbar from '../hooks/snackbar/ErrorSnackbar';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ConfirmDialog from '../hooks/dialogs/Confirm';
import SuccessDialog from '../hooks/dialogs/SuccessDialog';

export default function ViewCart() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemList, setItemList] = useState<CartItemModel[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [isDataChanged, setIsDataChanged] = useState<boolean>(false);

  useEffect(() => {
    fetchCartList();
  }, [isFocused, isDataChanged]);

  async function fetchCartList() {
    setLoading(true);
    try {
      const resItems = await CartItemService.getCartItemListAsync();
      if (resItems.length > 0) {
        setCount(resItems.length);
        setItemList(resItems);
      } else {
        setItemList([]);
      }
      calculateTotal(resItems);
      setError(false);
      setLoading(false);
    } catch (error: any) {
      setError(true);
      setLoading(false);
      setErrorMsg(error.message);
      console.log(error);
    }
    setLoading(false);
  }

  async function calculateTotal(passedItemList: CartItemModel[]) {
    let tot = 0;
    {
      await passedItemList.map((selectedItem, i) => {
        tot = tot + selectedItem.quantity * selectedItem.item.unitPrice;
      });
      setTotalPrice(tot);
    }
  }

  const proceedCheckoutAsync = async () => {
    try {
      setError(false);
      setLoading(true);

      if (itemList.length == 0) {
        return;
      }

      const cartItemIds: string[] = [];

      await itemList.forEach((item) => {
        cartItemIds.push(item.docId);
      });
      
      await CartItemService.deleteAllCartItemsAsync(cartItemIds);

      setDialogVisible(!dialogVisible);
      setIsDataChanged(!isDataChanged);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerStyle}>
        <HeadLine3
          value={i18n.t('viewCartPage.title')}
          color={theme.COLORS.PRIMARY}
        />
      </View>

      {loading ? (
        <View style={style.loading}>
        <ActivityIndicator size="large" />
      </View>
      ) : (
        <HeadLine4 value={''} marginTop={17} marginBottom={0} />
      )}

      <ScrollView>
        {itemList.length > 0 ?
         itemList.map((selectedItem, i) => {
          return (
            <CartCard
              key={i}
              cartItem={selectedItem}
              refreshFunc={() => setIsDataChanged(!isDataChanged)}
              loadingStatus={setLoading}
              passinError={setError}
            />
          );
        }): (<View><HeadLine4 value={'Cart Is Empty'} color={theme.COLORS.PRIMARY}/></View>)}
      </ScrollView>
      <View style={style.row}>
        <HeadLine4
          value={i18n.t('viewCartPage.subTotal')}
          color={theme.COLORS.PRIMARY}
          marginLeft={10}
        />
        <Paragraph
          value={`(${count} ${i18n.t('viewCartPage.items')})`}
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
        callFunction={() => proceedCheckoutAsync()}
      />
      <ErrorSnackbar
        text={errorMsg}
        iconName={undefined}
        isVisible={error}
        dismissFunc={() => setError(false)}
      />
      <SuccessDialog
        isVisible={dialogVisible}
        dismissFunc={() => setDialogVisible(!dialogVisible)}
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
