import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import { Iphone, VisaImg } from '../../assets/image';
import useThemedStyles from '../../theme/hooks/UseThemedStyles';
import HeadLine3 from '../atoms/typographies/HeadLine3';
import HeadLine4 from '../atoms/typographies/HeadLine4';
import ParagraphBold from '../atoms/typographies/ParagraphBold';
import * as Localization from 'expo-localization';
import useTheme from '../../theme/hooks/UseTheme';
import Paragraph from '../atoms/typographies/Paragraph';
import ModalButton from '../atoms/buttons/ModalButton';
import { Ionicons } from '@expo/vector-icons';
import { ItemModel } from '../../types/items/ItemModel';
import { CartItemModel } from '../../types/cart_Items/CartItemModel';
import CartService from '../../api/services/CartService';
import { UpdateCartItemData } from '../../types/cart_Items/UpdateCartItemData';
import Animated, { SlideInDown, SlideInUp } from 'react-native-reanimated';

interface props {
  key: number;
  item: ItemModel;
  cartItem: CartItemModel;
  refreshFunc: any;
  loadingStatus: any;
  passinError: any;
}

export default function CartCard({
  item,
  cartItem,
  refreshFunc,
  loadingStatus,
  passinError
}: props) {
  const [locale, setLocale] = useState(Localization.locale);
  const [itemQuantity, setitemQuantity] = useState<number>(1);
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const changeLanguage = () => {
    if (locale == 'sin') {
      setLocale('en');
      return;
    }
    setLocale('sin');
  };

  async function updateCartItem(increase: boolean) {
    if (cartItem.quantity == 0 && increase == false) {
      return;
    }
    increase ? cartItem.quantity++ : cartItem.quantity--;
    try {
      loadingStatus(true);
      await CartService.updateCartItemAsync(
        new UpdateCartItemData(cartItem.docId, cartItem.quantity)
      );
      setitemQuantity(cartItem.quantity);
      refreshFunc();
    } catch (error) {
      console.log(error);
      passinError(true);
    }
    return;
  }
  async function deleteCartItem() {
    try {
      loadingStatus(true);
      await CartService.deleteCartItemAsync(cartItem.docId);
      refreshFunc();
    } catch (error) {
      console.log(error);
      passinError(true);
    }
    return;
  }
  return (
    <>
      <Animated.View entering={SlideInUp} style={style.cardStyle}>
        <View style={style.column}>
          <Image
            resizeMode="stretch"
            source={{
              uri:
                item.imageUrl == ''
                  ? 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg'
                  : item.imageUrl
            }}
            style={style.imageStyle}
          />
        </View>
        <View style={style.columnRight}>
          <HeadLine4
            marginTop={10}
            marginLeft={30}
            value={item.brand}
            color={theme.COLORS.PRIMARY}
          />
          <ParagraphBold
            marginLeft={30}
            value={item.itemName}
            color={theme.COLORS.GREY}
          />
          <ParagraphBold
            marginLeft={30}
            value={item.stockKeepingUnits}
            color={theme.COLORS.WARNING}
          />
          <Paragraph
            marginTop={10}
            marginLeft={30}
            value={item.description}
            color={theme.COLORS.GREY}
          />
          <ParagraphBold
            marginTop={10}
            marginLeft={30}
            value={`LKR.${item.unitPrice}`}
            color={theme.COLORS.PRIMARY}
          />
          <View style={style.row}>
            <TouchableHighlight onPress={() => updateCartItem(true)}>
              <Ionicons name={'add-circle-outline'} style={style.icon1} />
            </TouchableHighlight>
            <ParagraphBold
              value={String(itemQuantity)}
              marginTop={22}
              marginRight={20}
            />
            <TouchableHighlight onPress={() => updateCartItem(false)}>
              <Ionicons name={'remove-circle-outline'} style={style.icon2} />
            </TouchableHighlight>
            <ModalButton
              value={i18n.t('viewCartPage.removeBtn')}
              color={theme.COLORS.ERROR}
              marginTop={10}
              width={80}
              callFunction={deleteCartItem}
            />
          </View>
        </View>
      </Animated.View>
    </>
  );
}

const styles = (theme: {
  TYPOGRAPHY: {
    FONT_WEIGHT: any;
    FONT_SIZE: { M1: number; S1: number; L1: number; L2: number; L3: number };
  };
  COLORS: {
    WARNING: string;
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
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      borderColor: theme.COLORS.PRIMARY,
      backgroundColor: theme.COLORS.WHITE,
      marginTop: 40
    },
    headerStyle: {
      alignSelf: 'flex-start',
      marginStart: 20
    },
    imageStyle: { height: 220, width: 100, borderRadius: 20, marginTop: 5 },
    column: { flexDirection: 'column' },
    row: { flexDirection: 'row', alignSelf: 'flex-end' },
    columnRight: { flexDirection: 'column', width: 260 },
    icon1: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.L2,
      color: theme.COLORS.PRIMARY,
      marginTop: 5,
      marginRight: 15
    },
    icon2: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.L2,
      color: theme.COLORS.PRIMARY,
      marginTop: 5,
      marginRight: 15
    }
  });
