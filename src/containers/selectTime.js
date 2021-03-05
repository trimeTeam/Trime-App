import React, { Component } from 'react';
import { View } from 'react-native';
import PrimaryButton from '../components/atoms/primaryButton';
import TimeSlots from '../components/selectTime/timeSlots';

export default class SelectTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutMinutes: [
        {
          time: 30,
          selected: false,
        },
        {
          time: 60,
          selected: false,
        },
        {
          time: 90,
          selected: false,
        },
        {
          time: 120,
          selected: false,
        },
        {
          time: 150,
          selected: false,
        },
      ],
      timeSlots: [
        {
          time: '11:00',
          selected: false,
        },
        {
          time: '11:30',
          selected: false,
        },
        {
          time: '12:00',
          selected: false,
        },
        {
          time: '12:30',
          selected: false,
        },
        {
          time: '13:00',
          selected: false,
        },
        {
          time: '13:30',
          selected: false,
        },
        {
          time: '14:00',
          selected: false,
        },
        {
          time: '14:30',
          selected: false,
        },
        {
          time: '15:00',
          selected: false,
        },
        {
          time: '15:30',
          selected: false,
        },
        {
          time: '16:00',
          selected: false,
        },
        {
          time: '16:30',
          selected: false,
        },
        {
          time: '17:00',
          selected: false,
        },
        {
          time: '17:30',
          selected: false,
        },
        {
          time: '18:00',
          selected: false,
        },
      ],
    };
  }

  btnHandlerSave = () => {
    this.props.navigation.navigate('Sign In');
  };

  btnHandlerCancel = () => {
    this.props.navigation.navigate('Select Date');
  };

    selectTimeHandler = (event) => {
        console.log(event.target.parentElement)
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
        <View style={{ marginTop: 63}}>
          <TimeSlots
            timeSlots={this.state.workoutMinutes}
            selectTimeHandler={this.selectTimeHandler}
          >
            Workout Minutes
          </TimeSlots>
        </View>

        <View style={{marginTop: 83}}>
          <TimeSlots
            timeSlots={this.state.timeSlots}
            selectTimeHandler={this.selectTimeHandler}
          >
            Slots Available
          </TimeSlots>
        </View>

        <PrimaryButton
          textColor={'black'}
          bgColor={'#FDB339'}
          marginTop={72}
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
