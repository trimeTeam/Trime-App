import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import FontAwsome5 from 'react-native-vector-icons';

export default function signIn({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.introText}>For a personalized experience, sign up</Text>
      <Text style={styles.inputHeading}>Email</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.inputHeading}>Password</Text>
      <TextInput style={styles.textInput} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGuest}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.inputHeading}>OR</Text>
      <TouchableOpacity style={styles.fbButton}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.twitterButton}>
        <Text style={styles.buttonText}>Sign in with Twitter</Text>
      </TouchableOpacity>


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
    // margin: 'auto'
    marginBottom: 10,
    marginTop: 10
      
  },

  textInput: {
    height: 40, 
    width: 330,
    borderBottomColor: 'gray', 
    borderWidth: 1
  },
  inputHeading: {
    fontSize: 14,
    marginTop: 0,

  },
  button: {
    marginTop: 10,
    width: 330,
    height: 50,
    backgroundColor: '#FDB339',
    borderRadius: 50,
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: 'black',
    margin:'auto',
  },

  buttonGuest: {
    marginTop: 10,
    width: 330,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 50,
    justifyContent: 'center'
  },

  fbButton:{
    marginTop: 10,
    width: 330,
    height: 50,
    backgroundColor: '#3B5998',
    // borderRadius: 50,
    justifyContent: 'center'
  },

  googleButton:{
    marginTop: 10,
    width: 330,
    height: 50,
    backgroundColor: '#DD4B39',
    justifyContent: 'center'
  },
  twitterButton: {
    marginTop: 10,
    width: 330,
    height: 50,
    backgroundColor: '#55ACEE',
    justifyContent: 'center'
  }
});