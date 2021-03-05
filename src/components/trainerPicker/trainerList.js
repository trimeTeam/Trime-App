import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import trainers from '../../data/trainerData'
import { FlatList } from 'react-native-gesture-handler';
import TrainerListItem from './trainerListItem'


export default function TrainerList(props) {
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList data={trainers} renderItem={({item, index}) => (<TrainerListItem key={item.key} trainer={item} displayTrainerPopup={props.displayTrainerPopup}/>)}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
});