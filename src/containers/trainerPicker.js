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
import TrainerPopup from '../components/trainerPicker/trainerPopup'
import BookingBox from '../components/trainerPicker/bookingBox';




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
      
      {isPopupDisplayed && <TrainerPopup trainer={clickedTrainer} closeTrainerPopup={closeTrainerPopup}/>}
      {isPopupDisplayed && <BookingBox trainer={clickedTrainer}/>}
      
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