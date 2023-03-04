import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { LoginValidationSchema } from './LoginFormValidations';
import i18n from 'i18n-js';
import FormGroup from '../../../../molecules/FormGroup';
import { LoginInitialValues } from './LoginFormInitialValues';
import CircularsImage from '../../../../atoms/images/CircularsImage';
import useThemedStyles from '../../../../../theme/hooks/UseThemedStyles';
import useTheme from '../../../../../theme/hooks/UseTheme';
import HeadLine3 from '../../../../atoms/typographies/HeadLine3';
import ModalButton from '../../../../atoms/buttons/ModalButton';
import Hyperlink from '../../../../atoms/typographies/HyperLink';
import ParagraphBold from '../../../../atoms/typographies/ParagraphBold';
import FormGroupWithIcon from '../../../../molecules/FormGroupWithIcon';
import GoogleButton from '../../../../atoms/buttons/GoogleButton';
import { Logo } from '../../../../../assets/image';
import { ILoginFormFields } from './ILoginFormFields';
import UserAuthenticationApi from '../../../../../api/exclusives/usersApi/UserAuthenticationApi';
import { ILoginResponse } from '../../../../../types/users/ILoginResponse';
import { AxiosResponse } from 'axios';
import ExpoLocalStorage from '../../../../../authentication/secure_stores/ExpoLocalStorage';
import ErrorDialog from '../../../../../hooks/dialogs/Error';

export default function Login() {
  const [isError, setIsError] = useState<boolean>(false);

  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);

  const loginAsync = async (values: ILoginFormFields) => {
    try {
      const response: AxiosResponse = await UserAuthenticationApi.loginAsync(
        values
      );
      const data: ILoginResponse = response.data;

      await ExpoLocalStorage.setTokenToLocalStorageAsync(data.token);
      await ExpoLocalStorage.setRoleToLocalStorageAsync(data.role);
      //navigate to home

      console.log(data);
    } catch (error: any) {
      setIsError(true);
      console.log(error);
    }
  };
  return (
    <>
      <View style={style.tabView}>
        <Text
          style={selected ? style.selectedStyle : style.regulerStyle}
          onPress={() => setSelected(true)}
        >
          {i18n.t('loginPage.login')}{' '}
        </Text>
        <Text
          style={[
            selected ? style.regulerStyle : style.selectedStyle,
            { marginLeft: 20 }
          ]}
          onPress={() => setSelected(false)}
        >
          {i18n.t('loginPage.register')}{' '}
        </Text>
      </View>
      <Formik
        initialValues={LoginInitialValues}
        onSubmit={(values) => loginAsync(values)}
        validationSchema={LoginValidationSchema}
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
              name={i18n.t('formFields.email')}
              id={'password'}
              fieldstyle={style.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('Email')}
              placeholder={i18n.t('formFields.emailPlaceholder')}
              fieldvalue={values.email}
              error={errors.email}
              borderColor={
                errors.email ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <FormGroupWithIcon
              name={i18n.t('formFields.password')}
              id={'password'}
              fieldvalue={values.password}
              placeholder={i18n.t('formFields.passwordPlaceholder')}
              fieldstyle={style.textInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('Password')}
              error={errors.password}
              iconFirst={'eye'}
              iconSecond={'eye-off'}
              hiddenStatus={showPassword}
              callFunction={() => setShowPassword(!showPassword)}
              borderColor={
                errors.password ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <View style={style.hyperlinkText}>
              <Hyperlink
                value={i18n.t('loginPage.forgotPassword')}
                marginTop={5}
              />
            </View>

            <ModalButton
              value={i18n.t('loginPage.login')}
              color={theme.COLORS.PRIMARY}
              callFunction={() => handleSubmit()}
              disabled={!isValid}
            />
            <ParagraphBold
              value={'OR'}
              color={theme.COLORS.GREY}
              marginTop={10}
              marginBottom={10}
            />
            <GoogleButton
              value={i18n.t('loginPage.login')}
              color={theme.COLORS.PRIMARY}
              callFunction={() => handleSubmit()}
              disabled={!isValid}
            />
            <View style={style.marginView}></View>
          </>
        )}
      </Formik>
      <ErrorDialog
        isVisible={isError}
        dismissFunc={() => {
          setIsError(false);
        }}
      />
    </>
  );
}

const styles = (theme: {
  COLORS: {
    WHITE: string;
    PRIMARY: string;
    ERROR: string;
    ACTION: string;
    GREY: string;
  };
  TYPOGRAPHY: {
    FONT_WEIGHT: any;
    FONT_SIZE: { L3: number };
  };
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.COLORS.WHITE,
      alignItems: 'center'
    },
    textInput: {
      width: '80%',
      marginTop: 25,
      backgroundColor: theme.COLORS.WHITE
    },
    tabView: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      marginLeft: 40,
      marginTop: 20
    },
    hyperlinkText: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      marginBottom: 10,
      marginRight: 40
    },
    selectedStyle: {
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.bold,
      textDecorationLine: 'underline',
      textDecorationColor: theme.COLORS.ACTION
    },
    regulerStyle: {
      fontWeight: theme.TYPOGRAPHY.FONT_WEIGHT.normel,
      color: theme.COLORS.GREY
    },
    marginView: {
      marginTop: 10
    }
  });
