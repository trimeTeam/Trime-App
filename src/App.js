import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import trainerTrainee from './containers/trainerTrainee';
import trainerPicker from './containers/trainerPicker';
import signIn from './containers/signIn';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sign In" component={signIn} />
          <Stack.Screen name="Trainer Trainee" component={trainerTrainee}/>
          <Stack.Screen name="Trainer Picker" component={trainerPicker} />

        </Stack.Navigator>
      </NavigationContainer>
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
