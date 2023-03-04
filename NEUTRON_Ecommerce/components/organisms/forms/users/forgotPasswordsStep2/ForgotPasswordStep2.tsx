import { StyleSheet, Button, SafeAreaView, Image, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { ForgotPasswordValidationSchema } from './ForgotPasswordStep2Validations';
import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import FormGroup from '../../../../molecules/FormGroup';
import Ionicons from '@expo/vector-icons/Ionicons';

//@ts-ignore
import en from '../../../../../public/locales/en/translation';
//@ts-ignore
import sin from '../../../../../public/locales/sin/translation';
import { ForgotPasswordInitialValues } from './ForgotPasswordStep2InitialValues';
import CircularsImage from '../../../../atoms/images/CircularsImage';
import useThemedStyles from '../../../../../theme/hooks/UseThemedStyles';
import useTheme from '../../../../../theme/hooks/UseTheme';
import HeadLine3 from '../../../../atoms/typographies/HeadLine3';
import Information from '../../../../atoms/typographies/Information';
import ModalButton from '../../../../atoms/buttons/ModalButton';
import Hyperlink from '../../../../atoms/typographies/HyperLink';
import { ForgotPasswordFormFields } from './ForgotPasswordFormStep2Fields';
import { Logo, Padlock } from '../../../../../assets/image';

export default function ForgotPasswordStep2() {
  const [locale, setLocale] = useState(Localization.locale);

  const theme = useTheme();
  const style = useThemedStyles(styles);

  function submitFunction(values: ForgotPasswordFormFields) {
    alert(values.code);
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
      <Formik
        initialValues={ForgotPasswordInitialValues}
        onSubmit={(values) => submitFunction(values)}
        validationSchema={ForgotPasswordValidationSchema}
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
              name={i18n.t('forgotPasswordFormStep2.code')}
              id={'code'}
              fieldstyle={style.textInput}
              onChangeText={handleChange('code')}
              onBlur={handleBlur('Code')}
              placeholder={i18n.t('forgotPasswordFormStep2.codePlaceholder')}
              fieldvalue={values.code}
              error={errors.code}
              borderColor={
                errors.code ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <Information
              value={i18n.t('forgotPasswordFormStep2.info')}
              color={theme.COLORS.GREY}
              marginTop={10}
              marginBottom={10}
            />
            <ModalButton
              value={i18n.t('buttons.sendcode')}
              color={theme.COLORS.PRIMARY}
              callFunction={() => handleSubmit()}
              disabled={!isValid}
            />
            <Hyperlink
              value={i18n.t('forgotPasswordFormCommon.goHome')}
              marginTop={15}
            />

            <Button onPress={changeLanguage} title="change language" />
          </>
        )}
      </Formik>
    </>
  );
}

const styles = (theme: {
  COLORS: {
    WHITE: string;
    PRIMARY: string;
    ERROR: string;
  };
  TYPOGRAPHY: {
    FONT_WEIGHT: any;
    FONT_SIZE: { L3: number };
  };
}) =>
  StyleSheet.create({
    textInput: {
      height: 50,
      width: '80%',
      backgroundColor: theme.COLORS.WHITE,
      borderRadius: 10
    }
  });
