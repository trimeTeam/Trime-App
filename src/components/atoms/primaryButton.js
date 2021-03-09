import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

let customFonts = {
  'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
};

const primaryButton = (props) => {
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
            backgroundColor: [props.bgColor],
            marginTop: marginTop,
            alignSelf: 'center'
          }}
          onPress={props.btnHandler}
        >
          <Text
            style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 18, color: [props.textColor]}}
          >
            {props.children}
          </Text>
        </TouchableOpacity>
      </View>
    );
}

export default primaryButton;