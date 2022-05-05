import React from 'react'
import{View, Text,Image} from 'react-native'
import {Button} from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';


export default function Test4({navigation}){
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
            <Text style={testpageStyle.styledQ}>Q 4</Text>
            <View style ={testpageStyle.styledBox}>
            <Text style={testpageStyle.styledFont}>팀 프로젝트를 해야 한다.</Text>
            <Text style={testpageStyle.styledFont}>팀원을 고르는 방식 중 선호하는 방식은?</Text>
            </View>
            <Button
            title = "친한 친구들 끼리 했으면 좋겠다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getSoc()
                    navigation.navigate("Test5")
                }}
                />
            <Button
            title = "교수님이 정해줬으면 좋겠다"
                buttonStyle =  {testpageStyle.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getPer()
                    navigation.navigate("Test5")
                }}
                />
            <Progress.Bar progress={0.4} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />
        </View>
    )
}