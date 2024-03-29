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
import { horizontalScale } from '../../responsive/Metrics';
import { ItemModel } from '../../types/items/ItemModel';
import CartItemService from '../../api/services/CartService';
import { CurrentCartItem } from '../../types/cart_Items/CurrentCartItem';
import { CreateCartItemData } from '../../types/cart_Items/CreateCartItemData';
import { UpdateCartItemData } from '../../types/cart_Items/UpdateCartItemData';
import AddToCartButton from '../atoms/buttons/AddToCartButton';

interface props {
  item: ItemModel;
}

export default function ViewItemCard({ item }: props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const addToCartAsync = async () => {
    try {
      const currentCartItem: CurrentCartItem | null =
        await CartItemService.isCartItemAvailableAsync(item.docId);

      if (currentCartItem == null) {
        await CartItemService.addCartItemAsync(
          new CreateCartItemData(item.docId)
        );
      } else {
        await CartItemService.updateCartItemAsync(
          new UpdateCartItemData(
            currentCartItem.docId,
            currentCartItem.currentQuantity + 1
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={style.cardStyle}>
        <View style={style.column}>
          <Image
            resizeMode="stretch"
            source={{
              uri:
                item.imageUrl != ''
                  ? item.imageUrl
                  : 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg'
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

          <View style={style.buttonView}>
            <AddToCartButton
              value={i18n.t('buttons.addToCart')}
              color={theme.COLORS.PRIMARY}
              marginTop={10}
              width={horizontalScale(160)}
              callFunction={addToCartAsync}
              doneText={i18n.t('buttons.cartAdded')}
            />
          </View>
        </View>
      </View>
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
      width: horizontalScale(355),
      borderWidth: 2,
      borderRadius: 15,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      borderColor: theme.COLORS.PRIMARY,
      backgroundColor: theme.COLORS.WHITE,
      marginTop: 15
    },
    headerStyle: {
      alignSelf: 'flex-start',
      marginStart: 20
    },
    imageStyle: { height: 220, width: 100, borderRadius: 20 },
    column: { flexDirection: 'column', marginTop: 10 },
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
    },

    buttonView: {
      alignSelf: 'center'
    }
  });
