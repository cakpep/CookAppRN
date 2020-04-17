import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from './navigation/BottomTabNavigator'
import PlaceScreen from './place/PlaceScreen'

const Stack = createStackNavigator()

const CookStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Place" component={PlaceScreen} />
    </Stack.Navigator>
  );
}

export default function MainApp() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <CookStackNavigator/>
        </NavigationContainer>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
