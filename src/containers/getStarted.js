import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';  
import TrainerTrainee from '../components/trainerTrainee/trainerTrainee';
import SplashScreen from '../components/splashScreen/splashScreen';

export default class GetStarted extends Component {  
    constructor() {
        super();
        this.state = {  
        isVisible: true,   
        }
    }

    hideSplashScreen = () => {  
        this.setState({   
        isVisible : false   
        });  
    }  
   
   componentDidMount(){  
        let that = this;  
        setTimeout(function(){  
            that.hideSplashScreen();  
        }, 3000);  
    }  
    
    goToTrainerPicker = () => {
        this.props.navigation.navigate('Trainer Picker');
    }

   
    render() {  
         return(  
             <View>  
                 {this.state.isVisible === true ? <SplashScreen></SplashScreen> :
                     <TrainerTrainee getStartedBtn={this.goToTrainerPicker}></TrainerTrainee>}  
            </View>  
        );  
    }  
}
