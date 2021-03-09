import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen')

import Icon from 'react-native-vector-icons/FontAwesome'





export default function Payment({ navigation }) {

    const [cardNumber, setCardNumber] = useState('')
    const [validUntil, setValidUntil] = useState('')
    const [cvv, setCvv] = useState('')
    const [name, setName] = useState('')

    function handleCardNoInput (value) {
        setCardNumber(value)
    }

    function handleValidUntilInput (value) {
        setValidUntil(value)
    }

    function handleCvvInput (value) {
        setCvv(value)
    }

    function handleNameInput (value) {
        setName(value)
    }

    useEffect(() => {
        if (cardNumber.length === 4 || cardNumber.length === 9 || cardNumber.length === 14) {
            setCardNumber(cardNumber + ' ')
        }
        
        else if (validUntil.length === 2) {
            setValidUntil(validUntil + '/')
        }

    }, [cardNumber, validUntil])

    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Text style={styles.bold}>Card Number</Text>
                <View style={styles.cardNoInputContainer}>
                    <Icon name='cc-visa' size={28}/>
                    <TextInput style={styles.cardNoInput} placeholder='**** **** **** ****' maxLength={19} value={cardNumber} onChangeText={handleCardNoInput}/>
                </View>
                <View style={styles.validationAndCVVContainer}>
                    <Text>
                        <Text style={styles.bold}>Valid until</Text>
                        <TextInput style={styles.inputFields} placeholder='MM/YY' maxLength={5} value={validUntil} onChangeText={handleValidUntilInput}/>
                    </Text>
                    <Text>
                        <Text style={styles.bold}>CVV</Text>
                        <TextInput style={styles.inputFields} placeholder='000' maxLength={3} value={cvv} onChangeText={handleCvvInput}/>
                    </Text>
                    <Text style={styles.small}>The last three digits on the back of the card</Text>
                </View>
                    <Text style={styles.bold}>Card holder</Text>
                    <TextInput style={styles.nameInput} placeholder='Name Namesson' value={name} onChangeText={handleNameInput}/>

                <Text style={styles.small}>Save card data for future payments</Text>

                <TouchableOpacity style={styles.payBtn} onPress={()=> navigation.navigate('Booking Confirmed')}>
                    <Text style={styles.btnText}>Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelBtn} onPress={()=> navigation.goBack()}>
                    <Text style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        height: height,
        padding: 20
    },
    bold: {
        fontWeight: 600
    },
    small: {
        fontSize: 11,
    },
    cardNoInputContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    cardNoInput: {
        marginLeft: 15
    },
    validationAndCVVContainer: {
        flexDirection: 'row',
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputFields: {
        paddingVertical: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        maxWidth: 70,
        marginRight: 10
    },
    nameInput: {
        paddingVertical: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 30
    },
    btnText: {
        fontSize: 18,
        fontWeight: 600,
        alignSelf: 'center'
    },
    payBtn: {
        padding: 14,
        backgroundColor: '#FDB339',
        borderRadius: 100,
        marginVertical: 20
    },
    cancelBtn: {
        padding: 14,
        backgroundColor: '#F6F6F6',
        borderRadius: 100
    }

});