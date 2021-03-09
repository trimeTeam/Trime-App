import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

let customFonts = {
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
};

export default function splashScreen() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('../../assets/bgimg.png')}
        style={styles.container}
      >
        <Image
          source={require('../../assets/trime_logo.png')}
          style={styles.logo}
        ></Image>
        <Image
          source={require('../../assets/running_slow.gif')}
          style={styles.running}
        ></Image>
        <Text style={styles.quote}>"Sun is shining and so are you"</Text>
        <Text style={styles.author}>– Axwell Ingrosso</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: height,
    width: width,
    textAlign: 'center',
  },
  logo: {
    width: 265,
    height: 75,
    marginTop: 157,
  },
  running: {
    width: 200,
    height: 200,
  },
  quote: {
    fontFamily: 'OpenSans-Regular',
    marginTop: 213,
    fontSize: 18,
  },
  author: {
    fontFamily: 'OpenSans-Regular',
    marginTop: 14,
    fontSize: 14,
  },
});