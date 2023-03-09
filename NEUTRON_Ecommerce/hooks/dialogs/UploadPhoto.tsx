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

export default function UploadPhotoDialog({ isVisible, dismissFunc }: props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <Portal>
      <Dialog
        style={style.dialogBackground}
        visible={isVisible}
        onDismiss={dismissFunc}
      >
        <Dialog.Title style={style.title}>
          {i18n.t('uploadPhotoModal.title')}
        </Dialog.Title>
        <Dialog.Content style={style.content}>
          <PaperText style={style.dialogText} variant="bodyMedium">
            {i18n.t('uploadPhotoModal.subTitle')}
          </PaperText>
          <View style={style.bottonView}>
            <ModalButton
              value={i18n.t('uploadPhotoModal.buttonTakePhoto')}
              callFunction={() => alert('yeee')}
              color={theme.COLORS.PRIMARY}
              width={170}
            />
            <ModalButton
              value={i18n.t('uploadPhotoModal.buttonChooseFromLibrary')}
              callFunction={dismissFunc}
              color={theme.COLORS.PRIMARY}
              marginTop={20}
              width={170}
            />
            <ModalButton
              value={i18n.t('buttons.cancel')}
              callFunction={dismissFunc}
              color={theme.COLORS.GREY}
              marginTop={20}
              marginLeft={30}
            />
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = (theme: {
  COLORS: { PRIMARY: string; WHITE: string; GREY: string };
  TYPOGRAPHY: {
    FONT_WEIGHT: any;
    FONT_SIZE: { M1: number; S1: number; L1: number; M2: number; L3: number };
  };
}) =>
  StyleSheet.create({
    title: {
      textAlign: 'center',
      color: theme.COLORS.PRIMARY,
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
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.S1,
      color: theme.COLORS.GREY,
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold
    },
    bottonView: {
      flexDirection: 'column',
      alignSelf: 'center',
      marginTop: 20
    },
    icon: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.L1,
      color: theme.COLORS.PRIMARY
    }
  });
