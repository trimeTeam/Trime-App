import React, { Component } from 'react';
import { View } from 'react-native';
import TrainerCalendar from '../components/selectDate/trainerCalendar';
import PrimaryButton from '../components/atoms/primaryButton';

export default class SelectDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  btnHandlerSave = () => {
      this.props.navigation.navigate('Select Time');
  };

  btnHandlerCancel = () => {
    this.props.navigation.navigate('Trainer Picker');
  };

  render() {
    return (
      <View
        style={{
          fontFamily: 'Open Sans',
          flex: 1,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        <TrainerCalendar></TrainerCalendar>
        <PrimaryButton
          textColor={'black'}
          bgColor={'#FDB339'}
          marginTop={180}
          btnHandler={this.btnHandlerSave}
        >
          Save
        </PrimaryButton>
        <PrimaryButton
          textColor={'black'}
          bgColor={'#F6F6F6'}
          marginTop={20}
          btnHandler={this.btnHandlerCancel}
        >
          Cancel
        </PrimaryButton>
      </View>
    );
  }
}

