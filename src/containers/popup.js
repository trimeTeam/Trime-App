import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, ScrollView, ImageBackground, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('screen')
import Icon from 'react-native-vector-icons/MaterialIcons'

import mapImg from '../assets/map.PNG'
import BookingBox from '../components/popup/bookingBox'
import TrainerPopupInfo from '../components/popup/trainerPopupInfo'




export default function Popup({route, navigation}) {

    const trainer = route.params.trainer

    function displaySelectDate() {
        navigation.navigate('Select Date')
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.map} source={{uri: mapImg}}>                   
                <BookingBox trainer={trainer} displaySelectDate={displaySelectDate}/>

                <View style={styles.popup}>
                    <View style={styles.grabber}/>
                    <Icon name='close' size={40} onClick={() => navigation.goBack()}/>
                </View>
                    
                <ScrollView style={styles.popupContent}>
                   <TrainerPopupInfo trainer={trainer}/>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    map: {
        resizeMode: 'cover',
        height: height,
        alignSelf: 'stretch',
    },
    popup: {
        marginTop: 80,
        width: '100%',
        paddingHorizontal: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FFF',
    },
    grabber: {
        width: 70,
        height: 4,
        backgroundColor: '#C4C4C4',
        marginTop: 15,
        borderRadius: 100,
        alignSelf: 'center'
    },
    popupContent: {
        width: '100%',
        padding: 20,
        backgroundColor: '#FFF',
    }
});