import React from 'react'
import { StyleSheet, View } from 'react-native'

import CookStackNavigator from './navigation/StackScreen'

export default function MainApp() {
  return (
    <View style={styles.container}>
        <CookStackNavigator/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
