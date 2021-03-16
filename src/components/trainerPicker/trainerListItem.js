import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

let customFonts = {
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
};

export default function TrainerListItem(props) {
 

    return (
        <View style={styles.container} onClick={() => {props.displayTrainerPopup(props.trainer)}}>
        <StatusBar style="auto" />
        <Image style={styles.profileImg} source={{uri: props.trainer.profileImg}}/>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{props.trainer.name}</Text>
            <View style={styles.activitiesContainer}>
              {props.trainer.typeOfTraining.map((activity, index) => {
                return (
                  <View key={index} style={styles.iconContainer}>
                    <Image style={styles.icon} source={activity.icon} />
                  </View>
                )
              })}
            </View>
            <Text style={styles.regularFont}><Icon name='timer' size={22}/> {props.trainer.durationFrom} - {props.trainer.durationTo} min</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.regularFont}><Icon name={props.trainer.location == 'Remote'? 'mobile-screen-share':'location-on'} size={22}/> {props.trainer.location}</Text>
                <Text style={styles.pricePill}>From <Text style={styles.bold}>{props.trainer.costFrom} SEK</Text></Text>
            </View>
        </View>
        <Icon style={styles.rightIcon} name='chevron-right' size={25} color='grey'/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  profileImg: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: 20,
  },
  textContainer: {
    flex:1
  },
  bold: {
    fontFamily: 'OpenSans-Bold'
  },
  regularFont: {
    fontFamily: 'OpenSans-Regular', 
  },
  name: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16
  },
  activitiesContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  iconContainer: {
    backgroundColor: '#FDB339',
    padding: 5,
    borderRadius: 100,
    marginRight: 6
  },
  icon: {
    width: 17,
    height: 17,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  pricePill: {
    backgroundColor: '#000',
    color: '#FFF',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 100,
    fontFamily: 'OpenSans-Regular'
  },
  rightIcon: {
    alignSelf: 'center'
  }
});