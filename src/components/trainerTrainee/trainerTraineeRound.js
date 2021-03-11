import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import GetStartedButton from './getStartedBtn';

const { width, height } = Dimensions.get('screen');

let customFonts = {
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
};

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
        Already have an account? <Text style={styles.signInUp} onPress={props.signIn}>Sign in</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#FDB339',
    alignItems: 'center',
    textAlign: 'center',
  },
  header: {
    fontSize: 28,
    fontFamily: 'OpenSans-Bold',
    marginTop: 110,
  },
  introText: {
    fontFamily: 'OpenSans-Regular',
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
    marginTop: 30,
    zIndex: 10
  },
  trainee: {
    width: 75,
    height: 136,
  },
  signInUp: {
    fontFamily: 'OpenSans-Bold',
  },
  bottomLink1: {
    fontFamily: 'OpenSans-Regular',
    marginTop: 13,
  },
  bottomLink2: {
    fontFamily: 'OpenSans-Regular',
    marginTop: 17,
  },
});
