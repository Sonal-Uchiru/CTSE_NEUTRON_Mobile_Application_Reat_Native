import { StyleSheet, SafeAreaView, View, ScrollView, Text, Image } from 'react-native';
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
import { CreditCardBack, CreditCardFront, Iphone, NeutronLogo } from '../assets/image';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';
import ViewItemCard from '../components/molecules/ViewItemCard';
import { horizontalScale, verticalScale } from '../responsive/Metrics';
import AdminViewItemCard from '../components/molecules/AdminViewItemCard';
import AdminViewCustomersCard from '../components/molecules/AdminViewCustomersCard';
import AddCardForm from '../components/organisms/forms/cards/addCard/AddCardForm';
import FlipCard from 'react-native-flip-card'
import EditCardForm from '../components/organisms/forms/cards/editCard/EditCardForm';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function EditCardScreen() {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerStyle}>
        <HeadLine3
          value={i18n.t('editCardPage.title')}
          color={theme.COLORS.PRIMARY}
        />
        <Paragraph
        value={i18n.t('editCardPage.subTitle')}
        color={theme.COLORS.PRIMARY}
        />
      </View>

      <View style={style.cardView}>
        <FlipCard 
        style={style.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        >
        <View style={style.face}>
           <Image 
              source={CreditCardFront}
              style={style.image}/>
        </View>
        <View style={style.back}>
        <Image 
              source={CreditCardBack}
              style={style.image}/>
        </View>
        </FlipCard>
     </View>
      <ScrollView>
        <EditCardForm/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = (theme: {
  COLORS: {
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

      image:{
        height:verticalScale(200),
        width:horizontalScale(260),
        resizeMode:'cover',
        alignSelf:"center"
      },

      card:{
        justifyContent: 'center',
        alignSelf:'center',
      },

      cardView:{
        alignSelf:'center',
        width: horizontalScale(360),
        height: verticalScale(200),
        marginTop: 20
      }
      
  });
