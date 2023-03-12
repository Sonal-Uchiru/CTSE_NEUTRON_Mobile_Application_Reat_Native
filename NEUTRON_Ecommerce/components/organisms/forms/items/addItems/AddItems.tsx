import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import { Formik, FormikErrors } from 'formik';
import i18n from 'i18n-js';
import FormGroup from '../../../../molecules/FormGroup';
import useThemedStyles from '../../../../../theme/hooks/UseThemedStyles';
import useTheme from '../../../../../theme/hooks/UseTheme';
import ModalButton from '../../../../atoms/buttons/ModalButton';
import FormGroupWithIcon from '../../../../molecules/FormGroupWithIcon';
import { AddItemsInitialValues } from './AddItemsFormInitialValues';
import { IAddItemsFormFields } from './IAddItemsFormFields';
import { AddItemsValidationSchema } from './AddItemsFormValidations';
import { AddItemsFormModel } from './AddItemsFormModel';
import Information from '../../../../atoms/typographies/Information';
import { Ionicons } from '@expo/vector-icons';
import { Iphone } from '../../../../../assets/image';
import Hyperlink from '../../../../atoms/typographies/HyperLink';
import UploadPhotoDialog from '../../../../../hooks/dialogs/UploadPhoto';
import LocationDialog from '../../../../../hooks/dialogs/LocationDialog';
import FormGroupWithDropDown from '../../../../molecules/FormGroupWithDropDown';

