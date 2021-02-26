import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Activity from './activity'
import HiitIcon from '../../assets/HIIT.png'
import BoxingIcon from '../../assets/Boxing.png'
import GymIcon from '../../assets/Gym.png'
import RunningIcon from '../../assets/Running.png'

export default function ActivitiesBar() {

    const activities = [
        {name: 'HIIT', icon: HiitIcon},
        {name: 'Boxing', icon: BoxingIcon},
        {name: 'Gym', icon: GymIcon},
        {name: 'Running', icon: RunningIcon}
    ]

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.slider}/>
        <View style={styles.activityContainer}>
          {activities.map((activity) => <Activity name={activity.name} icon={activity.icon}/>)}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C4',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  slider: {
    width: 70,
    height: 4,
    backgroundColor: '#C4C4C4',
    marginTop: 20,
    borderRadius: 100
  },
  activityContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 15,
  }
});