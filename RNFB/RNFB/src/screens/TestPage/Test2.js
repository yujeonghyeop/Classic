import React from 'react'
import{View, Text,Image} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';


export default function Test2({navigation}){
    const increment = firebase.firestore.FieldValue.increment(4)
    const user = firebase.auth().currentUser;
    const email = user.email;
    getPer = async () =>{
        const userDocument = firestore().collection(email).
        doc('학습성격')
        .update({
            '개인형' : increment
        })
    }
    getSoc = async () =>{
        const userDocument = firestore().collection(email).
        doc('학습성격')
        .update({
            '사회형' : increment
        })
    }
    return(
        <View style = {testpageStyle.container}>
            <Image source={logo} style={testpageStyle.logo} />
            <Text style={testpageStyle.styledQ}>Q 2</Text>
            <View style ={testpageStyle.styledBox}>
            <Text style={testpageStyle.styledFont}>친구와의 약속이 깨졌다</Text>
            <Text style={testpageStyle.styledFont}>나의 행동은?</Text>
            </View>
            <Button
            title = "다른 친구와의 약속을 잡아보려 한다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getSoc()
                    navigation.navigate("Test3")
                }}
                />
            <Button
            title = "그날은 쉰다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getPer()
                    navigation.navigate("Test3")
                }}
                />
            <Progress.Bar progress={0.2} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />
        </View>
    )
}