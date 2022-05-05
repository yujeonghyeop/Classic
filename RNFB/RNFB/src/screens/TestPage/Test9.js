import React from 'react'
import{View, Text,Image} from 'react-native'
import {Button} from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';


export default function Test9({navigation}){
    const increment = firebase.firestore.FieldValue.increment(4)
    const user = firebase.auth().currentUser;
    const email = user.email;
    getPlan = async () =>{
        const userDocument = firestore().collection(email).
        doc('사고유형')
        .update({
            '계획형' : increment
        })
    }
    getCnt = async () =>{
        const userDocument = firestore().collection(email).
        doc('사고유형')
        .update({
            '즉흥형' : increment
        })
    }
    return(

        <View style = {testpageStyle.container}>
            <Image source={logo} style={testpageStyle.logo} />
            <Text style={testpageStyle.styledQ}>Q 9</Text>
            <View style ={testpageStyle.styledBox}>                 
            <Text style={testpageStyle.styledFont}>친구들이 집들이를 온다고 한다.</Text>
            <Text style={testpageStyle.styledFont}>치킨을 시키려는데 어떻게 할까?</Text>
            </View>
            <Button
            title = "인원수를 파악하여 미리 시켜 놓는다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getPlan()
                    navigation.navigate("cal")
                }}
                />
            <Button
            title = "일단 시키고 모자라면 또 시킨다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getCnt()
                    navigation.navigate("cal")
                }}
                />
            <Progress.Bar progress={1.0} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />

        </View>
    )
}