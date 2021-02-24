import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, TextInput } from 'react-native';

import mapImg from '../assets/map.PNG'

export default function SearchField() {
  const [searchInput, setSearchInput] = useState("")

  function handleChange(event) {
    setSearchInput(event.target.value)
  }
  
  return (
    <ImageBackground style={styles.container} source={{uri: mapImg}}>
      <StatusBar style="auto" />
      <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Search for trainer' value={searchInput} onChange={handleChange}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'absolute',
  },
  input: {
    borderColor: 'gray', 
    borderWidth: 1, 
    padding: 10,
    backgroundColor: '#FFF'
  }
});