import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import mapImg from '../assets/map.PNG'
const {width, height} = Dimensions.get('screen')

import SliderContainer from '../components/atoms/sliderContainer'
import SearchField from '../components/trainerPicker/searchField'
import ActivitiesBar from '../components/trainerPicker/activitiesBar'
import TrainerList from '../components/trainerPicker/trainerList'




export default function TrainerPicker({navigation}) {

  function displayTrainerPopup(trainerObject) {
    navigation.navigate('Popup', {trainer: trainerObject})
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.map} source={{uri: mapImg}}>                      
        
        <SearchField/>
        <SliderContainer>
          <ActivitiesBar isActivityChecked={true}/>
        </SliderContainer>
              
        <ScrollView>
          <TrainerList displayTrainerPopup={displayTrainerPopup}/>
        </ScrollView>

      </ImageBackground>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    resizeMode: 'cover',
    height: height,
    alignSelf: 'stretch',
  }
});