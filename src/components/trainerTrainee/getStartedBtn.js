import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function getStartedBtn(props) {
  return (
    <View>
      <Pressable onPress={props.getStartedBtn}>
        <Image
          style={styles.button}
          source={require('../../assets/Start_Button_yellow.gif')}
        ></Image>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 325,
    height: 325,
    marginTop: -25
  }
});
