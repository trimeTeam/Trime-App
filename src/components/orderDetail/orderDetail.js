import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'

const { width, height } = Dimensions.get('screen')

const date = new Date();

let customFonts = {
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
  'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
};



export default function orderDetail({ route, navigation }) {
  const trainer = route.params.trainer
  const date = route.params.date
  const time = route.params.time

  return(
<View style={styles.mainContainer}>

<View style={styles.containerFirst}>
  <Image style = {styles.profileImg} source={{uri: trainer.profileImg }}></Image>
  <View style={styles.profileInfoContainer}>
    <Text style= {styles.profileTxt}>{trainer.name}</Text>
    <Text style= {{color: '#FDB339'}}>Personal Trainer </Text>
  </View>
</View>

  <View style={styles.containerFirst}>
    <Text style = {styles.when}>When: </Text>
    <Text style = {{fontWeight: 'bold'}}>{date}, {time} </Text>
  </View>
  <View style={styles.container}>
    <Text style = {styles.when}>Length: </Text>
    <Text style = {{fontWeight: 'bold'}}>60 Minutes</Text>
  </View>
  <View style={styles.container}>
    <Text style = {styles.when}>Price: </Text>
    <Text style = {{fontWeight: 'bold'}}>SEK {trainer.costTo}</Text>
  </View>

  <View style={styles.containerFirst}>
    <Text style = {styles.where}>Type: </Text>
    <Text>Gym</Text>
  </View>
  <View style={styles.container}>
    <Text style = {styles.where}>Contact: </Text>
    <Text>+46 73 506 66 97</Text>
  </View>
  <View style={styles.container}>
    <Text style = {styles.where}>Email: </Text>
    <Text>{trainer.name.replace(' ', '.')}@trime.com</Text>
  </View>

  <View style={styles.containerFirst}>
    <Text style = {styles.where}>Location: </Text>
    <Text>{trainer.address}</Text>
  </View>

  <View style={styles.paymentContainerFirst}>
    <View style={styles.payment}>

        <Icon style ={styles.icon} name= 'cc-visa' size={40} />

      <Text style={styles.paymentText}>Visa</Text>
    </View>
    <View style={{marginVertical: 'atuo'}}>
      <CheckBox
      checked='true'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor= '#FDB339'

      />
    </View>
  </View>

    <View style={styles.paymentContainer}>
    <View style={styles.payment}>
        <Icon style ={styles.icon} name= 'cc-mastercard' size={40} />
        <Text style={styles.paymentText}>Master</Text>
    </View>
    <CheckBox
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
    />
    </View>


    <View style={styles.paymentContainer}>
    <View style={styles.payment}>
        <Icon style ={styles.icon} name= 'cc-amex' size={40} />
        <Text style={styles.paymentText}>Amex</Text>
    </View>
    <CheckBox
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
    />
    </View>

    <View style={styles.paymentContainer}>
    <View style={styles.payment}>
        <Icon style ={styles.icon} name= 'apple-pay' size={40} />
        <Text style={styles.paymentText}>Apple Pay</Text>
    </View>
    <CheckBox
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
    />
    </View>

  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Payment')}>
    <Text style={styles.buttonText}>Checkout</Text>
  </TouchableOpacity>
        
  <TouchableOpacity style={styles.buttonGuest} onPress={()=>navigation.goBack()}>
    <Text style={styles.buttonText}>Cancel</Text>
  </TouchableOpacity>


</View>);

}

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,  
    padding: 10,
    backgroundColor: 'white'
  },

  containerFirst: {
    marginTop: 30,
    flexDirection: 'row',
  },

  profileInfoContainer: {
    justifyContent: 'center'
  },
  container: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',

  },

  profileImg: {
    padding: 40,
    marginRight: 20,
    borderRadius: 100
  },

  profileTxt: {
    fontFamily: 'OpenSans-Bold',
    paddingTop: 1,
    fontSize: 20,
  },

  when: {
    fontFamily: 'OpenSans-Bold',
    width: 70,
  },
  where: {
    width: 70,
    fontFamily: 'OpenSans-Regular',
  },

  button: {
    marginTop: 40,
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: '#FDB339',
    borderRadius: 50,
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: 'black',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
  },

  buttonGuest: {
    marginTop: 20,
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 50,
    justifyContent: 'center'
  },

  payment: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paymentContainerFirst: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'space-between'

  },
  paymentContainer: {
    // marginTop:20,
    flexDirection: 'row',
    color: 'grey',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'space-between'

  },
  icon: {
    padding: 5,
    marginRight: 10,
    color: 'grey'
  },

  iconSelected: {
    padding: 5,
    marginRight: 20,
    marginVertical: 10,
  },

  paymentText: {
    marginLeft: 15,
    fontSize: 18,
    textAlign: 'left',
    color: '#616161',
    fontFamily: 'OpenSans-Regular',
  }

});
