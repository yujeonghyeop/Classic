import React from 'react'
import {View, Text, TouchableOpacity,Image} from 'react-native'
import {Button} from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';


export default function Test7({navigation}){
    const increment = firebase.firestore.FieldValue.increment(4)
    const user = firebase.auth().currentUser;
    const email = user.email;
    getAct = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            '총체' : increment
        })
    }
    getDif = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            '분석' : increment
        })
    }
    return(
        <View style = {testpageStyle.container}>
            <Image source={logo} style={testpageStyle.logo} />
            <View style={{flexDirection: 'row'}}>
                <Text style={testpageStyle.styledQ}>Q 7</Text>
                <Text style={testpageStyle.styledQ1}>.</Text>
            </View>
            <View style ={testpageStyle.styledBox}>
                <Text style={testpageStyle.styledFont}>학습 과정에서</Text>
                <Text style={testpageStyle.styledFont}>내가 중요하게 생각하는 것은?</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems:'space-between', marginTop:10, padding:40}}>
           
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getAct()
                    navigation.navigate("Test8")
                }}>
                    <Text style={parameters.buttonTitle}>나만의 말과 규칙으로 바꾸어 이해하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getDif()
                    navigation.navigate("Test8")
                }}>
                    <Text style={parameters.buttonTitle}>원래 표현 그대로 잘 기억하기</Text>
                </TouchableOpacity>
            </View>
            <Progress.Bar progress={0.7} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />
        </View>
    )
}