import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import i18n from 'i18n-js';
import FormGroup from '../../../../molecules/FormGroup';
import useThemedStyles from '../../../../../theme/hooks/UseThemedStyles';
import useTheme from '../../../../../theme/hooks/UseTheme';
import ModalButton from '../../../../atoms/buttons/ModalButton';
import FormGroupWithIcon from '../../../../molecules/FormGroupWithIcon';
import { RegisterInitialValues } from './RegisterFormInitialValues';
import { IRegisterFormFields } from './IRegisterFormFields';
import { RegisterValidationSchema } from './RegisterFormValidations';
import { RegisterModel } from './RegisterFormModel';
import Information from '../../../../atoms/typographies/Information';
import {
  horizontalScale,
  verticalScale
} from '../../../../../responsive/Metrics';
import Paragraph from '../../../../atoms/typographies/Paragraph';
import Hyperlink from '../../../../atoms/typographies/HyperLink';
import { COLORS } from '../../../../../theme/styles/Colors';
import { CreateUserData } from '../../../../../types/users/CreateUserData';
import { UserRoles } from '../../../../../types/enums/UserRoles';
import UserService from '../../../../../api/services/UserService';
import { AuthenticationData } from '../../../../../types/authentication/AuthenticationData';
import { useNavigation } from '@react-navigation/native';
import ErrorSnackbar from '../../../../../hooks/snackbar/ErrorSnackbar';
import SuccessSnackbar from '../../../../../hooks/snackbar/SuccessSnackbar';

