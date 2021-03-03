import React from 'react';
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
    <View style={styles.activityContainer}>
      {activities.map((activity) => <Activity name={activity.name} icon={activity.icon}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 15
  }
});