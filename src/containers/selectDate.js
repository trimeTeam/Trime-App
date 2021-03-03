import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import TrainerCalendar from '../components/selectDate/trainerCalendar';

export default class SelectDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }



  render() {
    return (
      <View>
        <TrainerCalendar></TrainerCalendar>
      </View>
    );
  }
}
