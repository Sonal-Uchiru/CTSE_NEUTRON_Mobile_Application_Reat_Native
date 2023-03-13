import { StyleSheet, SafeAreaView, Text, Image, View, ScrollView } from 'react-native';
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

export default function LoginScreen() {
  const [locale, setLocale] = useState(Localization.locale);
 
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const changeLanguage = () => {
    if (locale == 'sin') {
      setLocale('en');
      return;
    }

    setLocale('sin');
  };

  return (
    <SafeAreaView style={style.container}>
       <ScrollView>
        <View style={style.imageView}>
      <Image 
       source={NeutronLogo}
       style={style.image}/>
       </View>
       <Login/>
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
      alignItems: 'center'
    },
    image:{
        height:190,
        width:220,
        borderWidth: 2,
        borderColor: theme.COLORS.PRIMARY,
        borderRadius: 10,
        resizeMode:'contain',
        alignSelf:"center"
      },
  
      imageView:{
        marginTop: 60
      },
  });
