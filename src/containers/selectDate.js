import React, { Component } from 'react';
import { View } from 'react-native';
import TrainerCalendar from '../components/selectDate/trainerCalendar';
import PrimaryButton from '../components/atoms/primaryButton';

export default class SelectDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedDay : new Date().toISOString().slice(0, 10)
    };
  }

  getClickedDate = (day) => {
    this.setState({clickedDay: day.dateString})
  };

  

  btnHandlerSave = () => {
    this.props.navigation.navigate('Select Time', {trainer: this.props.route.params.trainer, date: this.state.clickedDay});
  };

  btnHandlerCancel = () => {
    this.props.navigation.navigate('Trainer Picker');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        <TrainerCalendar getClickedDate={this.getClickedDate}></TrainerCalendar>
        <PrimaryButton
          textColor={'black'}
          bgColor={'#FDB339'}
          marginTop={182}
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

