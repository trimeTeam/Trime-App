import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function signIn({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.introText}>For a personalized experience, sign up</Text>
      <Text style={styles.inputHeading}>Email</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.inputHeading}>Password</Text>
      <TextInput style={styles.textInput} />


    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  introText: {
    fontSize: 14,
    marginTop: 0,
    margin: 'auto'
      
  },

  textInput: {
    height: 40, 
    width: 580,
    borderColor: 'gray', 
    borderWidth: 1
  },
  inputHeading: {
    hfontSize: 14,
    marginTop: 0,

  },
  header: {
    fontSize: 28,
    fontWeight: 'bold', 
    marginBottom: 20
  },
});