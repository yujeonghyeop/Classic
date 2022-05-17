import React from 'react'
import{View, Text,Image} from 'react-native'
import {Button} from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';


export default function Test5({navigation}){
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
            <Text style={testpageStyle.styledQ}>Q 5</Text>
            <View style ={testpageStyle.styledBox}>
            <Text style={testpageStyle.styledFont}>팀 프로젝트에 참여했을 때</Text>
            <Text style={testpageStyle.styledFont}>나의 역할은?</Text>
            </View>
            <Button
            title = "활발히 의견을 낸다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getAct()
                    navigation.navigate("Test6")
                }}
                />
            <Button
            title = "내가 필요한 시점에 의견을 낸다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getDif()
                    navigation.navigate("Test6")
                }}
                />
            <Progress.Bar progress={0.5} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />
        </View>
    )
}