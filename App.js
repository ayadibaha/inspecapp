import { StoreProvider } from 'easy-peasy';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyNavigator from './src/navigations/StackNavigator';
import inspectionStore from './src/state/inspection';

export default function App() {
  return (
    <StoreProvider store={inspectionStore}>
      <MyNavigator />
    </StoreProvider>
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
