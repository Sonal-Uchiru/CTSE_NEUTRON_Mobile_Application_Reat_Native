import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView
} from 'react-native';
import React from 'react';

export default function Lazy() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Comp 1</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'green',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
});
