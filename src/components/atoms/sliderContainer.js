import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function SliderContainer({children, view}) {

  return (
      <View style={view === 'popup'? styles.popup: styles.list} >
        <StatusBar style="auto" />
        <View style={styles.slider}/>
        <View>{children}</View>
      </View>
  );
}

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    top: 100,
    left: 0,
    backgroundColor: '#FFF',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  list: {
    backgroundColor: '#FFF',
    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C4',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
  },
  slider: {
    width: 70,
    height: 4,
    backgroundColor: '#C4C4C4',
    margin: 10,
    borderRadius: 100,
    alignSelf: 'center'
  },
});