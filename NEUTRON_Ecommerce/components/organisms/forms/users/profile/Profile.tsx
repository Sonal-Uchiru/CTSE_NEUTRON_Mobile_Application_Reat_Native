import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import i18n from 'i18n-js';
import FormGroup from '../../../../molecules/FormGroup';
import useThemedStyles from '../../../../../theme/hooks/UseThemedStyles';
import useTheme from '../../../../../theme/hooks/UseTheme';
import ModalButton from '../../../../atoms/buttons/ModalButton';
import FormGroupWithIcon from '../../../../molecules/FormGroupWithIcon';
import { ProfileInitialValues } from './ProfileFormInitialValues';
import { IProfileFormFields } from './IProfileFormFields';
import { ProfileValidationSchema } from './ProfileFormValidations';
import { ProfileModel } from './ProfileFormModel';
import Information from '../../../../atoms/typographies/Information';
import { horizontalScale, verticalScale } from '../../../../../responsive/Metrics';
import Paragraph from '../../../../atoms/typographies/Paragraph';
import Hyperlink from '../../../../atoms/typographies/HyperLink';
import { COLORS } from '../../../../../theme/styles/Colors';

export default function RegisterForm() {
  const [selected, setSelected] = useState<boolean>(false);

  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showReEnterPassword, setShowReEnterPassword] = useState<boolean>(true);

  const registerAsync = async (values: IProfileFormFields) => {
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={ProfileInitialValues}
        onSubmit={(values) => registerAsync(values)}
        validationSchema={ProfileValidationSchema}
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
          <View style={style.container}>
          <View style={style.tabView}>
         
            <FormGroup
              name={i18n.t('formFields.firstName')}
              id={'firstName'}
              fieldstyle={
                errors.firstName ? style.textInputError : style.textInput
              }
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              placeholder={i18n.t(ProfileModel.firstName.firstNamePlaceholder)}
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
              placeholder={i18n.t(ProfileModel.lastName.lastNamePlaceholder)}
              fieldvalue={values.lastName}
              error={errors.lastName}
              borderColor={
                errors.lastName ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
        
            

              <FormGroup
              name={i18n.t('formFields.contact')}
              id={'contact'}
              fieldstyle={errors.contact ? style.textInputError2 : style.textInput2}
              onChangeText={handleChange('contact')}
              onBlur={handleBlur('contact')}
              placeholder={i18n.t(ProfileModel.contact.contactPlaceholder)}
              fieldvalue={values.contact}
              error={errors.contact}
              borderColor={
                errors.contact ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
          
            <FormGroup
              name={i18n.t('formFields.email')}
              id={'address'}
              fieldstyle={errors.address ? style.textInputError2 : style.textInput2}
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              placeholder={i18n.t(ProfileModel.address.addressPlaceholder)}
              fieldvalue={values.address}
              error={errors.address}
              borderColor={
                errors.address ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />

           
</View> 

            <View style={style.marginView}></View>

            <View style={style.termsView}>
            <Hyperlink
            value={i18n.t('registerPage.terms')}
            marginTop={5}
            />
            </View>
            

            <ModalButton
              width={horizontalScale(150)}
              value={i18n.t('registerPage.registerBtnTitle')}
              color={theme.COLORS.PRIMARY}
              callFunction={() => handleSubmit()}
              disabled={!isValid}
              marginTop={25}
            />

          
            {/* <Information
              value={i18n.t('registerPage.termsAndConditions')}
              marginTop={5}
            /> */}
            <View style={style.row1}>
            <Paragraph 
            value={i18n.t('registerPage.alreadyHaveAccount')}
            marginTop={10}
            marginRight={5}
            />

            <Hyperlink
            value={i18n.t('registerPage.loginHere')}
            marginTop={10}
            />
            </View>
            
            <View style={style.marginView}></View>

            <Hyperlink
            value={i18n.t('registerPage.back')}
            color={COLORS.PRIMARY}
            marginTop={10}
            />
          </View>
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
      flex:1,
      alignItems:'center',
      backgroundColor: theme.COLORS.WHITE,
    
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

    termsView:{
      alignItems:'flex-end',
      justifyContent:'flex-end',
      alignSelf:'flex-end',
      marginRight: horizontalScale(20),
      marginTop: 10
    },

    tabView: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems:'center'
    
    },

    tabView2:{
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
      flexDirection:'row'
    }
  });