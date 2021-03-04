import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const primaryButton = (props) => {
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    const marginTop = props.marginTop;

    return (
      <View>
        <TouchableOpacity
          style={{
            width: 330,
            height: 50,
            borderRadius: 42,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bgColor,
            marginTop: marginTop,
            alignSelf: 'center'
          }}
          onPress={props.btnHandler}
        >
          <Text
            style={{ fontSize: 18, fontWeight: 600, color: textColor}}
          >
            {props.children}
          </Text>
        </TouchableOpacity>
      </View>
    );
}

export default primaryButton;