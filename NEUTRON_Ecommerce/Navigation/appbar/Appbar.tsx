import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Appbar, Menu, Button, Divider, Provider } from 'react-native-paper';
import { Platform } from 'react-native';
import { mainStyle } from '../../responsive/GlobalStyle';
import useTheme from '../../theme/hooks/UseTheme';

export default function AppHeader() {
  const [visible, setVisible] = useState(true);
  const theme = useTheme();

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      <Appbar.BackAction color={theme.COLORS.PRIMARY} onPress={() => {}} />
      <Appbar.Content
        title="Home"
        color={theme.COLORS.PRIMARY}
        subtitle={'Subtitle'}
      />
      <Appbar.Action
        color={theme.COLORS.PRIMARY}
        icon="bell-outline"
        onPress={() => {}}
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
          <Menu.Item
            leadingIcon="account"
            onPress={() => {
              alert('Navigate to profile');
            }}
            title="Profile"
          />
          <Menu.Item
            leadingIcon="cog-outline"
            onPress={() => {
              alert('Navigate to settings');
            }}
            title="Settings"
          />
        </Menu>
      </View>
    </Appbar.Header>
  );
}
