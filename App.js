import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyNavigator from './src/navigations/StackNavigator';

export default function App() {
  return (
    <MyNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
