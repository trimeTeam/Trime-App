import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class TrainerCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: [new Date().toISOString().slice(0, 10)],
      markedDates: {
        [new Date().toISOString().slice(0, 10)]: {
          selected: true,
          marked: true,
          selectedColor: 'black',
        },
      },
    };
  }

  datePickHandler = (day) => {
    this.setState({ markedDates: { [day.dateString]: { selected: true, marked: true, selectedColor: 'black' }}
    });
  };

  render() {
      return (
        <View>
          <Calendar
            current={Date()}
            minDate={Date()}
            onDayPress={this.datePickHandler}
            firstDay={1}
            style={{
              height: 350,
            }}
            markedDates={this.state.markedDates}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#000',
              dayTextColor: '#000',
              textDisabledColor: '#d9e1e8',
              dotColor: '#000',
              selectedDotColor: '#000',
              arrowColor: '#000',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: 'black',
              indicatorColor: 'black',
/*               textDayFontFamily: 'Open Sans',
            textMonthFontFamily: 'Open Sans',
            textDayHeaderFontFamily: 'Open Sans',  */
              textDayFontWeight: '400',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 18,
              textMonthFontSize: 26,
              textDayHeaderFontSize: 14,
            }}
          ></Calendar>
        </View>
      );
  }
}


