import React from 'react';
import {StyleSheet, View, Text, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import ReviewListItem from './reviewListItem'


export default function TrainerPopupInfo(props) {
    const trainer = props.trainer

    return (
        <View>
            <View style={styles.keyInfo}>
                <Image style={styles.profileImg} source={{ uri: trainer.profileImg }} />
                <View>
                    <Text style={styles.name}>{trainer.name}</Text>
                    <View style={styles.iconsContainer}><Icon style={styles.icon} name='timer' size={25} /><Text style={styles.bold}>{trainer.durationFrom} - {trainer.durationTo} min</Text></View>
                    <View style={styles.iconsContainer}><Icon style={styles.icon} name='location-on' size={25} /><Text style={styles.bold}>{trainer.location}</Text></View>
                    <View style={styles.iconsContainer}><Icon style={styles.icon} name='star' size={25} /><Text style={styles.bold}>{trainer.numberOfReviews} reviews</Text></View>
                </View>
            </View>

            <Text style={styles.bold}>Description</Text>
            <Text>{trainer.description}</Text>

            <View style={styles.weekdaysSection}>
                <Text style={styles.bold}>Weekdays available</Text>
                <View style={styles.weekdaysCircleContainer}>
                    <View style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: trainer.weekdaysAvailable.includes('Tuesday') ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>T</Text></View>
                    <View style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: trainer.weekdaysAvailable.includes('Wednesday') ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>W</Text></View>
                    <View style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: trainer.weekdaysAvailable.includes('Thursday') ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>T</Text></View>
                    <View style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: trainer.weekdaysAvailable.includes('Monday') ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>M</Text></View>
                    <View style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: trainer.weekdaysAvailable.includes('Friday') ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>F</Text></View>
                    <View style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: trainer.weekdaysAvailable.includes('Saturday') ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>S</Text></View>
                    <View style={{ padding: 10, borderRadius: 100, height: 40, width: 40, textAlign: 'center', backgroundColor: trainer.weekdaysAvailable.includes('Sunday') ? '#FDB339' : '#F6F6F6' }}><Text style={styles.bold}>S</Text></View>
                </View>
            </View>

            <View style={styles.reviewSection}>
                <View>
                    <Text style={styles.bold}>Reviews</Text>
                    <Text>{trainer.numberOfReviews} reviews</Text>
                    <View style={styles.starContainer}>
                        <Icon name='star' size={20} color='#FDB339' />
                        <Icon name='star' size={20} color='#FDB339' />
                        <Icon name='star' size={20} color='#FDB339' />
                        <Icon name='star' size={20} color='#FDB339' />
                        <Icon name='star' size={20} color='#C4C4C4' />
                    </View>
                </View>
                <View>
                    <Text style={styles.bold}>Overall rating</Text>
                    <Text style={styles.rating}>{trainer.overallRating}</Text>
                </View>
            </View>

            <FlatList data={trainer.reviews} renderItem={({ item }) => (<ReviewListItem key={item.key} review={item} />)} />
        </View>
    );
}

const styles = StyleSheet.create({
    keyInfo: {
        flexDirection: 'row',
        marginBottom: 25
    },
    profileImg: {
        height: 120,
        width: 120,
        borderRadius: 100,
        marginRight: 25,
    },
    iconsContainer: {
        flexDirection: 'row',
        marginBottom: 2
    },
    name: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 10
    },
    bold: {
        fontWeight: 600,
    },
    icon: {
        marginRight: 10
    },
    weekdaysSection: {
        marginTop: 25,
        marginBottom: 25
    },
    weekdaysCircleContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    reviewSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    starContainer: {
        flexDirection: 'row'
    },
    rating: {
        fontSize: 30
    }
});