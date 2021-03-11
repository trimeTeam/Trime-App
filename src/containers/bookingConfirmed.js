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

let customFonts = {
  'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
};


const bookingConfirmed = ({navigation}) => {

  const goToStart = () => {
    navigation.navigate('Get Started');
  }

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
      <PrimaryButton textColor={'black'} bgColor={'#FDB339'} marginTop={60} btnHandler={goToStart}>
        Get started!
      </PrimaryButton>
      <PrimaryButton textColor={'black'} bgColor={'#F6F6F6'} marginTop={20} btnHandler={goToStart}>
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
  },
  header: {
    fontSize: 28,
    fontFamily: 'OpenSans-Bold',
    marginTop: -50,
  },
  greatJob: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    marginTop: 12,
  },
  high5: {
    width: 355,
    height: 355,
    marginTop: 44,
    position: 'absolute',
  },
  check: {
    width: 43,
    height: 42,
    marginTop: 242,
    position: 'absolute',
  },
  confirmation: {
    fontFamily: 'OpenSans-Regular',
    marginTop: 112,
    fontSize: 11,
  },
});

export default bookingConfirmed;