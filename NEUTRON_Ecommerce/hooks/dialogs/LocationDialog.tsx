import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Dialog, Portal, Text as PaperText, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { changeLanguage } from 'i18next';
import useTheme from '../../theme/hooks/UseTheme';
import useThemedStyles from '../../theme/hooks/UseThemedStyles';
import i18n from 'i18n-js';
import ModalButton from '../../components/atoms/buttons/ModalButton';
import FormGroupWithIcon from '../../components/molecules/FormGroupWithIcon';

interface props {
  isVisible: boolean;
  dismissFunc: any;
}

export default function LocationDialog({ isVisible, dismissFunc }: props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [searchText, setSearchText] = useState('');

  return (
    <Portal>
      <Dialog
        style={style.dialogBackground}
        visible={isVisible}
        onDismiss={dismissFunc}
      >
        <Dialog.Content style={style.content}>
          <FormGroupWithIcon
            name={i18n.t('savedCardsPage.searchLabel')}
            id={'search'}
            fieldvalue={searchText}
            placeholder={i18n.t('savedCardsPage.searchPlaceHolder')}
            fieldstyle={style.textInput}
            onChangeText={(newText: React.SetStateAction<string>) =>
              setSearchText(newText)
            }
            error={undefined}
            iconFirst={'magnify'}
            iconSecond={'magnify'}
            callFunction={undefined}
          />
          <View style={style.locationCard}></View>
          <View style={style.bottonView}>
            <ModalButton
              value={i18n.t('buttons.cancel')}
              callFunction={dismissFunc}
              color={theme.COLORS.PRIMARY}
              marginTop={20}
              marginLeft={30}
            />
            <ModalButton
              value={i18n.t('buttons.save')}
              callFunction={dismissFunc}
              color={theme.COLORS.PRIMARY}
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
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 20
    },
    icon: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.L1,
      color: theme.COLORS.PRIMARY
    },
    locationCard: {
      height: 350
    },
    textInput: {
      backgroundColor: theme.COLORS.WHITE
    }
  });
