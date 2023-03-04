import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Dialog, Portal, Text as PaperText, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { changeLanguage } from 'i18next';
import useTheme from '../../theme/hooks/UseTheme';
import useThemedStyles from '../../theme/hooks/UseThemedStyles';
import i18n from 'i18n-js';
import ModalButton from '../../components/atoms/buttons/ModalButton';

interface props {
  isVisible: boolean;
  dismissFunc: any;
}

export default function ConfirmDialog({ isVisible, dismissFunc }: props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <Portal>
      <Dialog
        style={style.dialogBackground}
        visible={isVisible}
        onDismiss={dismissFunc}
      >
        <Dialog.Icon
          icon={() => <Ionicons name={'alert-circle'} style={style.icon} />}
        />
        <Dialog.Title style={style.title}>
          {i18n.t('confirmDialog.confirm')}
        </Dialog.Title>
        <Dialog.Content style={style.content}>
          <PaperText style={style.dialogText} variant="bodyMedium">
            {i18n.t('confirmDialog.confirmDescription')}
          </PaperText>
          <View style={style.bottonView}>
            <ModalButton
              value={i18n.t('buttons.save')}
              callFunction={() => alert('yeee')}
              color={theme.COLORS.WARNING}
            />
            <ModalButton
              value={i18n.t('buttons.cancel')}
              callFunction={dismissFunc}
              color={theme.COLORS.GREY}
            />
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = (theme: {
  COLORS: { WARNING: string; WHITE: string; GREY: string };
  TYPOGRAPHY: {
    FONT_WEIGHT: any;
    FONT_SIZE: { M1: number; S1: number; L1: number; M2: number; L3: number };
  };
}) =>
  StyleSheet.create({
    title: {
      textAlign: 'center',
      color: theme.COLORS.WARNING,
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold,
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.M1
    },
    dialogBackground: {
      backgroundColor: theme.COLORS.WHITE
    },
    content: {
      alignContent: 'center'
    },
    dialogText: {
      textAlign: 'center',
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.M2,
      color: theme.COLORS.WARNING,
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold
    },
    bottonView: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20
    },
    cancelButton: {
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold,
      marginLeft: 10,
      width: 110,
      backgroundColor: theme.COLORS.GREY,
      borderRadius: 10
    },
    saveButton: {
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold,
      width: 110,
      backgroundColor: theme.COLORS.WARNING,
      borderRadius: 10
    },
    icon: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.L1,
      color: theme.COLORS.WARNING
    }
  });
