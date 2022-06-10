// 상세보기 페이지

// import React from 'react';
import React,{useState, useEffect, useContext} from 'react';
import firestore, { firebase } from '@react-native-firebase/firestore';
import{View, Text, StyleSheet, Image,ScrollView} from 'react-native'
//import {Button} from 'react-native-elements';
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
//import { buttonTitleB } from '../global/fontStyles';
import {setting, detailStyle} from '../global/styles';
import { detail } from '../global/fontStyles';
//import auth from '@react-native-firebase/auth';
//import { SignInContext } from '../contexts/authContext';

export default function Detail({navigation}){
    const [more_exp, setMore_exp] = useState([]);
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

    console.log(more_exp);
    return(
        <View style>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={Logo} style={logo}/>
                    <View style={detailStyle.styledBox}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text style={detail}>{more_exp[0]}{"\n\n"}</Text>
                            <Text style={detail}>{more_exp[1]}{"\n\n"}</Text>
                            <Text style={detail}>{more_exp[2]}</Text>
                        </View>
                        </ScrollView>
                    </View>
            </ScrollView>
        </View>
        
    )
}
