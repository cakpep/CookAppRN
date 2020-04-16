import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlaceScreen from './place/PlaceScreen';
import CounterScreen from './counter/Counter';

export default function MainApp() {
  return (
    <View style={styles.container}>
        <CounterScreen/>
        <Text>Open up App.js to start working on your app!</Text>
        <PlaceScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
});
