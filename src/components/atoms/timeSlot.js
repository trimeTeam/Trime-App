import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const timeSlot = (props) => {

  return (
    <View>
      <TouchableOpacity
        style={{
          width: 62,
          height: 42,
          borderRadius: 42,
          marginBottom: 11,
          marginRight: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.selected ? 'black' : '#F6F6F6',
        }}
        onPress={() => props.selectTimeHandler(props.id)}
        id={props.id}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: props.selected ? 'white' : 'black',
          }}
        >
          {props.children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default timeSlot;
