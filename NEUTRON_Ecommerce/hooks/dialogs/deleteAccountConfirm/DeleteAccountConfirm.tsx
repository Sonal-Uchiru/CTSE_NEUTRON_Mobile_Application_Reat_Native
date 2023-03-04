import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Dialog, Portal, Text as PaperText, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import i18n from 'i18n-js';
import { Formik } from 'formik';
import { DeleteAccountConfirmInitialValues } from './DeleteAccountConfirmInitialValues';
import { DeleteAccountConfirmValidationSchema } from './DeleteAccountConfirmValidations';
import useTheme from '../../../theme/hooks/UseTheme';
import useThemedStyles from '../../../theme/hooks/UseThemedStyles';
import ModalButton from '../../../components/atoms/buttons/ModalButton';
import ParagraphBold from '../../../components/atoms/typographies/ParagraphBold';
import FormGroupWithIcon from '../../../components/molecules/FormGroupWithIcon';

interface props {
  isVisible: boolean;
  dismissFunc: any;
}

export default function DeleteAccountConfirmDialog({
  isVisible,
  dismissFunc
}: props) {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [showPassword, setShowPassword] = useState(false);

  function submitFunction(values: { password: string }): any {
    alert(values.password);
  }

  return (
    <Portal>
      <Dialog
        style={style.dialogBackground}
        visible={isVisible}
        onDismiss={dismissFunc}
      >
        <Dialog.Title style={style.title}>
          {i18n.t('deleteAccountConfirmDialog.title')}
        </Dialog.Title>
        <Dialog.Content style={style.content}>
          <PaperText style={style.dialogText} variant="bodyMedium">
            {i18n.t('deleteAccountConfirmDialog.subTitle')}
          </PaperText>
          <View style={style.formView}>
            <Formik
              initialValues={DeleteAccountConfirmInitialValues}
              onSubmit={(values) => submitFunction(values)}
              validationSchema={DeleteAccountConfirmValidationSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
                isSubmitting
              }) => (
                <>
                  <FormGroupWithIcon
                    name={i18n.t('formFields.password')}
                    id={'password'}
                    fieldstyle={style.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('Passowrd')}
                    placeholder={i18n.t(
                      'formFields.passwordPlaceholder'
                    )}
                    fieldvalue={values.password}
                    error={errors.password}
                    iconFirst={'eye'}
                    iconSecond={'eye-off'}
                    hiddenStatus={showPassword}
                    callFunction={() => setShowPassword(!showPassword)}
                    borderColor={
                      errors.password
                        ? theme.COLORS.ERROR
                        : theme.COLORS.PRIMARY
                    }
                  />
                  <View style={style.bottonView}>
                    <ModalButton
                      value={i18n.t('buttons.deleteMyAccount')}
                      callFunction={() => handleSubmit()}
                      color={theme.COLORS.ERROR}
                      marginRight={10}
                    />
                    <ModalButton
                      value={i18n.t('buttons.cancel')}
                      callFunction={dismissFunc}
                      color={theme.COLORS.GREY}
                      marginLeft={10}
                    />
                  </View>
                  <ParagraphBold
                    value={i18n.t('deleteAccountConfirmDialog.informaton')}
                    color={theme.COLORS.ERROR}
                    textCenter={true}
                    marginTop={20}
                  />
                </>
              )}
            </Formik>
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = (theme: {
  COLORS: { ERROR: string; WHITE: string; GREY: string; BLACK: string };
  TYPOGRAPHY: {
    FONT_WEIGHT: any;
    FONT_SIZE: { M1: number; S1: number; L1: number; M2: number; L3: number };
  };
}) =>
  StyleSheet.create({
    title: {
      textAlign: 'center',
      color: theme.COLORS.ERROR,
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
      color: theme.COLORS.BLACK,
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold
    },
    textInput: {
      // height: 40,
      width: '100%',
      backgroundColor: 'white'
    },
    formView: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 15
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
    deteleconfirmbutton: {
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold,
      width: 110,
      backgroundColor: theme.COLORS.ERROR,
      borderRadius: 10
    },
    icon: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.L1,
      color: theme.COLORS.ERROR
    }
  });
