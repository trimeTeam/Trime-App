import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Slider from '@react-native-community/slider'

import DatePicker from 'react-native-datepicker'

import ActivitiesBar from '../components/trainerPicker/activitiesBar'

let customFonts = {
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-ExtraBold': require('../assets/fonts/OpenSans-ExtraBold.ttf')
};


export default function Filter({ navigation }) {
    const [sliderValue, setSliderValue] = useState('No limit')

    const [isMondayChecked, setIsMondayChecked] = useState(false)
    const [isTuesdayChecked, setIsTuesdayChecked] = useState(false)
    const [isWednesdayChecked, setIsWednesdayChecked] = useState(false)
    const [isThursdayChecked, setIsThursdayChecked] = useState(false)
    const [isFridayChecked, setIsFridayChecked] = useState(false)
    const [isSaturdayChecked, setIsSaturdayChecked] = useState(false)
    const [isSundayChecked, setIsSundayChecked] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.grabber} />
            <Icon name='close' size={40} onClick={() => navigation.goBack()} />

            <ScrollView style={styles.filterContent}>
                <View style={styles.filterContentContainer}>
                    <Text style={styles.heading}>Filters</Text>
                </View>
                <View style={styles.filterContentContainer}>
                    <Text style={styles.underHeading}>TYPE OF TRAINING</Text>
                    <ActivitiesBar isActivityChecked={false} />
                </View>
                <View style={styles.filterContentContainer}>
                    <Text style={styles.underHeading}>MAXIMUM PRICE PER SESSION</Text>
                    <Slider
                        style={{ width: '100%', height: 40 }}
                        minimumValue={29}
                        maximumValue={629}
                        value={629}
                        minimumTrackTintColor="#FDB339"
                        maximumTrackTintColor="#F6F6F6"
                        thumbTintColor="#FDB339"
                        onValueChange={setSliderValue}
                    />
                    <Text style={styles.bold}>{typeof sliderValue === 'string' ? sliderValue : Math.round(sliderValue) + ' SEK'}</Text>
                </View>
                <View style={styles.filterContentContainer}>
                    <Text style={styles.underHeading}>AVAILABLE DAYS</Text>
                    <View style={styles.weekdaysCircleContainer}>
                        <View onClick={() => { setIsMondayChecked(!isMondayChecked) }} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isMondayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>M</Text></View>
                        <View onClick={() => { setIsTuesdayChecked(!isTuesdayChecked) }} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isTuesdayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>T</Text></View>
                        <View onClick={() => { setIsWednesdayChecked(!isWednesdayChecked) }} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isWednesdayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>W</Text></View>
                        <View onClick={() => { setIsThursdayChecked(!isThursdayChecked) }} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isThursdayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>T</Text></View>
                        <View onClick={() => { setIsFridayChecked(!isFridayChecked) }} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isFridayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>F</Text></View>
                        <View onClick={() => { setIsSaturdayChecked(!isSaturdayChecked) }} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isSaturdayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>S</Text></View>
                        <View onClick={() => { setIsSundayChecked(!isSundayChecked) }} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isSundayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>S</Text></View>
                    </View>
                </View>
                <View style={styles.filterContentContainer}>
                    <Text style={styles.underHeading}>AVAILABLE BETWEEN</Text>

                    <View style={styles.dateContainer}>

                        <DatePicker
                            style={{
                                width: 150,
                            }}
                            mode="date"
                            placeholder="From"
                            format="YYYY-MM-DD"
                            minDate="2021-03-05"
                            maxDate="2021-06-05"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                
                            }}
                        />

                        <DatePicker
                            style={{
                                width: 150,
                            }}
                            mode="date"
                            placeholder="To"
                            format="YYYY-MM-DD"
                            minDate="2021-03-05"
                            maxDate="2021-06-05"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                            }}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trainer Picker')}>
                        <Text style={styles.buttonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        height: '100%'
    },
    grabber: {
        width: 70,
        height: 4,
        backgroundColor: '#C4C4C4',
        marginTop: 15,
        borderRadius: 100,
        alignSelf: 'center'
    },
    filterContent: {
        textAlign: 'center'
    },
    filterContentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: {
            width: 3,
            height: 5

        }
        // boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.15)',
    },
    heading: {
        fontSize: 42,
        fontFamily: 'OpenSans-ExtraBold'
    },
    underHeading: {
        fontSize: 16,
        fontFamily: 'OpenSans-ExtraBold',
        alignSelf: 'flex-start',
        marginBottom: 10
    },
    bold: {
        fontFamily: 'OpenSans-Bold',
    },
    weekdaysCircleContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 15
    },
    button: {
        backgroundColor: '#000',
        padding: 8,
        borderRadius: 100
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
});