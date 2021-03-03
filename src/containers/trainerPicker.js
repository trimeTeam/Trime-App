import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';

import mapImg from '../assets/map.PNG'

import SliderContainer from '../components/atoms/sliderContainer'
import SearchField from '../components/trainerPicker/searchField'
import ActivitiesBar from '../components/trainerPicker/activitiesBar'
import TrainerList from '../components/trainerPicker/trainerList'
import TrainerPopup from '../components/trainerPicker/trainerPopup'


export default function TrainerPicker({navigation}) {
  const [isPopupDisplayed, setIsPopupDisplayed] = useState(false)
  const [clickedTrainer, setClickedTrainer] = useState({})

  function displayTrainerPopup(trainerObject) {
    setClickedTrainer(trainerObject)
    setIsPopupDisplayed(true)
  }

  function closeTrainerPopup() {
    setIsPopupDisplayed(false)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground style={styles.map} source={{uri: mapImg}}>
        <SearchField/>
        {isPopupDisplayed? 
          <TrainerPopup trainer={clickedTrainer} closeTrainerPopup={closeTrainerPopup}/> 
          : 
          <SliderContainer view='list'>
            <ActivitiesBar/>
            <TrainerList displayTrainerPopup={displayTrainerPopup}/>
          </SliderContainer>}
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