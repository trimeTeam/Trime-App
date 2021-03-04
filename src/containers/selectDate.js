import React, { Component } from 'react';
import { View } from 'react-native';
import TrainerCalendar from '../components/selectDate/trainerCalendar';
import PrimaryButton from '../components/atoms/primaryButton';

export default class SelectDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  btnHandlerSave = () => {};

  btnHandlerCancel = () => {};

  render() {
    return (
      <View
        style={{
          fontFamily: 'Open Sans',
          height: 812,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        <TrainerCalendar></TrainerCalendar>
        <PrimaryButton textColor={'black'} bgColor={'#FDB339'} marginTop={145}>
          Save
        </PrimaryButton>
        <PrimaryButton textColor={'black'} bgColor={'#F6F6F6'} marginTop={20}>
          Cancel
        </PrimaryButton>
      </View>
    );
  }
}

