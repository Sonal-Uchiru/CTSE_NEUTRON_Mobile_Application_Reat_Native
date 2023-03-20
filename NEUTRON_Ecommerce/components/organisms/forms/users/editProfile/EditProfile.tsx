import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import i18n from 'i18n-js';
import FormGroup from '../../../../molecules/FormGroup';
import useThemedStyles from '../../../../../theme/hooks/UseThemedStyles';
import useTheme from '../../../../../theme/hooks/UseTheme';
import ModalButton from '../../../../atoms/buttons/ModalButton';
import FormGroupWithIcon from '../../../../molecules/FormGroupWithIcon';
import { EditProfileInitialValues } from './EditProfileFormInitialValues';
import { IEditProfileFormFields } from './IEditProfileFormFields';
import { EditProfileValidationSchema } from './EditProfileFormValidations';
import { EditProfileModel } from './EditProfileFormModel';
import Information from '../../../../atoms/typographies/Information';
import {
  horizontalScale,
  verticalScale
} from '../../../../../responsive/Metrics';
import Paragraph from '../../../../atoms/typographies/Paragraph';
import Hyperlink from '../../../../atoms/typographies/HyperLink';
import { COLORS } from '../../../../../theme/styles/Colors';
import UserService from '../../../../../api/services/UserService';
import { UpdateUserData } from '../../../../../types/users/UpdateUserData';
import { UserModel } from '../../../../../types/users/UserModel';
import { AuthenticationData } from '../../../../../types/authentication/AuthenticationData';
import UploadPhotoDialog from '../../../../../hooks/dialogs/UploadPhoto';
import { Edit } from '../../../../../assets/image';
import HeadLine3 from '../../../../atoms/typographies/HeadLine3';
import HeadLine2 from '../../../../atoms/typographies/HeadLine2';
import HeadLine4 from '../../../../atoms/typographies/HeadLine4';

export default function EditProfileForm() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [photoDialogVisible, setPhotoDialogVisible] = useState<boolean>(false);
  const hidePhotoDialog = () => setPhotoDialogVisible(false);
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    UserService.loginAsync(
      new AuthenticationData('sonal@gmail.com', 'Sonal123$')
    ).then(() => {
      UserService.getUserAsync()
        .then((res) => {
          setInitailValue(res);
          setUser(res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  const editProfileAsync = async (values: IEditProfileFormFields) => {
    try {
      const editedUser = new UpdateUserData(
        values.firstName,
        values.lastName,
        +values.contact,
        values.address,
        ''
      );

      await UserService.updateUserAsync(editedUser);
    } catch (error) {
      console.log(error);
    }
  };

  const setInitailValue = (user: UserModel) => {
    EditProfileInitialValues.address = user.address;
    EditProfileInitialValues.firstName = user.firstName;
    EditProfileInitialValues.lastName = user.lastName;
    EditProfileInitialValues.contact = user.mobile.toString();
  };

  const captureImage = async () => {};
  return (
    <>
    <View>
      <View style={style.headerStyle}>
        <HeadLine3
          value={i18n.t('editProfilePage.title')}
          color={theme.COLORS.PRIMARY}
        />
        <Paragraph
          value={i18n.t('editProfilePage.subTitle')}
          color={theme.COLORS.PRIMARY}
        />
      </View>
      <View style={style.row1}>
        <View style={style.imageView}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                user?.profileImageUrl ==
                  'https://media.istockphoto.com/id/1028085402/vector/avatar-icon-avatar-flat-symbol-isolated-on-white.jpg?s=170667a&w=0&k=20&c=1F45oPbJyaUtNt1lMwqS2Tg1HXlHsUjAr6H04hdespc=' ||
                user?.profileImageUrl == undefined
                  ? ''
                  : user?.profileImageUrl
            }}
            style={style.imageStyle}
          />
        </View>
      </View>
      <HeadLine2
        value={`${user?.firstName} ${user?.lastName}`}
        color={theme.COLORS.BLACK}
        marginTop={10}
      />

      <HeadLine4
        value={user?.email == undefined ? '' : user?.email}
        color={theme.COLORS.PRIMARY}
        marginTop={2}
      />
      </View>
      <Formik
        initialValues={EditProfileInitialValues}
        onSubmit={(values) => editProfileAsync(values)}
        validationSchema={EditProfileValidationSchema}
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
                  errors.firstName ? style.textInputError2 : style.textInput2
                }
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                placeholder={i18n.t(
                  EditProfileModel.firstName.firstNamePlaceholder
                )}
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
                  errors.lastName ? style.textInputError2 : style.textInput2
                }
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                placeholder={i18n.t(
                  EditProfileModel.lastName.lastNamePlaceholder
                )}
                fieldvalue={values.lastName}
                error={errors.lastName}
                borderColor={
                  errors.lastName ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
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
                placeholder={i18n.t(
                  EditProfileModel.contact.contactPlaceholder
                )}
                fieldvalue={values.contact}
                error={errors.contact}
                borderColor={
                  errors.contact ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />

              <FormGroup
                name={i18n.t('formFields.address')}
                id={'address'}
                fieldstyle={
                  errors.address ? style.textInputError2 : style.textInput2
                }
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                placeholder={i18n.t(
                  EditProfileModel.address.addressPlaceholder
                )}
                fieldvalue={values.address}
                error={errors.address}
                borderColor={
                  errors.address ? theme.COLORS.ERROR : theme.COLORS.PRIMARY
                }
              />
            </View>

            <View style={style.marginView}></View>

            <ModalButton
              width={horizontalScale(140)}
              value={i18n.t('editProfilePage.saveButtonTitle')}
              color={theme.COLORS.PRIMARY}
              marginTop={25}
              marginRight={10}
              marginBottom={20}
              callFunction={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <UploadPhotoDialog
        isVisible={photoDialogVisible}
        dismissFunc={hidePhotoDialog}
        pickImage={captureImage}
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

    imageView: {
      backgroundColor: 'white',
      marginTop: 20,
      height: 250,
      width: 250,
      borderRadius: 250 / 2,
      // add shadows for Android only
      // No options for shadow offset, shadow opacity like iOS
      elevation: 10,

      // shadow color
      shadowColor: 'black'
    },

    textInput2: {
      width: horizontalScale(300),
      marginTop: 25,
      backgroundColor: theme.COLORS.WHITE
    },
    imageIcon: {
      height: 25,
      width: 25,
      marginTop: verticalScale(240),
      marginLeft: -30
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
    headerStyle: {
      alignSelf: 'flex-start',
      marginStart: 20,
      marginTop: 20
    },

    tabView: {
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
      flexDirection: 'row',
    }
  });
