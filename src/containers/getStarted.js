import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';  
import TrainerTrainee from '../components/trainerTrainee/trainerTrainee';
import TrainerTraineeRound from '../components/trainerTrainee/trainerTraineeRound';
import SplashScreen from '../components/splashScreen/splashScreen';

export default class GetStarted extends Component {  
    constructor(props) {
        super(props);
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
        }, 2900);  
    }  
    
    goToTrainerPicker = () => {
        this.props.navigation.navigate('Trainer Picker');
    }

    goToSignIn = () => {
        this.props.navigation.navigate('Sign In');
    }

   
    render() {  
         return(  
             <View>  
                 {this.state.isVisible === true ? <SplashScreen></SplashScreen> :
                     <TrainerTraineeRound getStartedBtn={this.goToTrainerPicker} signIn={this.goToSignIn}></TrainerTraineeRound>}  
            </View>  
        );  
    }  
}

