import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Activity from './activity'

export default function ActivitiesBar() {

    const activities = [
        {name: 'HIIT', icon: 'Icon1'},
        {name: 'Boxing', icon: 'Icon2'},
        {name: 'Gym', icon: 'Icon3'},
        {name: 'Running', icon: 'Icon4'}
    ]

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {activities.map((activity) => <Activity name={activity.name} icon={activity.icon}/>)}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
        position: 'relative',
        flexDirection: 'row',
        alignSelf: 'stretch',
        padding: 15,
        backgroundColor: '#F5F5F5'
  },
});