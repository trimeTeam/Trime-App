import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PrimaryButton from '../atoms/primaryButton';

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
      <PrimaryButton
        textColor={'white'}
        bgColor={'black'}
        marginTop={55}
        onPress={props.getStartedBtn}
      >
        Get started!
      </PrimaryButton>
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