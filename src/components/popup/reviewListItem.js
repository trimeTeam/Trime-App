import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

let customFonts = {
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-SemiBold': require('../../assets/fonts/OpenSans-SemiBold.ttf'),
  'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
};

export default function ReviewListItem(props) {
 

    return (
        <View style={styles.container}>
            <Image style={styles.profileImg} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXc3Nz////s7Oz8/Pze3t7l5eXh4eHa2tr09PT5+fnm5ubx8fH39/fr6+vy8vLNeCb1AAAFeUlEQVR4nO2d25arIAyGVSIgat//cbdoOzM92DYxSuLOt9bMdf8VyAmIVWUYhmEYhmEYhmEYhmEYhmEYhmEYhmGcAyj9A3YEAPLfiSUCePDJj6V/x96c2YYzp16lhmEYhmEYLMC1dAnzv2v2dLIsyk+KfGr6GGPfN2Pb+lMJDL5vU3R1xsW+acbUXgXqlzkraOpukfcXN1yayZLzElau03dP6v7qbLJKzSKDfzbfo8qYQO9yDfBR4Cyy8WrN2H+lcCK2pX8qmsUk3wrMdpwbDZosGSA1l68FTnStqp5faCNG3cKoR2DwA17fRK9G4kjSN9Eo2Ypfe9DXEuXjE13hshely/wuzK/gWgV7keZlbnRevMJ2k8BpK8ouHqffRgiEd7gkWWAu97bswpkofJ1uXaQTSfQyrdK7kvcURiQmbHe0vrSKdaZ9uF3glJ+W1vEOhn2Yw35pGW9oGBTWo+SdiKp61xDtaxgcjfBluj1YZHL3rbSSFbanNDNRbnLKESzqpS1VWsoKnkeha8X6GiaFU7worWQNLoWNWBsy7UPJCnl8ad2LjYj/gUKeiC9YIU/WJlphf3qFLNWTaIXkU5lHhaWFrMIU8gXXwEzhQrDCwFMCJ7kKeVxNl8Rm3jzNtjrKdaVMG1FwsKi2Hz5l5JYWGYaI2El2NFXL4Gq6XvDdGqbMW25TmClpq/MpYmktr+FwMwtSnQ3XIhWrMDA1MQS7UzYbis1q2PbhKFUhUxNjSb1FakxMCsUuUjh/v5SrEyU0VswjGliM6OR2MYDH13SCb34Bi68Z5J4BVxXLMhXsaKadyJHWiHU0GWDYiKKbiSxd79hKfiAEDEeITSv7TeLmoC+2crqxeZlG4Y+9Nwd9NwpfpB+eN3+ml75IJyu2XU2M+110WaB4heATcaXGlCcuCF+jGaCmp71wJ/MLtYoS2555AmhdNyf5ZPSOaSeR4n6U70Z/AFLcb9Qs0uwMCUFReE3xCGGZDpJfPD1D8KbSa4oH8KWw6Dsmr0D7ml6ZQvBIIzq5F/TXQO5EyQ22FQB11uYUBcMfUMtUnZ/JoEKi6D73GiiF8fQKL6oytiuofSj22PcdqEfBGhUGVLSIupLSBVSd3ym0Ia5EdDqGRN2BvZgh+H3za1p0le9En6o9Miel6CJY6q3SF7S0fqlLKqwIEMh3hVWMM6sgbDgkFTxs4Mr08+gW1CGxChsvDUkP/YHWz/+LE52iwshyda9rvMwRkX7DZM8H3DD6IEwiJL63CIvIiyinAw3TsIE75tUqQmYb2ZbnA3loezmJ1w9XwLiH+X6ZDFlKYZZXUQZbo4mpKuNag2/2Wp2PdIfO/7p9SmVkdp7vya71SDv6tJtzWac77niqhLyZKaM7wI7F5C0M434SIX/y4AjX+QHX+2on11rYen+4GpJZ5S55GRn2j7fAYZHve1gTOp6yj51urIChxgKWCc87MbAcO/LNEdiB7Z0r4lXR49j8OQWWp1q7snGGBtecwD3pN2SrgDvHLUS+PE02I9PL5Z0ZyEak3WUuAD0Z17BGMx31+FiLCYlD+oBvzMX+EI86uGZAHABxFD/L/LyD6CnLNLB8yuEgaLmbgnTmB9J3orjGjx8DofUPmrYh7UaV6LLwCUKdqMrRkJ6FBU2OpiaNC9ET72fwERGoT84LgVeoy5XiU1Ngm712FHiFuoIFpbzQ0cD4ZUDb8PwK9ZS/C1iFmgr8BfStzXB+hVr6bDfwN29NoTTwCsWfOT0woK9MqVOYcAqDqj5UBqtQV6ctg89LTaE0TKEplA9aobZmYn0xhU9oU4if4GMKpWEK9SvEn8xoU4g/t9Cm8MOsMHikqmLnVDG/GHrS8aOnfSalsdHEmNILFTf+Ae5OXuugGr3wAAAAAElFTkSuQmCC'}}/>
            <View style={styles.textContainer}>
                <View style={styles.reviewHeader}>
                    <Text style={styles.user}>{props.review.user}</Text>
                    <Text style={styles.date}>{props.review.date}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Icon name='star' size={20} color='#FDB339'/>
                    <Text style={styles.rating}>{props.review.review}</Text>
                </View>
                <Text style={styles.regular}>{props.review.reviewText}</Text>  
                </View>
            <Icon style={styles.rightIcon} name='chevron-right' size={25} color='grey'/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4'
  },
  regular: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    marginTop: 4
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 20,
  },
  textContainer: {
    flex:1
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  user: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    marginBottom: 4
  },
  date: {
      fontFamily: 'OpenSans-Regular',
      color: '#C4C4C4',
      fontSize: 10
  },
  ratingContainer: {
      flexDirection: 'row'
  },
  rating: {
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: 3
  },
  rightIcon: {
    alignSelf: 'center'
  }
});