import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import i18n from 'i18n-js';
import Login from '../components/organisms/forms/users/logins/login';
import PublicHeader from '../components/molecules/PublicHeader';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import RegisterForm from '../components/organisms/forms/users/registers/RegisterForm';

export default function UserAccessScreen() {
  const theme = useTheme();
  const style = useThemedStyles(styles);
  
//   const [tabChange, setTabChange] = useState<boolean>(false);
//   onTabChange={()=> setTabChange(!tabChange)}

  return (
    <SafeAreaView style={style.container}>
      <PublicHeader loginPage={true} />
      {/* <Login /> */}
      <RegisterForm/>
    </SafeAreaView>
  );
}

const styles = (theme: {
  COLORS: {
    WHITE: string;
  };
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.COLORS.WHITE,
      alignItems: 'center'
    }
  });
