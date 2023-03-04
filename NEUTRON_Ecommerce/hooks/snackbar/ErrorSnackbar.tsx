import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { Snackbar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import ParagraphBold from '../../components/atoms/typographies/ParagraphBold';
import useTheme from '../../theme/hooks/UseTheme';
import useThemedStyles from '../../theme/hooks/UseThemedStyles';

interface props {
  text: string;
  iconName: any;
  isVisible: boolean;
  dismissFunc: any;
}

export default function ErrorSnackbar({
  text,
  iconName,
  isVisible,
  dismissFunc
}: props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  return (
    <View>
      <Snackbar
        visible={isVisible}
        style={style.successBackground}
        duration={1000}
        onDismiss={dismissFunc}
      >
        <View style={style.iconView}>
          <Ionicons name={'close-circle'} style={style.icon} />
          <ParagraphBold value={text} color={theme.COLORS.WHITE} />
        </View>
      </Snackbar>
    </View>
  );
}

const styles = (theme: {
  COLORS: { ERROR: string; WHITE: string };
  TYPOGRAPHY: {
    FONT_WEIGHT: any;
    FONT_SIZE: { M1: number };
  };
}) =>
  StyleSheet.create({
    successBackground: {
      backgroundColor: theme.COLORS.ERROR
    },
    icon: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.M1,
      color: theme.COLORS.WHITE
    },
    iconView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  });
