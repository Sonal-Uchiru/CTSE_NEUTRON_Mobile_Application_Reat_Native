import { Platform, StyleSheet, StatusBar } from 'react-native';

export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  errorText: {
    fontSize: 10,
    color: 'red'
  },
  primaryColor: {
    color: '#03C988'
  }
});
