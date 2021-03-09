import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import TimeSlot from '../atoms/timeSlot';

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
        <Text style={{fontSize: 18,
        fontWeight: 'bold', marginBottom: 30}}>{props.children}</Text>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>{timeSlots}</View>
      </View>
    );
};





export default timeSlots;
