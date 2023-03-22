import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Appbar, Menu, Button, Divider, Provider } from 'react-native-paper';
import { Platform } from 'react-native';
import { mainStyle } from '../../responsive/GlobalStyle';
import useTheme from '../../theme/hooks/UseTheme';
import { useNavigation } from '@react-navigation/native';
import UserService from '../../api/services/UserService';

export default function AppHeader() {
  const [visible, setVisible] = useState(true);
  const theme = useTheme();
  const navigation = useNavigation();
  const [userRole, setUserRole] = useState<number>(-99);

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  useEffect(() => {
    (async () => {
      try {
        let user: any = await UserService.getUserAsync();
        setUserRole(user?.role);
      } catch (e) {
        setUserRole(-99);
      }
    })();
  }, [userRole]);
  return (
    <View>
      {/* {console.log(userRole)} */}
      {userRole != -99 ? (
        <Appbar.Header>
          {/* <Appbar.BackAction
            color={theme.COLORS.PRIMARY}
            onPress={() => navigation.goBack()}
          /> */}
          <Appbar.Content
            title="Neutron"
            color={theme.COLORS.PRIMARY}
            subtitle={'Subtitle'}
          />
          <View>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Appbar.Action
                  color={theme.COLORS.PRIMARY}
                  icon={MORE_ICON}
                  onPress={openMenu}
                />
              }
            >
              {userRole == 0 ? (
                <>
                  <Menu.Item
                    leadingIcon="account"
                    onPress={() => {
                      navigation.navigate('Profile'), closeMenu();
                    }}
                    title="Profile"
                  />
                  <Menu.Item
                    leadingIcon="exclamation"
                    onPress={() => {
                      navigation.navigate('AboutUs'), closeMenu();
                    }}
                    title="About Us"
                  />
                  <Menu.Item
                    leadingIcon="help-circle-outline"
                    onPress={async () => {
                      await UserService.signOut(),
                        navigation.navigate('Help'),
                        closeMenu();
                    }}
                    title="Help"
                  />
                </>
              ) : (
                <></>
              )}

              <Menu.Item
                leadingIcon="logout"
                onPress={() => {
                  navigation.navigate('Guest'), closeMenu();
                }}
                title="Logout"
              />
            </Menu>
          </View>
        </Appbar.Header>
      ) : (
        <></>
      )}
    </View>
  );
}
