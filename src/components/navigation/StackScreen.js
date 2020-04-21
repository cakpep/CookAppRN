import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from '../navigation/BottomTabNavigator'
import PlaceScreen from '../place/PlaceScreen'
import AlphabetsScreen from '../alphabets/AlphabetScreen'
import RandomPeopleScreen from '../randompeople/RandomPeopleScreen'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="Place" component={PlaceScreen} />
            <Stack.Screen name="Alphabets" component={AlphabetsScreen} />
            <Stack.Screen name="RandomPeople" component={RandomPeopleScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
