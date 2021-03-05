import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('screen')

export default function SliderContainer({children}) {

  const [alignment] = useState(new Animated.Value(0))

  function bringUpSlider () {
    Animated.timing(alignment, {toValue:2, duration: 500}).start()
  }

  function bringDownSlider () {
    Animated.timing(alignment, {toValue:1, duration: 500}).start()
  }

  function gestureHandler (e) {
    if (e.nativeEvent.contentOffset.y > 0) bringUpSlider()
    else if (e.nativeEvent.contentOffset.y < 0) bringDownSlider()
  }

  
  const sliderIntropolate = alignment.interpolate({inputRange: [0,1,2], outputRange: [200, 500, 0]})
  const sliderStyles = {
    marginTop: sliderIntropolate, 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFF',
    padding: 10,
    width: width,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    zIndex: 2,
  }

  return (
      <Animated.View style={sliderStyles} >
        <StatusBar style="auto" />
        <View style={styles.grabber} onScroll={(e) => gestureHandler(e)}/>

        <View>{children}</View>

      </Animated.View>
  );
}

const styles = StyleSheet.create({
  grabber: {
    width: 70,
    height: 4,
    backgroundColor: '#C4C4C4',
    margin: 10,
    borderRadius: 100,
    alignSelf: 'center'
  },
});