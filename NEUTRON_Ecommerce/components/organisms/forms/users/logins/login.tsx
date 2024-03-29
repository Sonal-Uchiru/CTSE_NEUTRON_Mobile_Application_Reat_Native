import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { LoginValidationSchema } from './LoginFormValidations';
import i18n from 'i18n-js';
import FormGroup from '../../../../molecules/FormGroup';
import { LoginInitialValues } from './LoginFormInitialValues';
import useThemedStyles from '../../../../../theme/hooks/UseThemedStyles';
import useTheme from '../../../../../theme/hooks/UseTheme';
import ModalButton from '../../../../atoms/buttons/ModalButton';
import Hyperlink from '../../../../atoms/typographies/HyperLink';
import ParagraphBold from '../../../../atoms/typographies/ParagraphBold';
import FormGroupWithIcon from '../../../../molecules/FormGroupWithIcon';
import GoogleButton from '../../../../atoms/buttons/GoogleButton';
import { Iphone, Logo, NeutronLogo } from '../../../../../assets/image';
import { ILoginFormFields } from './ILoginFormFields';
import { AxiosResponse } from 'axios';
import ExpoLocalStorage from '../../../../../authentication/secure_stores/ExpoLocalStorage';
import ErrorDialog from '../../../../../hooks/dialogs/Error';
import ItemRepository from '../../../../../api/repositories/ItemRepository';
import * as ImagePicker from 'expo-image-picker';
import { uploadFile } from '../../../../../utils/firebase/cloud_storage/UploadFile';
import HeadLine2 from '../../../../atoms/typographies/HeadLine2';
import { horizontalScale } from '../../../../../responsive/Metrics';
import Paragraph from '../../../../atoms/typographies/Paragraph';
import UserService from '../../../../../api/services/UserService';
import { AuthenticationData } from '../../../../../types/authentication/AuthenticationData';
import { useNavigation } from '@react-navigation/native';
import { UserModel } from '../../../../../types/users/UserModel';
import ErrorSnackbar from '../../../../../hooks/snackbar/ErrorSnackbar';
import SuccessSnackbar from '../../../../../hooks/snackbar/SuccessSnackbar';

export default function Login() {
  const [isError, setIsError] = useState<boolean>(false);
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [selected, setSelected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  type Nav = {
    navigate: (value: string, metaData?: any) => void;
  };

  const navigation = useNavigation<Nav>();

  const loginAsync = async (values: ILoginFormFields) => {
    try {
      setLoading(true);
      const newlogin = new AuthenticationData(values.email, values.password);
      await UserService.loginAsync(newlogin);
      let user: UserModel = await UserService.getUserAsync();
      setSuccess(true);
      console.log(user);
      console.log('login Success');
      setLoading(false);

      if (user?.role == 0) {
        navigation.navigate('Client', { userRole: user?.role });
      } else {
        navigation.navigate('Admin', { userRole: user?.role });
      }
    } catch (error: any) {
      setError(true);
      setErrorMsg(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <View style={style.tabView}>
        <HeadLine2
          value={i18n.t('loginPage.title')}
          color={theme.COLORS.PRIMARY}
        />
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
          <View style={style.inputView}>
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
              iconFirst={'eye-off'}
              iconSecond={'eye'}
              hiddenStatus={showPassword}
              callFunction={() => setShowPassword(!showPassword)}
              borderColor={
                errors.password ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            {!loading ? (
              <View style={style.buttonView}>
                <ModalButton
                  value={i18n.t('loginPage.login')}
                  color={theme.COLORS.PRIMARY}
                  callFunction={() => handleSubmit()}
                  disabled={!isValid}
                />
              </View>
            ) : (
              <View style={style.loading}>
                <ActivityIndicator size="large" />
              </View>
            )}
            <View style={style.marginView}>
              <Paragraph
                value={i18n.t('loginPage.createAccountLink')}
                marginTop={2}
                marginRight={5}
              />

              <Pressable onPress={() => navigation.navigate('Register')}>
                <Hyperlink value={i18n.t('loginPage.signUp')} marginTop={2} />
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
      <ErrorDialog
        isVisible={isError}
        dismissFunc={() => {
          setIsError(false);
        }}
      />

      <ErrorSnackbar
        text={errorMsg}
        iconName={'error'}
        isVisible={error}
        dismissFunc={() => setError(false)}
      />
      <SuccessSnackbar
        text={'Logged in successfully'}
        iconName={'success'}
        isVisible={success}
        dismissFunc={() => setSuccess(false)}
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
      width: '100%'
    },

    buttonView: {
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 50
    },

    loading: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      left: 0,
      right: 0,
      top: '60%',
      bottom: 0,
      marginBottom: 60,
      marginTop: 50
    },

    errroStyle: {
      alignSelf: 'center',
      backgroundColor: theme.COLORS.WHITE
    },

    text2: {
      color: theme.COLORS.PRIMARY,
      textDecorationLine: 'underline'
    },

    textInput: {
      width: horizontalScale(300),
      marginTop: 25,
      alignSelf: 'center',
      backgroundColor: theme.COLORS.WHITE
    },

    tabView: {
      alignSelf: 'center',
      marginTop: 60
    },

    marginView: {
      marginBottom: 30,
      marginTop: 30,
      alignSelf: 'center',
      flexDirection: 'row'
    }
  });
