import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/store';

import PlaceScreen from './src/components/place/PlaceScreen';

export default function App() {
  return (
    <Provider store={ configureStore() }>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <PlaceScreen/>        
      </View>
    </Provider>
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
