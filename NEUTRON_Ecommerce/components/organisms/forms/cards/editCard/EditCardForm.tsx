import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import i18n from 'i18n-js';
import FormGroup from '../../../../molecules/FormGroup';
import useThemedStyles from '../../../../../theme/hooks/UseThemedStyles';
import useTheme from '../../../../../theme/hooks/UseTheme';
import ModalButton from '../../../../atoms/buttons/ModalButton';
import FormGroupWithIcon from '../../../../molecules/FormGroupWithIcon';
import { EditCardInitialValues } from './EditCardFormInitialValues';
import { IEditCardFormFields } from './IEditCardFormFields';
import { EditCardValidationSchema } from './EditCardFormValidations';
import { EditCardModel } from './EditCardFormModel';
import Information from '../../../../atoms/typographies/Information';
import {
  horizontalScale,
  verticalScale
} from '../../../../../responsive/Metrics';
import Paragraph from '../../../../atoms/typographies/Paragraph';
import Hyperlink from '../../../../atoms/typographies/HyperLink';
import { COLORS } from '../../../../../theme/styles/Colors';
import { UpdateCardData } from '../../../../../types/cards/UpdateCardData';
import CardService from '../../../../../api/services/CardService';
import { CardModel } from '../../../../../types/cards/CardModel';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function EditCardForm() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [card, setCard] = useState<CardModel>();
  const navigation = useNavigation();
  const route = useRoute();
  const docId = route.params?.docId;

  useEffect(() => {
    (async () => {
      try {
        const resCard = await CardService.getCardByIdAsync(docId);
        await setValues(resCard);
        await setCard(resCard);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const editCardAsync = async (values: IEditCardFormFields) => {
    try {
      const editedCard: UpdateCardData = new UpdateCardData(
        values.displayName,
        +values.cardNumber,
        values.name,
        values.date
      );

      await CardService.updateCardAsync(card?.docId!, editedCard);

      navigation.navigate('ViewItems');
    } catch (error) {
      console.log(error);
    }
  };

  const setValues = async (card: CardModel) => {
    EditCardInitialValues.displayName = card.displayName;
    EditCardInitialValues.cardNumber = card.cardNumber.toString();
    EditCardInitialValues.date = String(card.expiryDate);
    EditCardInitialValues.name = card.nameOnCard;
  };

  const removeCardAsync = () => {
    try {
      CardService.deleteCardAsync(card?.docId!);
      navigation.navigate('ViewItems');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Formik
        initialValues={EditCardInitialValues}
        onSubmit={(values, { resetForm }) => editCardAsync(values)}
        validationSchema={EditCardValidationSchema}
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
                  EditCardModel.displayName.displayNamePlaceholder
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
                  EditCardModel.cardNumber.cardNumberPlaceholder
                )}
                fieldvalue={values.cardNumber}
                error={errors.cardNumber}
                borderColor={
                  errors.cardNumber ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />

              <FormGroup
                name={i18n.t('formFields.name')}
                id={'name'}
                fieldstyle={
                  errors.name ? style.textInputError2 : style.textInput2
                }
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder={i18n.t(EditCardModel.name.namePlaceholder)}
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
                placeholder={i18n.t(EditCardModel.date.datePlaceholder)}
                fieldvalue={values.date}
                error={errors.date}
                borderColor={
                  errors.date ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />

              <View style={style.buttonView}>
                <View style={style.row1}>
                  <ModalButton
                    value={i18n.t('editCardPage.cancelButtonTitle')}
                    color={theme.COLORS.DARK_GREY}
                    width={130}
                    marginRight={15}
                    callFunction={() => navigation.goBack()}
                  />
                  <ModalButton
                    value={i18n.t('editCardPage.saveButtonTitle')}
                    color={theme.COLORS.PRIMARY}
                    width={130}
                    callFunction={handleSubmit}
                    marginLeft={15}
                  />
                </View>

                <ModalButton
                  value={i18n.t('editCardPage.deleteButtonTitle')}
                  color={theme.COLORS.ERROR}
                  width={130}
                  marginTop={20}
                  callFunction={removeCardAsync}
                />
              </View>
            </View>
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
