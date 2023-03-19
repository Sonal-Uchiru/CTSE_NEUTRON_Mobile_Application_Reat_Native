import { StyleSheet, SafeAreaView, View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import Paragraph from '../components/atoms/typographies/Paragraph';
import CreditCard from '../components/molecules/CreditCard';
import ModalButton from '../components/atoms/buttons/ModalButton';
import FormGroupWithIcon from '../components/molecules/FormGroupWithIcon';
import CartCard from '../components/molecules/CartCard';
import { CreditCardBack, CreditCardFront, Edit, Iphone, NeutronLogo, UserProfile } from '../assets/image';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';
import ViewItemCard from '../components/molecules/ViewItemCard';
import { horizontalScale, verticalScale } from '../responsive/Metrics';
import AdminViewItemCard from '../components/molecules/AdminViewItemCard';
import AdminViewCustomersCard from '../components/molecules/AdminViewCustomersCard';
import AddCardForm from '../components/organisms/forms/cards/addCard/AddCardForm';
import FlipCard from 'react-native-flip-card'
import ProfileForm from '../components/organisms/forms/users/profile/Profile';
import HeadLine2 from '../components/atoms/typographies/HeadLine2';
import EditProfileForm from '../components/organisms/forms/users/editProfile/EditProfile';

export default function EditProfileScreen() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const [photoDialogVisible, setPhotoDialogVisible] = useState<boolean>(false);
  const hidePhotoDialog = () => setPhotoDialogVisible(false);
  return (
    <SafeAreaView style={style.container}>
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
            source={UserProfile}
            style={style.imageStyle}
          /> 
        </View>
        <TouchableHighlight
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
        <HeadLine2
           value={"Christine Tia"}
           color={theme.COLORS.BLACK}
           marginTop={10}/>

        <HeadLine4
           value={"christine@gmail.com"}
           color={theme.COLORS.PRIMARY}
           marginTop={2}
        />   
      <ScrollView>
        <EditProfileForm/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = (theme: {
  COLORS: {
    BLACK: string;
    WHITE: string;
    PRIMARY: string;
  };
}) =>
  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.WHITE,
        alignItems: 'center',
     
        //   paddingStart: 20
      },
      
      headerStyle: {
        alignSelf: 'flex-start',
        marginStart: 20,
        marginTop: 20
      },
      textInput: {
        width: horizontalScale(300),
        marginTop: 20,
        backgroundColor: theme.COLORS.WHITE
      },
     
      column: { flexDirection: 'column' },
      row: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 20,
        marginBottom: 20
      },

      imageStyle: {
        height: 250, 
        width: 250, 
        alignSelf:'center', 
        borderColor: theme.COLORS.BLACK, 
        borderWidth: 2, 
        borderRadius: 250/2,
      },

      imageView:{
        backgroundColor: 'white',
        marginTop: 20,
        height: 250, 
        width: 250, 
        borderRadius: 250/2,
            // add shadows for Android only
            // No options for shadow offset, shadow opacity like iOS
        elevation: 10,
      
        
            // shadow color
        shadowColor: 'black',
      },

      imageIcon: { height: 25, width: 25, marginTop: verticalScale(240), marginLeft: -30},
   
    row1: { flexDirection: 'row' },
  
      
  });
