import React from 'react'
import {View, Text, TouchableOpacity,Image} from 'react-native'
import {Button} from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';


export default function Test6({navigation}){
    const increment = firebase.firestore.FieldValue.increment(4)
    const user = firebase.auth().currentUser;
    const email = user.email;
    getPlan = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            '이성' : increment
        })
    }
    getCnt = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            '감성' : increment
        })
    }
    return(

        <View style = {testpageStyle.container}>
            <Image source={logo} style={testpageStyle.logo} />
            <View style={{flexDirection: 'row'}}>
                <Text style={testpageStyle.styledQ}>Q 6</Text>
                <Text style={testpageStyle.styledQ1}>.</Text>
            </View>
            <View style ={testpageStyle.styledBox}>
                <Text style={testpageStyle.styledFont}>친구가 몸이 아프다고 말했을 때,</Text>
                <Text style={testpageStyle.styledFont}>나의 반응은?</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems:'space-between', marginTop:10, padding:40}}>
           
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getCnt()
                    navigation.navigate("Test7")
                }}>
                    <Text style={parameters.buttonTitle}>괜찮아? 약 좀 사다줄까?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getPlan()
                    navigation.navigate("Test7")
                }}>
                    <Text style={parameters.buttonTitle}>왜 아파? 어디가 아픈데?</Text>
                </TouchableOpacity>
            </View>
            <Progress.Bar progress={0.6} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />

        </View>
    )
}