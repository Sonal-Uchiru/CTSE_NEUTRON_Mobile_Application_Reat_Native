import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
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
import { Iphone } from '../assets/image';
import HeadLine4 from '../components/atoms/typographies/HeadLine4';
import ViewItemCard from '../components/molecules/ViewItemCard';
import { horizontalScale } from '../responsive/Metrics';
import AdminViewItemCard from '../components/molecules/AdminViewItemCard';
import AdminViewCustomersCard from '../components/molecules/AdminViewCustomersCard';

export default function AdminViewAllCustomersScreen() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const array = [1, 2, 3, 4, 5];
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerStyle}>
        <HeadLine3
          value={i18n.t('adminViewCustomersPage.title')}
          color={theme.COLORS.PRIMARY}
        />
        <Paragraph
        value={i18n.t('adminViewCustomersPage.subTitle')}
        color={theme.COLORS.PRIMARY}
        />
      </View>
      <View>
      <FormGroupWithIcon
            name={i18n.t('adminViewCustomersPage.searchLabel')}
            id={'search'}
            fieldvalue={searchText}
            placeholder={i18n.t('adminViewCustomersPage.searchPlaceHolder')}
            fieldstyle={style.textInput}
            onChangeText={(newText: React.SetStateAction<string>) =>
              setSearchText(newText)
            }
            error={undefined}
            iconFirst={'magnify'}
            iconSecond={'magnify'}
            callFunction={undefined}
          />
      </View>
      <ScrollView>
        {array.map((value, i) => {
          return (
            <AdminViewCustomersCard key={i}
            label1={'Name :'}
            label2={'Email :'}
            label3={'Contact:'}
            name={'Dulan Madushan'} 
            email={'dulan@gmail.com'} 
            contact={'+94-765521245'} 
          />
          );
        })}
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
  });
