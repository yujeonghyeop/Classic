import React from 'react'
import{View, Text,Image} from 'react-native'
import {Button} from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';


export default function Test8({navigation}){
    const increment = firebase.firestore.FieldValue.increment(4)
    const user = firebase.auth().currentUser;
    const email = user.email;
    getPer = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            '총체' : increment
        })
    }
    getSoc = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            '분석' : increment
        })
    }
    return(
        <View style = {testpageStyle.container}>
            <Image source={logo} style={testpageStyle.logo} />
            <Text style={testpageStyle.styledQ}>Q 8</Text>
            <View style ={testpageStyle.styledBox}>      
            <Text style={testpageStyle.styledFont}>친구가 할 말이 있다고 한다.</Text>
            <Text style={testpageStyle.styledFont}>당신은 뭐로 얘기를 할 것인가?</Text>
            </View>
            <Button
            title = "전화"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getSoc()
                    navigation.navigate("Test9")
                }}
                />
            <Button
            title = "메신저"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getPer()
                    navigation.navigate("Test9")
                }}
                />
            <Progress.Bar progress={0.8} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />

        </View>
    )
}