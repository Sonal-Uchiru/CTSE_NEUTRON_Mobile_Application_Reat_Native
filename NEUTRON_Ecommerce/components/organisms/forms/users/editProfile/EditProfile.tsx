import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
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
import { Edit, Logo } from '../../../../../assets/image';
import HeadLine3 from '../../../../atoms/typographies/HeadLine3';
import HeadLine2 from '../../../../atoms/typographies/HeadLine2';
import HeadLine4 from '../../../../atoms/typographies/HeadLine4';
import { Camera, CameraType } from 'expo-camera';
import { uploadFile } from '../../../../../utils/firebase/cloud_storage/UploadFile';
import ErrorSnackbar from '../../../../../hooks/snackbar/ErrorSnackbar';
import SuccessSnackbar from '../../../../../hooks/snackbar/SuccessSnackbar';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function EditProfileForm() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [photoDialogVisible, setPhotoDialogVisible] = useState<boolean>(false);
  const hidePhotoDialog = () => setPhotoDialogVisible(false);
  const [user, setUser] = useState<UserModel>();
  const [profilePicture, setProfilePicture] = useState<string>('');

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraVisible, setCameraVisibility] = useState(true);
  const ref = useRef(null);
  let camera: Camera | null = null;
  const [isDataChanged, setIsDataChanged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const isFocused = useIsFocused();

  type Nav = {
    navigate: (value: string, metaData?: any) => void;
  };

  const navigation = useNavigation<Nav>();

  useEffect(() => {
    getUserDetailsAsync();
  }, [isFocused, isDataChanged]);

  const getUserDetailsAsync = async () => {
    setLoading(true);
    try {
      const res = await UserService.getUserAsync();
      setInitailValue(res);
      setUser(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  const editProfileAsync = async (values: IEditProfileFormFields) => {
    try {
      setLoading(true);
      let imageUrl = '';
      if (profilePicture != '') {
        imageUrl = await UserService.updateUserProfilePictureAsync(
          profilePicture
        );
      }
      const editedUser = new UpdateUserData(
        values.firstName,
        values.lastName,
        +values.contact,
        values.address,
        imageUrl == '' ? user?.profileImageUrl! : imageUrl
      );

      await UserService.updateUserAsync(editedUser);
      setIsDataChanged(!isDataChanged);
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  const setInitailValue = (user: UserModel) => {
    EditProfileInitialValues.address = user.address;
    EditProfileInitialValues.firstName = user.firstName;
    EditProfileInitialValues.lastName = user.lastName;
    EditProfileInitialValues.contact = user.mobile.toString();
  };

  const snapAsync = async () => {
    requestPermission();
    if (!permission?.granted) return;
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setProfilePicture(photo.uri);
  };

  const deleteAccountAsync = async () => {
    try {
      setLoading(true);
      await UserService.deleteUserAsync();
      await UserService.signOut();
      navigation.navigate('Login');
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      {cameraVisible ? (
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
                      user?.profileImageUrl == '' ||
                      user?.profileImageUrl == undefined
                        ? 'https://media.istockphoto.com/id/1028085402/vector/avatar-icon-avatar-flat-symbol-isolated-on-white.jpg?s=170667a&w=0&k=20&c=1F45oPbJyaUtNt1lMwqS2Tg1HXlHsUjAr6H04hdespc='
                        : user?.profileImageUrl
                  }}
                  style={style.imageStyle}
                />
              </View>
              <TouchableHighlight
                style={style.profileImageEditIcon}
                underlayColor={theme.COLORS.WHITE}
                onPress={() => setPhotoDialogVisible(true)}
              >
                <Image
                  resizeMode="contain"
                  source={Edit}
                  style={style.imageIcon}
                />
              </TouchableHighlight>
            </View>
            <View style={style.userHeader}>
              <HeadLine2
                value={
                  user
                    ? `${user?.firstName} ${user?.lastName}`
                    : 'Full name and Email'
                }
                color={theme.COLORS.BLACK}
              />

              <HeadLine4
                value={user?.email == undefined ? '' : user?.email}
                color={theme.COLORS.PRIMARY}
                marginTop={2}
              />
            </View>
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
                      errors.firstName
                        ? style.textInputError2
                        : style.textInput2
                    }
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    placeholder={i18n.t(
                      EditProfileModel.firstName.firstNamePlaceholder
                    )}
                    fieldvalue={values.firstName}
                    error={errors.firstName}
                    borderColor={
                      errors.firstName
                        ? theme.COLORS.ERROR
                        : theme.COLORS.PRIMARY
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
                      errors.lastName
                        ? theme.COLORS.ERROR
                        : theme.COLORS.PRIMARY
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
                    keyBoardType="numeric"
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

                <ModalButton
                  width={horizontalScale(140)}
                  value={i18n.t('editProfilePage.delete')}
                  color={theme.COLORS.ERROR}
                  marginTop={25}
                  marginRight={10}
                  marginBottom={20}
                  callFunction={deleteAccountAsync}
                />
              </View>
            )}
          </Formik>
          <UploadPhotoDialog
            isVisible={photoDialogVisible}
            dismissFunc={hidePhotoDialog}
            pickImage={() => {}}
            captureImage={() => {
              setCameraVisibility(!cameraVisible);
            }}
          />
        </>
      ) : (
        <Camera
          style={style.camera}
          type={type}
          ref={(r) => {
            camera = r;
          }}
        >
          <View style={style.buttonContainer}>
            <TouchableOpacity style={style.button} onPress={snapAsync}>
              <Text style={style.text}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.button}
              onPress={() => setCameraVisibility(!cameraVisible)}
            >
              <Text style={style.text}>Close</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}

      <ErrorSnackbar
        text={'Something went wrong!'}
        iconName={'error'}
        isVisible={error}
        dismissFunc={() => setError(false)}
      />
      <SuccessSnackbar
        text={'Profile updated successfully!'}
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
    camera: {
      width: 400,
      height: 700
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center'
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.COLORS.WHITE
    },

    imageView: {
      backgroundColor: 'white',
      marginTop: 20,
      height: 200,
      width: 200,
      marginLeft: 60,
      borderRadius: 200 / 2,
      // add shadows for Android only
      // No options for shadow offset, shadow opacity like iOS
      elevation: 10,
      // shadow color
      shadowColor: 'black',
      alignSelf: 'center'
    },
    profileImageEditIcon: {
      marginTop: 0
    },
    textInput2: {
      width: horizontalScale(300),
      marginTop: 25,
      backgroundColor: theme.COLORS.WHITE
    },
    imageIcon: {
      height: 25,
      width: 25,
      marginTop: verticalScale(180)
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
    userHeader: {
      alignItems: 'center'
    },
    imageStyle: {
      height: 200,
      width: 200,
      borderRadius: 200 / 2,
      alignSelf: 'center'
      // alignSelf: 'center'
    },
    row1: {
      flexDirection: 'row'
    }
  });
