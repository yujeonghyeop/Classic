// 상세보기 페이지

// import React from 'react';
import React,{useContext} from 'react';
import{View, Text, StyleSheet, Image} from 'react-native'
//import {Button} from 'react-native-elements';
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
//import { buttonTitleB } from '../global/fontStyles';
import {setting, myAccountstyle,} from '../global/styles';
//import auth from '@react-native-firebase/auth';
//import { SignInContext } from '../contexts/authContext';

export default function Detail({navigation}){


    return(
        <View style = {myAccountstyle.container}>
            <Image source={Logo} style={logo}/>
            <View style={myAccountstyle.styledBox}>
            <Text style={{color: '#6767A6', fontSize: 25, fontFamily: 'IBMPlexSansKR-Regular'}}>
                여기에 넣어
                </Text>
            </View>
        </View>
        
    )
}
