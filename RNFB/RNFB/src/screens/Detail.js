// 상세보기 페이지

// import React from 'react';
import React,{useState, useEffect, useContext} from 'react';
import firestore, { firebase } from '@react-native-firebase/firestore';
import{View, Text, StyleSheet, Image} from 'react-native'
//import {Button} from 'react-native-elements';
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
//import { buttonTitleB } from '../global/fontStyles';
import {setting, myAccountstyle,} from '../global/styles';
//import auth from '@react-native-firebase/auth';
//import { SignInContext } from '../contexts/authContext';

export default function Detail({navigation}){
    const [more_exp, setMore_exp] = useState("");
    const user = firebase.auth().currentUser;
    const email = user.email;
    useEffect(() => {
        const first = firestore().collection("회원").doc(email);
        first.get().then((doc)=>{
            if (doc.exists){
                const info = doc.data();
                const longsen = info["more_exp"];
                setMore_exp(longsen);
            }
        })
      },[]);

    return(
        <View style = {myAccountstyle.container}>
            <Image source={Logo} style={logo}/>
            <View style={myAccountstyle.styledBox}>
            <Text style={{color: '#6767A6', fontSize: 20, fontFamily: 'IBMPlexSansKR-Regular'}}>
                {more_exp}
                </Text>
            </View>
        </View>
        
    )
}
