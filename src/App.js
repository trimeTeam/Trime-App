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
import SelectTime from './containers/selectTime';
import BookingConfirmed from './containers/bookingConfirmed';

import { useFonts } from '@expo-google-fonts/open-sans';

let customFonts = {
  'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
};
import OrderDetail from './components/orderDetail/orderDetail';



const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    });

    if (!fontsLoaded) {
      return 'Font not found';
    }
  
  
  const yellowHeader = {
    headerStyle: {
      backgroundColor: '#FDB339',
      height: 128,
    },
    headerTitleStyle: {
      fontFamily: 'OpenSans-Bold',
      fontSize: 18,
      marginTop: 50,
    },
    headerTitleAlign: 'center',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
{/*         <Stack.Screen
          options={{ headerShown: false }}
          name="Get Started"
          component={GetStarted}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Trainer Picker" 
          component={TrainerPicker} 
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Popup"
          component={Popup}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Filter"
          component={Filter}
        /> */}
        <Stack.Screen
          name="Select Date"
          component={SelectDate}
          options={yellowHeader}
        />
        <Stack.Screen
          name="Select Time"
          component={SelectTime}
          options={yellowHeader}
        />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={yellowHeader}
        />
        <Stack.Screen
          name="Session Details"
          component={OrderDetail}
          options={yellowHeader}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={yellowHeader}
        />
        <Stack.Screen 
          name="Order Detail" 
          component={OrderDetail} 
          options={yellowHeader}
        />
        <Stack.Screen
          name="Booking Confirmed"
          component={BookingConfirmed}
          options={{ headerShown: false }}
        />
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
