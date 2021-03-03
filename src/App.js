import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import trainerPicker from './containers/trainerPicker';
import signIn from './containers/signIn';
import GetStarted from './containers/getStarted';
import SelectDate from './containers/selectDate';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*         <Stack.Screen
          options={{ headerShown: false }}
          name="Get Started"
          component={GetStarted}
        />
        <Stack.Screen name="Trainer Picker" component={trainerPicker} /> */}
        <Stack.Screen
          name="Select Date"
          component={SelectDate}
          options={{
            title: 'Select Date',
            headerStyle: {
              backgroundColor: '#FDB339',
              height: 128,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 50
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Sign In" component={signIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
