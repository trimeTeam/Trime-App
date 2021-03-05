import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function trainerTrainee(props) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Welcome!</Text>
      <Text style={styles.introText}>
        Book your first Personal Training{'\n'} session now.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/trainer.png')}
          style={styles.trainer}
        ></Image>
        <Image
          source={require('../../assets/trainee.png')}
          style={styles.trainee}
        ></Image>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.getStartedBtn}>
        <Text style={styles.buttonText}>Get started!</Text>
      </TouchableOpacity>
      <Text style={styles.bottomLink1}>
        Want to become a trainer?{' '}
        <Text style={styles.signInUp}>Sign up here</Text>
      </Text>
      <Text style={styles.bottomLink2}>
        Already have an account? <Text style={styles.signInUp}>Sign in</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Open Sans',
    height: 812,
    backgroundColor: '#FDB339',
    alignItems: 'center',
    textAlign: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 157,
  },
  introText: {
    fontSize: 18,
    marginTop: 12,
  },
  button: {
    width: 330,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: 55
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  trainer: {
    width: 96,
    height: 194,
    marginRight: 63
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 50
  },
  trainee: {
    width: 99,
    height: 178,
  },
  signInUp: {
    fontWeight: 'bold',
  },
  bottomLink1: {
    marginTop: 35,
  },
  bottomLink2: {
    marginTop: 17,
  },
});