import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function trainerTrainee(props) {
  


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Welcome!</Text>
      <Text style={styles.introText}>Book your first Personal Training{'\n'} session now.</Text>
      <Image source={require('../../assets/trainerTrainee.png')} style={styles.imageStyle}></Image>
      <Button title="Get started" color='black' onPress={props.getStartedBtn}/>
      <Text style={styles.bottomLinks}>Want to become a trainer? <Text style={styles.signInUp}>Sign up here</Text></Text>
      <Text style={styles.bottomLinks}>Already have an account? <Text style={styles.signInUp}>Sign in</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Open Sans',
    height: 800,
    backgroundColor: '#FDB339',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }, 
  header: {
    fontSize: 28,
    fontWeight: 'bold', 
    marginBottom: 20
  }, 
  introText: {
    fontSize: 18,
    marginBottom: 20
  },
  imageStyle: {
    width: 300,
    height: 250
  }, 
  signInUp: {
    fontWeight: 'bold',
  },
  bottomLinks: {
    marginTop: 20
  }
});