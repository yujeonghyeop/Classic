import React from 'react'
import {View, Text, TouchableOpacity,Image} from 'react-native'
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
            '자기지향' : increment
        })
    }
    getSoc = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            '사회지향' : increment
        })
    }
    return(
        <View style = {testpageStyle.container}>
            <Image source={logo} style={testpageStyle.logo} />
            <View style={{flexDirection: 'row'}}>
                <Text style={testpageStyle.styledQ}>Q 8</Text>
                <Text style={testpageStyle.styledQ1}>.</Text>
            </View>
            <View style ={testpageStyle.styledBox}>
                <Text style={testpageStyle.styledFont}>나의 실수를 대하는 방법은?</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems:'space-between', marginTop:10, padding:40}}>
           
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getPer()
                    navigation.navigate("Test9")
                }}>
                    <Text style={parameters.buttonTitle}>나의 실수에서 교훈을 얻기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getSoc()
                    navigation.navigate("Test9")
                }}>
                    <Text style={parameters.buttonTitle}>다른 사람들이 모르도록 숨기기</Text>
                </TouchableOpacity>
            </View>
            <Progress.Bar progress={0.8} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />

        </View>
    )
}