import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../../theme/hooks/UseTheme';
import useThemedStyles from '../../theme/hooks/UseThemedStyles';
import { Logo, Padlock } from '../../assets/image';
import CircularsImage from '../atoms/images/CircularsImage';
import HeadLine3 from '../atoms/typographies/HeadLine3';
import { Ionicons } from '@expo/vector-icons';

export interface props {
  loginPage: Boolean;
}

export default function PublicHeader({ loginPage }: props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <>
      {loginPage ? (
        <>
          <CircularsImage
            width={160}
            height={160}
            uri={Logo}
            marginBottom={10}
            marginTop={40}
          />
          <HeadLine3
            value={i18n.t('loginPage.title')}
            color={theme.COLORS.PRIMARY}
          />
        </>
      ) : (
        <>
          <CircularsImage
            width={160}
            height={160}
            uri={Logo}
            marginBottom={10}
            marginTop={40}
          />
          <View style={style.headerText}>
            <CircularsImage width={40} height={40} uri={Padlock} />
            <HeadLine3
              value={i18n.t('forgotPasswordFormCommon.title')}
              color={theme.COLORS.ERROR}
              marginLeft={10}
            />
          </View>
        </>
      )}
    </>
  );
}

const styles = (theme: {
  TYPOGRAPHY: {
    FONT_SIZE: { L3: number };
  };
  COLORS: {
    ERROR: string;
    WHITE: string;
  };
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.COLORS.WHITE,
      alignItems: 'center'
    },
    headerIcon: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.L3,
      color: theme.COLORS.ERROR
    },
    headerText: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 20
    }
  });
