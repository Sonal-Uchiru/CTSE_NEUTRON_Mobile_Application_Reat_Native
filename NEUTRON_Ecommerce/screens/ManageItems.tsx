import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import Paragraph from '../components/atoms/typographies/Paragraph';
import CreditCard from '../components/molecules/CreditCard';
import ModalButton from '../components/atoms/buttons/ModalButton';
import FormGroupWithIcon from '../components/molecules/FormGroupWithIcon';
import { Iphone } from '../assets/image';
import { Ionicons } from '@expo/vector-icons';
import AddItemsForm from '../components/organisms/forms/items/addItems/AddItems';

export default function ManageItems() {
  const [searchText, setSearchText] = useState('');
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const array = [1, 2, 3, 4, 5];

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerStyle}>
        <HeadLine3
          value={i18n.t('addItemsForm.title')}
          color={theme.COLORS.PRIMARY}
        />
        <Paragraph
          value={i18n.t('addItemsForm.subTitle')}
          color={theme.COLORS.BLACK}
        />
      </View>
      <View style={style.row}>
        <Image resizeMode="contain" source={Iphone} style={style.imageStyle} />

        <Ionicons name={'pencil-outline'} style={style.icon} />
      </View>
      <AddItemsForm />
    </SafeAreaView>
  );
}

const styles = (theme: {
  TYPOGRAPHY: any;
  COLORS: {
    WARNING: string;
    WHITE: string;
    PRIMARY: string;
  };
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.COLORS.WHITE,
      alignItems: 'center'
      //   paddingStart: 20
    },
    cardStyle: {
      flexDirection: 'row',
      width: 380,
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
      borderColor: theme.COLORS.PRIMARY,
      backgroundColor: theme.COLORS.WHITE,
      marginTop: 40
    },
    headerStyle: {
      alignSelf: 'flex-start',
      marginStart: 20,
      marginBottom: 20
    },
    textInput: {
      width: '80%',
      marginTop: 25,
      backgroundColor: theme.COLORS.WHITE
    },
    imageStyle: { height: 150, width: 200 },
    editImageStyle: { height: 200, width: 250, marginBottom: 20 },
    column: { flexDirection: 'column' },
    row: { flexDirection: 'row' },
    icon: {
      fontSize: theme.TYPOGRAPHY.FONT_SIZE.M2,
      color: theme.COLORS.PRIMARY
    }
  });
