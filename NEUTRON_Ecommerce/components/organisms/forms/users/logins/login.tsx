import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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


export default function Login() {
  const [isError, setIsError] = useState<boolean>(false);

  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);

  const loginAsync = async (values: ILoginFormFields) => {
    //await ItemRepository.AddItemAsync();
    // try {
    //   const response: AxiosResponse = await UserAuthenticationApi.loginAsync(
    //     values
    //   );
    //   const data: ILoginResponse = response.data;
    // await ExpoLocalStorage.setTokenToLocalStorageAsync(data.token);
    //   await ExpoLocalStorage.setRoleToLocalStorageAsync(data.role);
    //   //navigate to home
    //   console.log(data);
    // } catch (error: any) {
    //   setIsError(true);
    //   console.log(error);
    // }
  };

  const test = async () => {
    try {
      // await UserService.registerAsync(
      //   new CreateUserData(
      //     'sonal',
      //     'jayawardana',
      //     766419220,
      //     'sonal123@gmail.com',
      //     'athurugiriya',
      //     0
      //   ),
      //   new AuthenticationData('sonal123@gmail.com', 'Sonal123$')
      // );
     // await UserService.loginAsync(new AuthenticationData('sonal@gmail.com', 'Sonal123$'));
      //await UserService.deleteUserAsync()
      // await UserService.updateUserAsync(new UpdateUserData('hima', 'jayakody', 394,'athu', ''));
     //await CardService.addCardAsync(new CreateCardData('sonal',789,'sona', new Date()));
     
     //console.log(await CardService.getCardListAsync());

      //await ItemService.addItemAsync(new CreateItemData('test1','mobile',10,45,'apple','nice','athu',34,34,'dkfj57','rgg'));

     // console.log(await ItemService.deleteItemAsync('LRezDJy27gOkG1hU333E'));
      //await CartItemService.addCartItemAsync(new CreateCartItemData('13qIJqEC8MvxcZWNSnPK',10));
     // console.log(await CartItemService.isCartItemAvailableAsync('13qIJqEC8MvxcZWNSnPi'));
    } catch (error) {
      console.log(error);
    }
  };

  const [image, setImage] = useState<any>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    //   selectionLimit: 1
    // });

    // console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    //   //uploadFile(result.assets[0],'users','sonal-image');
    //   const u = await ItemService.updateItemImageAsync('apple',result.assets[0]);
    //   await ItemService.updateItemAsync(
    //     new UpdateItemData('13qIJqEC8MvxcZWNSnPK','samsung','mobile',10,20,'apple','dd','ddd',34,45,'df89',u)
    //   );
    // }
  };

  return (
   
      <>
      <View style={style.tabView}>
        <HeadLine2 value={i18n.t('loginPage.title')} color={theme.COLORS.PRIMARY}/>
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
            <View style={style.buttonView}>
            <ModalButton
              value={i18n.t('loginPage.login')}
              color={theme.COLORS.PRIMARY}
              callFunction={() => handleSubmit()}
              disabled={!isValid}
            />
            </View> 
            <View style={style.marginView}>
            <Paragraph 
            value={i18n.t('loginPage.createAccountLink')}
            marginTop={2}
            marginRight={5}
            />

            <Hyperlink
            value={i18n.t('loginPage.signUp')}
            marginTop={2}
            />
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

    buttonView:{
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 50
    },

    errroStyle:{
      alignSelf:'center',
      backgroundColor: theme.COLORS.WHITE,
    },

    text2:{
      color: theme.COLORS.PRIMARY,
      textDecorationLine:'underline'
    },

    textInput: {
      width: horizontalScale(300),
      marginTop: 25,
      alignSelf:'center',
      backgroundColor: theme.COLORS.WHITE,
  
    },
    
    tabView: {
     alignSelf:'center',
      marginTop: 60
    },
   
    marginView: {
      marginBottom: 30,
      marginTop: 30,
      alignSelf:'center',
      flexDirection:'row'

    }
  });
