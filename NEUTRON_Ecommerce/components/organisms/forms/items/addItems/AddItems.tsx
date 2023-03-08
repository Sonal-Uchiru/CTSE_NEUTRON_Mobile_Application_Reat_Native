import { StyleSheet, Text, View } from 'react-native';
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

export default function AddItemsForm() {
  const [selected, setSelected] = useState<boolean>(false);

  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showReEnterPassword, setShowReEnterPassword] = useState<boolean>(true);

  const registerAsync = async (values: IRegisterFormFields) => {
    console.log(values);
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
            <FormGroup
              name={i18n.t('addItemsForm.itemCategory')}
              id={'itemCategory'}
              fieldstyle={
                errors.itemCategory ? style.textInputError : style.textInput
              }
              onChangeText={handleChange('itemCategory')}
              onBlur={handleBlur('itemCategory')}
              placeholder={i18n.t(
                RegisterModel.itemCategory.itemCategoryPlaceholder
              )}
              fieldvalue={values.itemCategory}
              error={errors.itemCategory}
              borderColor={
                errors.itemCategory ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <FormGroup
              name={i18n.t('addItemsForm.itemName')}
              id={'itemName'}
              fieldstyle={
                errors.itemName ? style.textInputError : style.textInput
              }
              onChangeText={handleChange('itemName')}
              onBlur={handleBlur('itemName')}
              placeholder={i18n.t(RegisterModel.itemName.itemNamePlaceholder)}
              fieldvalue={values.itemName}
              error={errors.itemName}
              borderColor={
                errors.itemName ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <FormGroup
              name={i18n.t('addItemsForm.brand')}
              id={'brand'}
              fieldstyle={errors.brand ? style.textInputError : style.textInput}
              onChangeText={handleChange('brand')}
              onBlur={handleBlur('brand')}
              placeholder={i18n.t(RegisterModel.brand.brandPlaceholder)}
              fieldvalue={values.brand}
              error={errors.brand}
              borderColor={
                errors.brand ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <FormGroup
              name={i18n.t('addItemsForm.quantity')}
              id={'quantity'}
              fieldstyle={
                errors.quantity ? style.textInputError : style.textInput
              }
              onChangeText={handleChange('quantity')}
              onBlur={handleBlur('quantity')}
              placeholder={i18n.t(RegisterModel.quantity.quantityPlaceholder)}
              fieldvalue={values.quantity}
              error={errors.quantity}
              borderColor={
                errors.quantity ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <FormGroup
              name={i18n.t('addItemsForm.unitPrice')}
              id={'unitPrice'}
              fieldstyle={
                errors.unitPrice ? style.textInputError : style.textInput
              }
              onChangeText={handleChange('unitPrice')}
              onBlur={handleBlur('unitPrice')}
              placeholder={i18n.t(RegisterModel.unitPrice.unitPricePlaceholder)}
              fieldvalue={values.unitPrice}
              error={errors.unitPrice}
              borderColor={
                errors.unitPrice ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
              }
            />
            <ModalButton
              value={i18n.t('addItemsForm.next')}
              color={theme.COLORS.PRIMARY}
              callFunction={() => handleSubmit()}
              disabled={!isValid}
              marginTop={10}
            />
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
      marginTop: 10,
      backgroundColor: theme.COLORS.WHITE
    },
    textInputError: {
      width: '80%',
      marginTop: 10,
      backgroundColor: theme.COLORS.WHITE
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