export default function AddItemsForm() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [photoDialogVisible, setPhotoDialogVisible] = useState<boolean>(false);
  const [locationDialogVisible, setLocationDialogVisible] =
    useState<boolean>(false);

  const theme = useTheme();
  const style = useThemedStyles(styles);

  const hidePhotoDialog = () => setPhotoDialogVisible(false);
  const hideLocationDialog = () => setLocationDialogVisible(false);

  const registerAsync = async (values: IAddItemsFormFields) => {};

  let data = [
    {
      value: 'Mobile'
    },
    {
      value: 'Electric'
    },
    {
      value: 'Gaming'
    }
  ];

  function viewSecondStep(errors: FormikErrors<IAddItemsFormFields>) {
    // errors.itemCategory != undefined ||
    // errors.brand != undefined ||
    // errors.itemName != undefined ||
    // errors.quantity != undefined ||
    // errors.unitPrice != undefined
    //   ? setIsHidden(true)
    //   : setIsHidden(false);
    setIsHidden(!isHidden);
  }

  return (
    <>
      <Formik
        initialValues={AddItemsInitialValues}
        onSubmit={(values) => registerAsync(values)}
        validationSchema={AddItemsValidationSchema}
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
            <View style={isHidden ? style.displayFormView : style.hideFormView}>
              <View style={style.row}>
                <Image
                  resizeMode="contain"
                  source={Iphone}
                  style={style.imageStyle}
                />
                <TouchableHighlight onPress={() => setPhotoDialogVisible(true)}>
                  <Ionicons name={'pencil-outline'} style={style.icon} />
                </TouchableHighlight>
              </View>
              <FormGroupWithDropDown
                fieldstyle={
                  errors.itemCategory ? style.dropdownError : style.dropdown
                }
                onChangeText={handleChange('itemCategory')}
                placeholder={i18n.t(
                  AddItemsFormModel.itemCategory.itemCategoryPlaceholder
                )}
                fieldvalue={values.itemCategory}
                error={errors.itemCategory}
                data={data}
              />
              <FormGroup
                name={i18n.t('addItemsForm.itemName')}
                id={'itemName'}
                fieldstyle={
                  errors.itemName ? style.textInputError : style.textInput
                }
                onChangeText={handleChange('itemName')}
                onBlur={handleBlur('itemName')}
                placeholder={i18n.t(
                  AddItemsFormModel.itemName.itemNamePlaceholder
                )}
                fieldvalue={values.itemName}
                error={errors.itemName}
                borderColor={
                  errors.itemName ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />
              <FormGroup
                name={i18n.t('addItemsForm.brand')}
                id={'brand'}
                fieldstyle={
                  errors.brand ? style.textInputError : style.textInput
                }
                onChangeText={handleChange('brand')}
                onBlur={handleBlur('brand')}
                placeholder={i18n.t(AddItemsFormModel.brand.brandPlaceholder)}
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
                placeholder={i18n.t(
                  AddItemsFormModel.quantity.quantityPlaceholder
                )}
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
                placeholder={i18n.t(
                  AddItemsFormModel.unitPrice.unitPricePlaceholder
                )}
                fieldvalue={values.unitPrice}
                error={errors.unitPrice}
                borderColor={
                  errors.unitPrice ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />
              <ModalButton
                value={i18n.t('addItemsForm.next')}
                color={theme.COLORS.PRIMARY}
                callFunction={async () => {
                  await handleSubmit(), await viewSecondStep(errors);
                }}
                marginTop={10}
              />
            </View>
            <View style={isHidden ? style.hideFormView : style.displayFormView}>
              <FormGroup
                name={i18n.t('addItemsForm.skuNumber')}
                id={'skuNumber'}
                fieldstyle={
                  errors.skuNumber ? style.textInputError : style.textInput
                }
                onChangeText={handleChange('skuNumber')}
                onBlur={handleBlur('skuNumber')}
                placeholder={i18n.t(
                  AddItemsFormModel.skuNumber.skuNumberPlaceholder
                )}
                fieldvalue={values.skuNumber}
                error={errors.skuNumber}
                borderColor={
                  errors.skuNumber ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />
              <FormGroup
                name={i18n.t('addItemsForm.description')}
                id={'description'}
                fieldstyle={
                  errors.description ? style.multiLineError : style.multiLine
                }
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                placeholder={i18n.t(
                  AddItemsFormModel.description.descriptionPlaceholder
                )}
                fieldvalue={values.description}
                error={errors.description}
                borderColor={
                  errors.description ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
                multiLine={true}
                noOfLines={5}
              />
              <FormGroup
                name={i18n.t('addItemsForm.itemAddress')}
                id={'itemAddress'}
                fieldstyle={
                  errors.itemAddress ? style.textInputError : style.textInput
                }
                onChangeText={handleChange('itemAddress')}
                onBlur={handleBlur('itemAddress')}
                placeholder={i18n.t(
                  AddItemsFormModel.itemAddress.itemAddressPlaceholder
                )}
                fieldvalue={values.itemAddress}
                error={errors.itemAddress}
                borderColor={
                  errors.itemAddress ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />

              <FormGroup
                name={i18n.t('addItemsForm.longtitude')}
                id={'longtitude'}
                fieldstyle={
                  errors.longtitude ? style.textInputError : style.textInput
                }
                onChangeText={handleChange('longtitude')}
                onBlur={handleBlur('longtitude')}
                placeholder={i18n.t(
                  AddItemsFormModel.longtitude.longtitudePlaceholder
                )}
                fieldvalue={values.longtitude}
                error={errors.longtitude}
                borderColor={
                  errors.longtitude ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />
              <FormGroup
                name={i18n.t('addItemsForm.latitude')}
                id={'latitude'}
                fieldstyle={
                  errors.latitude ? style.textInputError : style.textInput
                }
                onChangeText={handleChange('latitude')}
                onBlur={handleBlur('latitude')}
                placeholder={i18n.t(
                  AddItemsFormModel.latitude.latitudePlaceholder
                )}
                fieldvalue={values.latitude}
                error={errors.latitude}
                borderColor={
                  errors.latitude ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />
              <View style={style.locationText}>
                <TouchableHighlight
                  onPress={() => setLocationDialogVisible(true)}
                >
                  <Hyperlink value={i18n.t('addItemsForm.locationText')} />
                </TouchableHighlight>
              </View>
              <View style={style.row}>
                <ModalButton
                  value={i18n.t('addItemsForm.addItem')}
                  color={theme.COLORS.PRIMARY}
                  callFunction={() => {
                    handleSubmit();
                  }}
                  marginRight={20}
                  marginTop={40}
                />
                <ModalButton
                  value={i18n.t('addItemsForm.back')}
                  color={theme.COLORS.GREY}
                  callFunction={() => {
                    setIsHidden(true);
                  }}
                  marginLeft={20}
                  marginTop={40}
                />
              </View>
            </View>
          </>
        )}
      </Formik>
      <UploadPhotoDialog
        isVisible={photoDialogVisible}
        dismissFunc={hidePhotoDialog}
      />
      <LocationDialog
        isVisible={locationDialogVisible}
        dismissFunc={hideLocationDialog}
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
    BLACK: string;
  };
  TYPOGRAPHY: {
    FONT_WEIGHT: any;
    FONT_SIZE: {
      M2: number;
    };
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
    dropdown: {
      height: 50,
      borderColor: theme.COLORS.BLACK,
      borderWidth: 0.5,
      marginTop: 10,
      borderRadius: 3,
      paddingHorizontal: 8
    },
    dropdownError: {
      height: 50,
      borderColor: theme.COLORS.ERROR,
      marginTop: 10,
      borderWidth: 0.5,
      borderRadius: 3,
      paddingHorizontal: 8
    },
    multiLine: {
      width: '80%',
      height: 130,
      marginTop: 10,
      backgroundColor: theme.COLORS.WHITE
    },
    multiLineError: {
      width: '80%',
      height: 130,
      marginTop: 10,
      backgroundColor: theme.COLORS.WHITE
    },
    displayFormView: {
      display: 'flex',
      width: '100%',
      alignItems: 'center'
    },
    hideFormView: {
      display: 'none',
      width: '100%',
      alignItems: 'center'
    },
    imageStyle: { height: 150, width: 200 },
    editImageStyle: { height: 200, width: 250, marginBottom: 20 },
    column: { flexDirection: 'column' },
    row: { flexDirection: 'row' },
    icon: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.M2,
      color: theme.COLORS.PRIMARY
    },
    locationText: {
      alignSelf: 'flex-start',
      marginTop: 10,
      marginLeft: 40
    }
  });
