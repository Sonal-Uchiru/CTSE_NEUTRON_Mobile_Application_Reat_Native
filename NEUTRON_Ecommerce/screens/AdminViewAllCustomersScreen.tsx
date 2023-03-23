import { StyleSheet, SafeAreaView, View, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import UserService from '../api/services/UserService';
import { UserModel } from '../types/users/UserModel';
import { useNavigation } from '@react-navigation/native';
import ErrorSnackbar from '../hooks/snackbar/ErrorSnackbar';

export default function AdminViewAllCustomersScreen() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  const array = [1, 2, 3, 4, 5];
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState<UserModel[]>([]);
  const [copyUsers, setCopyUsers] = useState<UserModel[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const navigation = useNavigation();

  const focusHandler = navigation.addListener('focus', async () => {
    try {
      setLoading(true);
      const resUsers = await UserService.getUserListAsync();

      if (resUsers.length > 0) {
        setUsers(resUsers);
        setCopyUsers(resUsers);
      }
      setLoading(false);
      setError(false);
    } catch (error: any) {
      setError(true);
      setLoading(false);
      setErrorMsg(error.message);
      console.log(error);
    }
  });

  useEffect(() => {
    return focusHandler;
  }, []);

  function fetchCardList() {}

  const searchUsers = (input: any) => {
    if (input.length == 1) return setUsers(copyUsers);

    if (input.length > 3) {
      const content: UserModel[] = copyUsers.filter(
        (i) =>
          i.firstName.toLowerCase().includes(input.toLowerCase()) ||
          i.lastName.toLowerCase().includes(input.toLowerCase())
      );
      setUsers(content);
    }
  };

  return (
    <>
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
          onChangeText={(newText: React.SetStateAction<string>) => {
            setSearchText(newText);
            searchUsers(newText);
          }}
          error={undefined}
          iconFirst={'magnify'}
          iconSecond={'magnify'}
          callFunction={undefined}
        />
      </View>
      {loading ? (
        <View style={style.loading}>
        <ActivityIndicator size="large" />
      </View>
      ) : (
        <HeadLine4 value={''} marginTop={12} marginBottom={0} />
      )}
      <ScrollView>
        {users.length > 0 ?
          users.map((user, index) => {
            return (
              <AdminViewCustomersCard
                key={index}
                label1={'Name :'}
                label2={'Email :'}
                label3={'Contact:'}
                name={`${user.firstName} ${user.lastName}`}
                email={user.email}
                contact={`+94-${user.mobile}`}
                profileUrl={user.profileImageUrl}
              />
            );
          }): (<View><HeadLine4 value={'Customers Not Available'} color={theme.COLORS.PRIMARY}/></View>)}
      </ScrollView>
    </SafeAreaView>
    <ErrorSnackbar
    text={errorMsg}
    iconName={'error'}
    isVisible={error}
    dismissFunc={() => setError(false)}
  />
  </>
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
      alignItems: 'center'

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
    }
  });
