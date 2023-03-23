import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import useTheme from '../theme/hooks/UseTheme';
import useThemedStyles from '../theme/hooks/UseThemedStyles';
import HeadLine3 from '../components/atoms/typographies/HeadLine3';
import * as Localization from 'expo-localization';
import Paragraph from '../components/atoms/typographies/Paragraph';
import { AboutUs, NeutronLogo } from '../assets/image';
import Hyperlink from '../components/atoms/typographies/HyperLink';
import Login from '../components/organisms/forms/users/logins/login';
import RegisterForm from '../components/organisms/forms/users/registers/RegisterForm';

export default function UserRegisterScreen() {
  const [locale, setLocale] = useState(Localization.locale);

  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <SafeAreaView style={style.container}>
           
      <View style={style.imageView}>
          <Image
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/ctsereactnativeneutron.appspot.com/o/logo.png?alt=media&token=135f327b-5fdd-4f40-87b3-914c84251948'
            }}
            style={style.image}
          />
        </View>
        <ScrollView>
        <View style={style.formView}>
          <RegisterForm />
        </View>
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
      justifyContent: 'center'
    },
    image: {
      height: 190,
      width: 220,
     
      marginBottom: 20,
      borderWidth: 2,
      borderColor: theme.COLORS.PRIMARY,
      borderRadius: 10,
      resizeMode: 'contain',
      alignSelf: 'center'
    },

    imageView: {
      marginTop: 90
    },

    formView: {
      alignItems: 'center',
      marginBottom: 20
    }
  });