export default function RegisterForm() {
  const [selected, setSelected] = useState<boolean>(false);

  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showReEnterPassword, setShowReEnterPassword] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const navigation = useNavigation();

  const registerAsync = async (values: IRegisterFormFields) => {
    try {
      setLoading(true);
      if (values.password != values.reEnterPassword) {
        setLoading(false);
        Alert.alert('Password mismatch');
        return;
      }
      const newUser = new CreateUserData(
        values.firstName,
        values.lastName,
        +values.contact,
        values.email,
        '',
        UserRoles.customer
      );

      const newCredentials = new AuthenticationData(
        values.email,
        values.password
      );
      await UserService.registerAsync(newUser, newCredentials);
      setSuccess(true);
      setLoading(false);
      console.log(values);
      navigation.navigate('Login');
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={RegisterInitialValues}
        onSubmit={(values) => registerAsync(values)}
        validationSchema={RegisterValidationSchema}
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
          {loading ? (
            <View style={style.loading}>
              <ActivityIndicator size="large" />
            </View>
           ) : (
          <View style={style.container}>
            <View style={style.tabView}>
              <View style={style.tabView2}>
                <View style={style.tabView3}>
                  <FormGroup
                    name={i18n.t('formFields.firstName')}
                    id={'firstName'}
                    fieldstyle={
                      errors.firstName ? style.textInputError : style.textInput
                    }
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    placeholder={i18n.t(
                      RegisterModel.firstName.firstNamePlaceholder
                    )}
                    fieldvalue={values.firstName}
                    error={errors.firstName}
                    borderColor={
                      errors.firstName
                        ? theme.COLORS.ERROR
                        : theme.COLORS.PRIMARY
                    }
                  />
                </View>
              </View>

              <View style={style.tabView2}>
                <View style={style.tabView3}>
                  <FormGroup
                    name={i18n.t('formFields.lastName')}
                    id={'lastName'}
                    fieldstyle={
                      errors.lastName ? style.textInputError : style.textInput
                    }
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    placeholder={i18n.t(
                      RegisterModel.lastName.lastNamePlaceholder
                    )}
                    fieldvalue={values.lastName}
                    error={errors.lastName}
                    borderColor={
                      errors.lastName
                        ? theme.COLORS.ERROR
                        : theme.COLORS.PRIMARY
                    }
                  />
                </View>
              </View>
            </View>

            <FormGroup
              name={i18n.t('formFields.email')}
              id={'email'}
              fieldstyle={
                errors.email ? style.textInputError2 : style.textInput2
              }
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder={i18n.t(RegisterModel.email.emailPlaceholder)}
              fieldvalue={values.email}
              error={errors.email}
              borderColor={
                errors.email ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />

            <FormGroup
              name={i18n.t('formFields.contact')}
              id={'contact'}
              fieldstyle={
                errors.contact ? style.textInputError2 : style.textInput2
              }
              onChangeText={handleChange('contact')}
              onBlur={handleBlur('contact')}
              placeholder={i18n.t(RegisterModel.contact.contactPlaceholder)}
              fieldvalue={values.contact}
              error={errors.contact}
              borderColor={
                errors.contact ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />

            <FormGroupWithIcon
              name={i18n.t('formFields.password')}
              id={'password'}
              fieldvalue={values.password}
              placeholder={i18n.t(RegisterModel.password.passwordPlaceholder)}
              fieldstyle={
                errors.password ? style.textInputError2 : style.textInput2
              }
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              iconFirst={'eye-off'}
              iconSecond={'eye'}
              hiddenStatus={showPassword}
              callFunction={() => setShowPassword(!showPassword)}
              borderColor={
                errors.password ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <FormGroupWithIcon
              name={i18n.t('formFields.reEnterPassword')}
              id={'reEnterPassword'}
              fieldvalue={values.reEnterPassword}
              placeholder={i18n.t(
                RegisterModel.reEnterPassword.reEnterPasswordPlaceholder
              )}
              fieldstyle={
                errors.reEnterPassword
                  ? style.textInputError2
                  : style.textInput2
              }
              onChangeText={handleChange('reEnterPassword')}
              onBlur={handleBlur('reEnterPassword')}
              error={errors.reEnterPassword}
              iconFirst={'eye-off'}
              iconSecond={'eye'}
              hiddenStatus={showReEnterPassword}
              callFunction={() => setShowReEnterPassword(!showReEnterPassword)}
              borderColor={
                errors.reEnterPassword
                  ? theme.COLORS.ERROR
                  : theme.COLORS.PRIMARY
              }
            />
            <View style={style.marginView}></View>

            <View style={style.termsView}>
              <Pressable onPress={() => navigation.navigate('Terms')}>
                <Hyperlink value={i18n.t('registerPage.terms')} marginTop={5} />
              </Pressable>
            </View>

            <ModalButton
              width={horizontalScale(150)}
              value={i18n.t('registerPage.registerBtnTitle')}
              color={theme.COLORS.PRIMARY}
              callFunction={() => handleSubmit()}
              disabled={!isValid}
              marginTop={25}
            />

            <View style={style.row1}>
              <Paragraph
                value={i18n.t('registerPage.alreadyHaveAccount')}
                marginTop={10}
                marginRight={5}
              />

              <Pressable onPress={() => navigation.navigate('Login')}>
                <Hyperlink
                  value={i18n.t('registerPage.loginHere')}
                  marginTop={10}
                />
              </Pressable>
            </View>

            <View style={style.marginView}></View>

            <Pressable onPress={() => navigation.navigate('Login')}>
              <Hyperlink
                value={i18n.t('registerPage.back')}
                color={COLORS.PRIMARY}
                marginTop={10}
              />
            </Pressable>
           
          </View>
           )}
          </>
        )}
      </Formik>
      <ErrorSnackbar
        text={'Something went wrong!'}
        iconName={'error'}
        isVisible={error}
        dismissFunc={() => setError(false)}
      />
      <SuccessSnackbar
        text={'User added successfully!'}
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
      alignItems: 'center',
      backgroundColor: theme.COLORS.WHITE
    },
    textInput: {
      width: horizontalScale(130),
      marginTop: 25,
      backgroundColor: theme.COLORS.WHITE
    },

    textInput2: {
      width: horizontalScale(300),
      marginTop: 25,
      backgroundColor: theme.COLORS.WHITE
    },

    textInputError: {
      width: horizontalScale(130),
      marginTop: 10,
      backgroundColor: theme.COLORS.WHITE
    },

    textInputError2: {
      width: horizontalScale(300),
      marginTop: 10,
      backgroundColor: theme.COLORS.WHITE
    },

    termsView: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      marginRight: horizontalScale(20),
      marginTop: 10
    },

    tabView: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems: 'center'
    },

    tabView2: {
      flexDirection: 'column',
      marginLeft: 20,
      marginRight: 20
    },

    hyperlinkText: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      marginBottom: 10,
      marginRight: 40
    },

    marginView: {
      marginTop: 2
    },

    row1: {
      flexDirection: 'row'
    }
  });
