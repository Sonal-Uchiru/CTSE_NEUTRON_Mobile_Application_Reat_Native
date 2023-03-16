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
import ItemService from '../../api/services/ItemService';

interface props {
  docId:string;
  key: number;
  brand: string;
  itemName: string;
  skuNumber: string;
  description: string;
  price: number;
  image: string | null;
  onRemove(): void;
  onEdit(): void;
}

export default function AdminViewItemCard({
  docId,
  key,
  brand,
  itemName,
  skuNumber,
  description,
  price,
  image,
  onRemove,
  onEdit
}: props) {
  const [locale, setLocale] = useState(Localization.locale);
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const removeItemAsync = async (docId: string) => {
    try {
      await ItemService.deleteItemAsync(docId);
      onRemove();
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
                image ??
                'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg'
            }}
            style={style.imageStyle}
          />
        </View>
        <View style={style.columnRight}>
          <HeadLine4
            marginTop={10}
            marginLeft={30}
            value={brand}
            color={theme.COLORS.PRIMARY}
          />
          <ParagraphBold
            marginLeft={30}
            value={itemName}
            color={theme.COLORS.GREY}
          />
          <ParagraphBold
            marginLeft={30}
            value={skuNumber}
            color={theme.COLORS.WARNING}
          />
          <Paragraph
            marginTop={10}
            marginLeft={30}
            value={description}
            color={theme.COLORS.GREY}
          />
          <ParagraphBold
            marginTop={10}
            marginLeft={30}
            value={`LKR.${price}`}
            color={theme.COLORS.PRIMARY}
          />

          <View style={style.buttonView}>
            <ModalButton
              value={i18n.t('viewItemPage.editBtn')}
              color={theme.COLORS.PRIMARY}
              marginTop={10}
              marginRight={5}
              width={horizontalScale(80)}
            />
            <ModalButton
              value={i18n.t('viewItemPage.removeBtn')}
              color={theme.COLORS.ERROR}
              marginTop={10}
              marginLeft={5}
              width={horizontalScale(100)}
              callFunction={() => removeItemAsync(docId)}
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
    ERROR: string;
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
      alignSelf: 'center',
      flexDirection: 'row'
    }
  });
