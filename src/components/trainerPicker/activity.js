import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Activity(props) {
  const [isActivityChecked, setIsActivityChecked] = useState(true)

  function handleClick() {
    setIsActivityChecked(!isActivityChecked)
  }

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{backgroundColor: isActivityChecked? '#FDB339':'#F6F6F6', padding: 13, borderRadius: 100}} onClick={handleClick}>
          <Image style={styles.image} source={props.icon} />
        </View>
        <Text style={styles.text}>{props.name}</Text>
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
  image: {
    width: 28,
    height: 28,
  },
  text: {
    fontWeight: 600
  }
});