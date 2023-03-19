import { StyleSheet, SafeAreaView, Image, View } from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import { Iphone, UserProfile, VisaImg } from '../../assets/image';
import useThemedStyles from '../../theme/hooks/UseThemedStyles';
import HeadLine3 from '../atoms/typographies/HeadLine3';
import HeadLine4 from '../atoms/typographies/HeadLine4';
import ParagraphBold from '../atoms/typographies/ParagraphBold';
import * as Localization from 'expo-localization';
import useTheme from '../../theme/hooks/UseTheme';
import Paragraph from '../atoms/typographies/Paragraph';
import ModalButton from '../atoms/buttons/ModalButton';
import { horizontalScale, verticalScale } from '../../responsive/Metrics';

interface props {
  key: number;
  label1: string;
  label2: string;
  label3: string;
  name: string;
  email: string;
  contact: string;
  profileUrl: string;
}

export default function AdminViewItemCard({
  name,
  email,
  contact,
  label1,
  label2,
  label3,
  profileUrl
}: props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <>
      <View style={style.cardStyle}>
        <View style={style.column}>
          <View style={style.imageView}>
            <Image
              resizeMode="contain"
              source={{
                uri:
                  profileUrl == ''
                    ? 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg'
                    : profileUrl
              }}
              style={style.imageStyle}
            />
          </View>
        </View>
        <View style={style.columnRight}>
          <View style={style.row1}>
            <ParagraphBold
              marginLeft={10}
              marginTop={10}
              value={label1}
              color={theme.COLORS.PRIMARY}
            />
            <ParagraphBold
              marginLeft={5}
              marginTop={10}
              value={name}
              color={theme.COLORS.BLACK}
            />
          </View>

          <View style={style.row1}>
            <ParagraphBold
              marginLeft={10}
              marginTop={10}
              value={label2}
              color={theme.COLORS.PRIMARY}
            />
            <ParagraphBold
              marginTop={10}
              marginLeft={5}
              value={email}
              color={theme.COLORS.BLACK}
            />
          </View>

          <View style={style.row1}>
            <ParagraphBold
              marginLeft={10}
              marginTop={10}
              value={label3}
              color={theme.COLORS.PRIMARY}
            />

            <ParagraphBold
              marginTop={10}
              marginLeft={5}
              value={contact}
              color={theme.COLORS.BLACK}
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
    BLACK: string;
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
      marginTop: 20,
      marginBottom: 10
    },

    headerStyle: {
      alignSelf: 'flex-start',
      marginStart: 20
    },

    imageStyle: {
      height: 100,
      width: 100,
      alignSelf: 'center',
      borderColor: theme.COLORS.BLACK,
      borderWidth: 2,
      borderRadius: 100 / 2
    },

    column: {
      flexDirection: 'column',
      marginTop: 10,
      padding: 5
    },

    row: {
      flexDirection: 'row',
      alignSelf: 'flex-end'
    },

    columnRight: {
      flexDirection: 'column',
      marginTop: 10,
      padding: 5
    },

    imageView: {
      backgroundColor: 'white',
      height: 100,
      width: 100,
      borderRadius: 100 / 2,
      // add shadows for Android only
      // No options for shadow offset, shadow opacity like iOS
      elevation: 10,

      // shadow color
      shadowColor: 'black'
    },

    row1: {
      flexDirection: 'row'
    }
  });
