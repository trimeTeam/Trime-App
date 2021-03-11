import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

let customFonts = {
  'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
};

export default function Activity(props) {
  const [isActivityChecked, setIsActivityChecked] = useState(props.isActivityChecked)

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
    width: 22,
    height: 22,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    marginTop: 4
  }
});