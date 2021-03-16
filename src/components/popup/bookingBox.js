import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import ActivitiesBar from '../trainerPicker/activitiesBar'

let customFonts = {
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
  'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
};


export default function BookingBox(props) {

  return (
    <View style={styles.bookingBox}>
      <ActivitiesBar isActivityChecked={false} />
      <View style={styles.bookingInfo}>
        <View>
          <Text style={styles.priceText}><Text style={styles.bold}>{props.trainer.costTo} SEK</Text> an hour</Text>
          <View style={styles.rating}><Icon name='star' size={20} color='#FDB339' /><Text style={styles.bold}> {props.trainer.overallRating} </Text> <Text style={styles.regular}>({props.trainer.numberOfReviews})</Text></View>
        </View>
        <TouchableOpacity style={styles.button} onPress={props.displaySelectDate}>
          <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookingBox: {
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 3,
      height: 5

  },
    // boxShadow: '0px 3px 4px 3px rgba(0, 0, 0, 0.25)',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    width: '90%',
    position: 'absolute',
    bottom: 35,
    zIndex: 4
  },
  bookingInfo: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceText: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular'
  },
  rating: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#FDB339',
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold'
  },
  bold: {
    fontFamily: 'OpenSans-Bold'
  },
  regular: {
    fontFamily: 'OpenSans-Regular'
  }
});