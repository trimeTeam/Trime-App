import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import SearchField from '../components/searchField'
import ActivitiesBar from '../components/activitiesBar'


export default function TrainerPicker({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchField/>
      <ActivitiesBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});