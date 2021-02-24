import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function trainerTrainee({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is the trainer / trainee screen</Text>
      <Button title="Trainee" onPress={() =>
        navigation.navigate('Trainer Picker')
      }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});