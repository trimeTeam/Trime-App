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
      isVisible: true,
    };
  }

  datePickHandler = (day) => {
    console.log(day);
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
              borderWidth: 1,
              borderColor: 'gray',
              height: 350,
            }}
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
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
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
              textDayFontSize: 14,
              textMonthFontSize: 26,
              textDayHeaderFontSize: 14,
            }}
          ></Calendar>
        </View>
      );
  }
}


