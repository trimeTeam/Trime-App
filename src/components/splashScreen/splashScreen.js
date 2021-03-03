import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

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
    fontFamily: 'Open Sans',
    alignItems: 'center',
    height: 812,
    width: 375,
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
    marginTop: 213,
    fontSize: 18,
  },
  author: {
    marginTop: 14,
    fontSize: 14,
  },
});