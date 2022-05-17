import React from 'react'
import{View, Text, StyleSheet,Image} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';


export default function Test1({navigation}){
    const increment = firebase.firestore.FieldValue.increment(4)
    const user = firebase.auth().currentUser;
    const email = user.email; //현재 접속죽인 user의 email을 가져온다.
    console.log(email)
    getPlan = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            "이성" : increment
        })
    }
    getCnt = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            "감성" : increment
        })
    }
    return(

        <View style = {testpageStyle.container}>
            <Image source={logo} style={testpageStyle.logo} />
            <Text style={testpageStyle.styledQ}>Q 1</Text>
            <View style ={testpageStyle.styledBox}>
                <Text style={testpageStyle.styledFont}>TV를 틀고 뭘 볼지 정하는</Text>
                <Text style={testpageStyle.styledFont}>나의 모습은?</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems:'space-between', padding:40}}>
                <Button
            title = "편성표를 켜서 프로그램을 확인한다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getPlan()
                    navigation.navigate("Test2")
                }}
                />
            <Button
            title = "돌려보면서 재밌는게 나오면 멈춘다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getCnt()
                    navigation.navigate("Test2")
                }}
                />
            </View>
            
            <Progress.Bar progress={0.1} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />
        </View>
    )
}