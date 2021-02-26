import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';

import mapImg from '../assets/map.PNG'

import SearchField from '../components/trainerPicker/searchField'
import ActivitiesBar from '../components/trainerPicker/activitiesBar'
import TrainerList from '../components/trainerPicker/trainerList'


export default function TrainerPicker({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.map} source={{uri: mapImg}}>

        <SearchField/>
        <ActivitiesBar/>
        <TrainerList/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  map: {
    resizeMode: 'cover',
    height: 800,
    alignSelf: 'stretch',
  }
});