import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
import { NeutronLogo } from '../../../../../assets/image';

export default function RegisterForm() {
  const [selected, setSelected] = useState<boolean>(false);

  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showReEnterPassword, setShowReEnterPassword] = useState<boolean>(true);

  const registerAsync = async (values: IRegisterFormFields) => {
    console.log(values);
  };
  return (
    <ScrollView style={style.container}>
      <View style={style.errroStyle}>
      <View style={style.imageView}>
      <Image 
       source={NeutronLogo}
       style={style.image}/>
       </View>
      <View style={style.tabView}>
      </View>
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
          <View style={style.inputView}>
            <FormGroup
              name={i18n.t('formFields.firstName')}
              id={'firstName'}
              fieldstyle={
                errors.firstName ? style.textInputError : style.textInput
              }
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              placeholder={i18n.t(RegisterModel.firstName.firstNamePlaceholder)}
              fieldvalue={values.firstName}
              error={errors.firstName}
              borderColor={
                errors.firstName ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <FormGroup
              name={i18n.t('formFields.lastName')}
              id={'lastName'}
              fieldstyle={
                errors.lastName ? style.textInputError : style.textInput
              }
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              placeholder={i18n.t(RegisterModel.lastName.lastNamePlaceholder)}
              fieldvalue={values.lastName}
              error={errors.lastName}
              borderColor={
                errors.lastName ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <FormGroup
              name={i18n.t('formFields.email')}
              id={'email'}
              fieldstyle={errors.email ? style.textInputError : style.textInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder={i18n.t(RegisterModel.email.emailPlaceholder)}
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
              placeholder={i18n.t(RegisterModel.password.passwordPlaceholder)}
              fieldstyle={
                errors.password ? style.textInputError : style.textInput
              }
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              iconFirst={'eye'}
              iconSecond={'eye-off'}
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
                errors.reEnterPassword ? style.textInputError : style.textInput
              }
              onChangeText={handleChange('reEnterPassword')}
              onBlur={handleBlur('reEnterPassword')}
              error={errors.reEnterPassword}
              iconFirst={'eye'}
              iconSecond={'eye-off'}
              hiddenStatus={showReEnterPassword}
              callFunction={() => setShowReEnterPassword(!showReEnterPassword)}
              borderColor={
                errors.reEnterPassword
                  ? theme.COLORS.ERROR
                  : theme.COLORS.PRIMARY
              }
            />
            <View style={style.marginView}></View>
            <ModalButton
              value={i18n.t('registerPage.registerBtnTitle')}
              color={theme.COLORS.PRIMARY}
              callFunction={() => handleSubmit()}
              disabled={!isValid}
            />
            <Information
              value={i18n.t('registerPage.termsAndConditions')}
              marginTop={5}
            />
            <View style={style.marginView}></View>
          </View>
        )}
      </Formik>
      </View>
    </ScrollView>
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
      alignSelf: 'center',
      width: '100%'
    },
    textInput: {
      width: '100%',
      marginTop: 25,
      alignSelf:'center',
      backgroundColor: theme.COLORS.WHITE
    },
    image:{
      height:190,
      width:220,
      borderWidth: 2,
      borderColor: theme.COLORS.PRIMARY,
      borderRadius: 10,
      resizeMode:'contain',
      alignSelf:"center"
    },

    
    errroStyle:{
      alignSelf:'center'
    },
    
    imageView:{
      marginTop: 60
    },
    textInputError: {
      width: '80%',
      marginTop: 10,
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
