import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function signIn({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.introContainer}>
      <Text style={styles.introText}>For a personalized experience, sign up</Text>
      </View>

    <View>
      <Text style={styles.inputHeading}>Email</Text>
      <TextInput style={styles.textInput} placeholder='Enter Your Email'/>
      
      <Text style={styles.inputHeading}>Password</Text>
      <TextInput style={styles.textInput} placeholder='Select a Password'/>
    </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonGuest}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.seperatorText}>OR</Text>
      
      <TouchableOpacity style={styles.fbButton}>
          <View style={styles.icon}>
          <Text style={{color:'white'}} >
        <Icon size={40} name='facebook-square' />
        </Text>
        </View>
        <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.googleButton}>
      <View style={styles.icon}>
      <Text style={{color:'white'}} >
        <Icon size={40} name='google-plus-square' />
        </Text>
        </View>
        <Text style={styles.socialButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.twitterButton}>
      <View style={styles.icon}>
      <Text style={{color:'white'}} >
          <Icon name= 'twitter-square' size={40} />
        </Text>
        </View>
        <Text style={styles.socialButtonText}>Sign in with Twitter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    // justifyContent: 'center',
  },

  introContainer:{
    padding: 10,
    textAlign:'center',
    backgroundColor:'#F6F6F6',
    alignSelf: 'stretch',
  },
  introText: {
    fontSize: 14,
    alignSelf:'center',
  },

  textInput: {
    height: 40, 
    width:400,
    borderBottomColor: 'gray', 
    borderBottomWidth: 2,
  },
  
  inputHeading: {
    fontSize: 14,
    marginTop: 40,
  },
  seperatorText: {
    fontSize: 20,
    marginVertical: 30,
  },
  button: {
    marginTop: 40,
    width:400,
    height: 50,
    backgroundColor: '#FDB339',
    borderRadius: 50,
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: 'black',
    margin:'auto',
    textAlign: 'center',
  },

  buttonGuest: {
    marginTop: 20,
    width:400,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 50,
    justifyContent: 'center'

  },

  fbButton:{
    flexDirection:'row',
    width:400,
    backgroundColor: '#3B5998',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius:5
  },

  socialButtonText:{
    fontSize: 18,
    color: 'white',
    margin:'auto',
    textAlign: 'center',
  },

  icon:{
  borderRightWidth: 2,
  borderColor: 'black',
  padding: 5,
  marginRight: 10,
  color: 'white',
  borderRightWidth: 1,

  },

  googleButton:{
    flexDirection:'row',
    marginTop: 10,
    width:400,
    backgroundColor: '#DD4B39',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'black',
    borderRadius:5

    
  },
  twitterButton: {
    flexDirection:'row',
    marginTop: 10,
    width:400,
    backgroundColor: '#55ACEE',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius:5

    
  }
});