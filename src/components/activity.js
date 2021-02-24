import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function Activity(props) {

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>{props.icon}</Text>
        <Text>{props.name}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
  },
});