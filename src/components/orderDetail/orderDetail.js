import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'

const {width, height} = Dimensions.get('screen')

const date = new Date();

let customFonts = {
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
  'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
};


export default function orderDetail({navigation}) {
  return(
<View style={styles.mainContainer}>

<View style={styles.containerFirst}>
  <Image style = {styles.profileImg} source={{uri: 'data:image/jpeg;base64,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'}}></Image>
  <View style={styles.profileInfoContainer}>
    <Text style= {styles.profileTxt}>Rafe Nasir</Text>
    <Text style= {{color: '#FDB339'}}>Personal Trainer </Text>
  </View>
</View>

  <View style={styles.containerFirst}>
    <Text style = {styles.when}>When: </Text>
    <Text style = {{fontWeight: 'bold'}}>Mention date here </Text>
  </View>
  <View style={styles.container}>
    <Text style = {styles.when}>Length: </Text>
    <Text style = {{fontWeight: 'bold'}}>60 Minutes</Text>
  </View>
  <View style={styles.container}>
    <Text style = {styles.when}>Price: </Text>
    <Text style = {{fontWeight: 'bold'}}>SEK 50</Text>
  </View>

  <View style={styles.containerFirst}>
    <Text style = {styles.where}>Type: </Text>
    <Text>Gym</Text>
  </View>
  <View style={styles.container}>
    <Text style = {styles.where}>Contact: </Text>
    <Text>Give Some Phone Number</Text>
  </View>
  <View style={styles.container}>
    <Text style = {styles.where}>Email: </Text>
    <Text>Lorum Ipsum@something.com</Text>
  </View>

  <View style={styles.containerFirst}>
    <Text style = {styles.where}>Location: </Text>
    <Text>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</Text>
  </View>

  <View style={styles.paymentContainerFirst}>
    <View style={styles.payment}>
      {/* <Text style = {styles.iconSelected} > */}
        <Icon name= 'cc-visa' size={40} />
      {/* </Text> */}
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
  mainContainer:{
    height: height,
    width: width,  
    padding: 15,
    backgroundColor: 'white'  
  },

  containerFirst:{
    marginTop:30,
    flexDirection: 'row',
  },

  profileInfoContainer: {
    justifyContent: 'center'
  },
  container: {
    marginTop:5,
    flexDirection: 'row',
    alignItems: 'center',

  },

  profileImg:{
    padding: 40,
    marginRight: 20,
    borderRadius:100
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
    alignSelf:'stretch',
    height: 50,
    backgroundColor: '#FDB339',
    borderRadius: 50,
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: 'black',
    margin:'auto',
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
  },

  buttonGuest: {
    marginTop: 20,
    alignSelf:'stretch',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 50,
    justifyContent: 'center'
  },

  payment: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paymentContainerFirst:{
    marginTop:20,
    flexDirection:'row', 
    backgroundColor: '#F6F6F6', 
    alignItems: 'center',
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    justifyContent:'space-between'

  },
  paymentContainer: {
    // marginTop:20,
    flexDirection:'row', 
    color: 'grey',
    borderBottomColor: 'gray', 
    borderBottomWidth: 1,
    justifyContent:'space-between'
    
  },
  icon:{
  padding: 5,
  marginRight:10,
  color:'grey'
  },

  iconSelected:{
  padding: 5,
  marginRight:20,
  marginVertical: 10,
  },

  paymentText:{
    marginLeft: 15,
    fontSize: 18, 
    textAlign: 'left',
    color: '#616161',
    fontFamily: 'OpenSans-Regular',
  }
  
});
