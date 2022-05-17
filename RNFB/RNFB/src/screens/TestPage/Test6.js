import React from 'react'
import{View, Text,Image} from 'react-native'
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
            <Text style={testpageStyle.styledQ}>Q 6</Text>
            <View style ={testpageStyle.styledBox}>      
            <Text style={testpageStyle.styledFont}>수업에서 과제가 나왔다.</Text>
            <Text style={testpageStyle.styledFont}>가장 먼저 해야 할 일은?</Text>
            </View>
            <Button
            title = "과제를 하기 전에 계획을 먼저 짠다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getPlan()
                    navigation.navigate("Test7")
                }}
                />
            <Button
            title = "자료 조사 먼저 한다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getCnt()
                    navigation.navigate("Test7")
                }}
                />
            <Progress.Bar progress={0.6} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />

        </View>
    )
}