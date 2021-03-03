import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import GetStartedButton from './getStartedBtn';

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
          <GetStartedButton style={styles.button} getStartedBtn={props.getStartedBtn}></GetStartedButton>
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
    marginTop: 111,
  },
  introText: {
    fontSize: 18,
    marginTop: 12,
  },
  trainer: {
    width: 72,
    height: 146,
    marginRight: 67,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 50,
  },
  trainee: {
    width: 75,
    height: 136,
    },
  signInUp: {
    fontWeight: 'bold',
  },
  bottomLink1: {
    marginTop: 13,
  },
  bottomLink2: {
    marginTop: 17,
  },
});
