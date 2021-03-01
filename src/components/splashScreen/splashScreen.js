import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function splashScreen() {

  return (
        <View>  
          <ImageBackground source={require('../../assets/splashDummy.png')}  
              style={styles.imageContainer}>
          </ImageBackground>
        </View>
  );
}


const styles = StyleSheet.create({
    imageContainer: {
        alignSelf: 'stretch',
        height: 800
    }
});