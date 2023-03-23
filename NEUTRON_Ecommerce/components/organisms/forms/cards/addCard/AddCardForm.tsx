import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import i18n from 'i18n-js';
import FormGroup from '../../../../molecules/FormGroup';
import useThemedStyles from '../../../../../theme/hooks/UseThemedStyles';
import useTheme from '../../../../../theme/hooks/UseTheme';
import ModalButton from '../../../../atoms/buttons/ModalButton';
import FormGroupWithIcon from '../../../../molecules/FormGroupWithIcon';
import { AddCardInitialValues } from './AddCardFormInitialValues';
import { IAddCardFormFields } from './IAddCardFormFields';
import { AddCardValidationSchema } from './AddCardFormValidations';
import { AddCardModel } from './AddCardFormModel';
import Information from '../../../../atoms/typographies/Information';
import {
  horizontalScale,
  verticalScale
} from '../../../../../responsive/Metrics';
import Paragraph from '../../../../atoms/typographies/Paragraph';
import Hyperlink from '../../../../atoms/typographies/HyperLink';
import { COLORS } from '../../../../../theme/styles/Colors';
import { CreateCardData } from '../../../../../types/cards/CreateCardData';
import CardService from '../../../../../api/services/CardService';
import { useNavigation } from '@react-navigation/native';
import ErrorSnackbar from '../../../../../hooks/snackbar/ErrorSnackbar';
import SuccessSnackbar from '../../../../../hooks/snackbar/SuccessSnackbar';

export default function AddCardForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const theme = useTheme();
  const style = useThemedStyles(styles);


  type Nav = {
    navigate: (value: string, metaData?: any) => void;
  };

  const navigation = useNavigation<Nav>();

  const addCardAsync = async (values: IAddCardFormFields) => {
    try {
      setLoading(true);
      const newCard: CreateCardData = new CreateCardData(
        values.displayName,
        +values.cardNumber,
        values.name,
        values.date
      );

      await CardService.addCardAsync(newCard);
      setSuccess(true);
      setLoading(false);
      navigation.navigate('ViewItems');
    } catch (error: any) {
      setError(true);
      setLoading(false);
      setErrorMsg(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <Formik
        initialValues={AddCardInitialValues}
        onSubmit={(values) => addCardAsync(values)}
        validationSchema={AddCardValidationSchema}
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
                name={i18n.t('formFields.displayName')}
                id={'displayName'}
                fieldstyle={
                  errors.displayName ? style.textInputError2 : style.textInput2
                }
                onChangeText={handleChange('displayName')}
                onBlur={handleBlur('displayName')}
                placeholder={i18n.t(
                  AddCardModel.displayName.displayNamePlaceholder
                )}
                fieldvalue={values.displayName}
                error={errors.displayName}
                borderColor={
                  errors.displayName ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />

              <FormGroup
                name={i18n.t('formFields.cardNumber')}
                id={'cardNumber'}
                fieldstyle={
                  errors.cardNumber ? style.textInputError2 : style.textInput2
                }
                onChangeText={handleChange('cardNumber')}
                onBlur={handleBlur('cardNumber')}
                placeholder={i18n.t(
                  AddCardModel.cardNumber.cardNumberPlaceholder
                )}
                fieldvalue={values.cardNumber}
                error={errors.cardNumber}
                borderColor={
                  errors.cardNumber ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
                keyBoardType="numeric"
              />

              <FormGroup
                name={i18n.t('formFields.name')}
                id={'name'}
                fieldstyle={
                  errors.name ? style.textInputError2 : style.textInput2
                }
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder={i18n.t(AddCardModel.name.namePlaceholder)}
                fieldvalue={values.name}
                error={errors.name}
                borderColor={
                  errors.name ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />

              <FormGroup
                name={i18n.t('formFields.date')}
                id={'date'}
                fieldstyle={
                  errors.date ? style.textInputError2 : style.textInput2
                }
                onChangeText={handleChange('date')}
                onBlur={handleBlur('date')}
                placeholder={i18n.t(AddCardModel.date.datePlaceholder)}
                fieldvalue={values.date}
                error={errors.date}
                borderColor={
                  errors.date ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />
          {loading ? (
            <View style={style.loading}>
              <ActivityIndicator size="large" />
            </View>
           ) : (
              <View style={style.buttonView}>
                <ModalButton
                  value={i18n.t('addCardPage.buttonTitle')}
                  color={theme.COLORS.PRIMARY}
                  width={150}
                  callFunction={() => {
                    handleSubmit();
                  }}
                />
              </View>
                )}
            </View>
         
          </View>
        )}
      </Formik>
      <ErrorSnackbar
        text={errorMsg}
        iconName={'error'}
        isVisible={error}
        dismissFunc={() => setError(false)}
      />
      <SuccessSnackbar
        text={'Card added successfully!'}
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

    buttonView: {
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 40,
      marginBottom: 30
    },

    textInput2: {
      width: horizontalScale(300),
      marginTop: 25,
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
      marginTop: 20,
      alignItems: 'center'
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
