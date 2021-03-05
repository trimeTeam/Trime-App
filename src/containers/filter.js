import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Slider from '@react-native-community/slider'

import ActivitiesBar from '../components/trainerPicker/activitiesBar'




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
                    <Text style={styles.bold}>{typeof sliderValue === 'string'? sliderValue : Math.round(sliderValue) + ' SEK'}</Text>
                </View>
                <View style={styles.filterContentContainer}>
                    <Text style={styles.underHeading}>AVAILABLE DAYS</Text>
                    <View style={styles.weekdaysCircleContainer}>
                    <View onClick={() => {setIsMondayChecked(!isMondayChecked)}} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isMondayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>M</Text></View>
                    <View onClick={() => {setIsTuesdayChecked(!isTuesdayChecked)}} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isTuesdayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>T</Text></View>
                    <View onClick={() => {setIsWednesdayChecked(!isWednesdayChecked)}} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isWednesdayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>W</Text></View>
                    <View onClick={() => {setIsThursdayChecked(!isThursdayChecked)}} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isThursdayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>T</Text></View>
                    <View onClick={() => {setIsFridayChecked(!isFridayChecked)}} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isFridayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>F</Text></View>
                    <View onClick={() => {setIsSaturdayChecked(!isSaturdayChecked)}} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isSaturdayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>S</Text></View>
                    <View onClick={() => {setIsSundayChecked(!isSundayChecked)}} style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: isSundayChecked ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>S</Text></View>
                </View>
                </View>
                <View style={styles.filterContentContainer}>
                    <Text style={styles.underHeading}>AVAILABLE BETWEEN</Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
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
    filterContent: {
        textAlign: 'center'
    },
    filterContentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        boxShadow: '0px 3px 5px 1px rgba(0, 0, 0, 0.15)',
    },
    heading: {
        fontSize: 42,
        fontWeight: 800
    },
    underHeading: {
        fontSize: 18,
        fontWeight: 800,
        alignSelf: 'flex-start',
        marginBottom: 10
    },
    bold: {
        fontWeight: 700
    },
    weekdaysCircleContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
});