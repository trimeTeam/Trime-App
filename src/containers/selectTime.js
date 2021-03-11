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
          id: 1
        },
        {
          time: 60,
          selected: true,
          id: 2
        },
        {
          time: 90,
          selected: false,
          id: 3
        },
        {
          time: 120,
          selected: false,
          id: 4
        },
        {
          time: 150,
          selected: false,
          id: 5
        },
      ],
      timeSlots: [
        {
          time: '11:00',
          selected: false,
          id: 6
        },
        {
          time: '11:30',
          selected: false,
          id: 7
        },
        {
          time: '12:00',
          selected: false,
          id: 8
        },
        {
          time: '12:30',
          selected: false,
          id: 9
        },
        {
          time: '13:00',
          selected: false,
          id: 10
        },
        {
          time: '13:30',
          selected: false,
          id: 11
        },
        {
          time: '14:00',
          selected: false,
          id: 12
        },
        {
          time: '14:30',
          selected: false,
          id: 13
        },
        {
          time: '15:00',
          selected: false,
          id: 14
        },
        {
          time: '15:30',
          selected: false,
          id: 15
        },
        {
          time: '16:00',
          selected: false,
          id: 16
        },
        {
          time: '16:30',
          selected: false,
          id: 17
        },
        {
          time: '17:00',
          selected: true,
          id: 18
        },
        {
          time: '17:30',
          selected: false,
          id: 19
        },
        {
          time: '18:00',
          selected: false,
          id: 20
        },
      ],
      clickedTime: '17:00'
    };
  }

  btnHandlerSave = () => {
    this.props.navigation.navigate('Sign In', {trainer: this.props.route.params.trainer, date: this.props.route.params.date, time: this.state.clickedTime});
  };

  btnHandlerCancel = () => {
    this.props.navigation.navigate('Select Date');
  };

  selectTimeHandler = (id) => {
    if (id < 6) {
      this.setState(
        this.state.workoutMinutes.map((time) => {
          time.selected = false;
        }));
      this.state.workoutMinutes[id - 1].selected = true;
    } else {
      this.setState(this.state.timeSlots.map((time) => {
        time.selected = false;
      }));
      this.state.timeSlots[id - 6].selected = true;
      this.state.clickedTime = this.state.timeSlots[id - 6].time
    }
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
        <View style={{ marginTop: 60}}>
          <TimeSlots
            timeSlots={this.state.workoutMinutes}
            selectTimeHandler={this.selectTimeHandler}
          >
            Workout Minutes
          </TimeSlots>
        </View>

        <View style={{marginTop: 80}}>
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
