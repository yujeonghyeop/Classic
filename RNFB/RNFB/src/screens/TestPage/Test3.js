import React from 'react'
import{View, Text,Image} from 'react-native'
import {Button} from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';

export default function Test3({navigation}){
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
            <Text style={testpageStyle.styledQ}>Q 3</Text>
            <View style ={testpageStyle.styledBox}>
            <Text style={testpageStyle.styledFont}>재밌는 유튜브 영상을 봤을 때 </Text>
            <Text style={testpageStyle.styledFont}>하는 행동은?</Text>
            </View>
            <Button
            title = "댓글을 단다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getAct()
                    navigation.navigate("Test4")
                }}
                />
            <Button
            title = "조용히 떠난다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getDif()
                    navigation.navigate("Test4")
                }}
                />
            <Progress.Bar progress={0.3} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />
        </View>
    )
}