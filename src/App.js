import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Popup from './containers/popup';
import Filter from './containers/filter';

import TrainerPicker from './containers/trainerPicker';
import SignIn from './containers/signIn';
import Payment from './containers/payment';
import GetStarted from './containers/getStarted';
import SelectDate from './containers/selectDate';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Get Started"
          component={GetStarted}
        />
        <Stack.Screen name="Trainer Picker" component={TrainerPicker} />
        <Stack.Screen options={{ headerShown: false }} name="Popup" component={Popup} />
        <Stack.Screen options={{ headerShown: false }} name="Filter" component={Filter} />
        <Stack.Screen name="Select Date" component={SelectDate} />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Payment" component={Payment} />
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
