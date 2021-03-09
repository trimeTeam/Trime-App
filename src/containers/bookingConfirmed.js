import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PrimaryButton from '../components/atoms/primaryButton';

const { width, height } = Dimensions.get('screen');

const bookingConfirmed = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/high5.png')}
          style={styles.high5}
        ></Image>
        <Image
          source={require('../assets/checkmark.png')}
          style={styles.check}
        ></Image>
      </View>

      <Text style={styles.header}>Booking Confirmed</Text>
      <Text style={styles.greatJob}>
        Great job Alexander!{'\n'}You are now ready to start your first{'\n'}
        personal training session.
      </Text>
      <PrimaryButton textColor={'black'} bgColor={'#FDB339'} marginTop={60}>
        Get started!
      </PrimaryButton>
      <PrimaryButton textColor={'black'} bgColor={'#F6F6F6'} marginTop={20}>
        Home
      </PrimaryButton>
      <Text style={styles.confirmation}>
        A confirmation Email will be sent to you once the{'\n'}trainer accepted
        your request
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Open Sans',
    height: height,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    },
    imageContainer: {
        width: width,
        height: 400,
        alignItems: 'center',
        marginTop: 10
    },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: -50,
  },
  greatJob: {
    fontSize: 14,
    marginTop: 12,
  },
  high5: {
    width: 355,
    height: 355,
      marginTop: 44,
    position: 'absolute'
    },
    check: {
    width: 43,
    height: 42,
        marginTop: 242,
        position: 'absolute'
  },
  confirmation: {
    marginTop: 112,
    fontSize: 11
  },
});

export default bookingConfirmed;