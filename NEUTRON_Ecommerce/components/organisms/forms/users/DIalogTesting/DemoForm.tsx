import { StyleSheet, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { loginValidationSchema } from './DemoFormValidations';
import { Button as ButtonPaper, Snackbar } from 'react-native-paper';

import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import FormGroup from '../../../../molecules/FormGroup';

//@ts-ignore
import en from '../../../../../public/locales/en/translation';
//@ts-ignore
import sin from '../../../../../public/locales/sin/translation';
import SuccessSnackbar from '../../../../../hooks/snackbar/SuccessSnackbar';
import ConfirmDialog from '../../../../../hooks/dialogs/Confirm';
import { DemoFormModel } from './DemoFormModel';
import { RegistrationInitialValues } from './DemoFormInitialValues';
import ErrorDialog from '../../../../../hooks/dialogs/Error';
import DeleteAccountConfirmDialog from '../../../../../hooks/dialogs/deleteAccountConfirm/DeleteAccountConfirm';
import DeleteConfirmDialog from '../../../../../hooks/dialogs/DeleteConfirm';
import ErrorSnackbar from '../../../../../hooks/snackbar/ErrorSnackbar';

export default function DemoForm() {
  const [locale, setLocale] = useState(Localization.locale);
  const [visible, setVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const hideDialog = () => setDialogVisible(false);
  const onToogleDialog = () => setDialogVisible(!dialogVisible);

  function submitFunction() {
    alert('Submitted');
  }

  i18n.fallbacks = true;
  i18n.translations = { en, sin };
  i18n.locale = locale;

  const changeLanguage = () => {
    if (locale == 'sin') {
      setLocale('en');
      return;
    }

    setLocale('sin');
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={RegistrationInitialValues}
          onSubmit={(values) => submitFunction()}
          validationSchema={loginValidationSchema}
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
              <FormGroup
                name={'email'}
                id={'email'}
                fieldstyle={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder={i18n.t('userDemo.emailPlaceholder')}
                fieldvalue={values.email}
                error={errors.email}
              />
              <FormGroup
                name="password"
                id="password"
                fieldstyle={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder={i18n.t('userDemo.passwordPlaceholder')}
                fieldvalue={values.password}
                error={errors.password}
                // secureTextEntry
              />
              <Button
                onPress={() => handleSubmit()}
                title="LOGIN"
                disabled={!isValid}
              />
              <Button onPress={changeLanguage} title="change language" />
            </>
          )}
        </Formik>
        <ButtonPaper onPress={onToggleSnackBar}>
          {visible ? 'Hide' : 'Show'}
        </ButtonPaper>
        <ButtonPaper onPress={onToogleDialog}>
          {dialogVisible ? 'Hide' : 'Show'}
        </ButtonPaper>
      </SafeAreaView>
      <ErrorSnackbar
        text={i18n.t('errorSnackbar.errorDescription')}
        isVisible={visible}
        iconName="checkmark-circle"
        dismissFunc={onDismissSnackBar}
      />
      <DeleteAccountConfirmDialog isVisible={dialogVisible} dismissFunc={hideDialog} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '80%',
    margin: 10,
    backgroundColor: 'white'
  },
  errorText: {
    fontSize: 10,
    color: 'red'
  }
});
