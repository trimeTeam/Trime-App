import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TimeSlot from '../atoms/timeSlot';

let customFonts = {
  'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
};

const timeSlots = (props) => {
    const timeSlots = props.timeSlots.map((time) => {
        return (
          <TimeSlot
            key={time.id.toString()}
            id={time.id.toString()}
            selectTimeHandler={props.selectTimeHandler}
            selected={time.selected}
          >
            {time.time}
          </TimeSlot>
        );
    })

    return (
      <View>
        <View style={{ flexDirection: 'row', width: 230, alignSelf: 'center', justifyContent: 'space-between' }}>
          <Icon
            name="chevron-left"
            size={25}
            color="black"
          />
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'OpenSans-Bold',
              marginBottom: 30,
              marginRight: 10,
              marginLeft: 10,
            }}
          >
            {props.children}
          </Text>
          <Icon
            name="chevron-right"
            size={25}
            color="black"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {timeSlots}
        </View>
      </View>
    );
};





export default timeSlots;
