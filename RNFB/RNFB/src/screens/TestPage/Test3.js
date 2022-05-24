import React from 'react'
import{View, TouchableOpacity,Text,Image} from 'react-native'
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
            <View style={{flexDirection: 'row'}}>
                <Text style={testpageStyle.styledQ}>Q 3</Text>
                <Text style={testpageStyle.styledQ1}>.</Text>
            </View>
            <View style ={testpageStyle.styledBox}>
                <Text style={testpageStyle.styledFont}>친구와의 약속이 깨졌다</Text>
                <Text style={testpageStyle.styledFont}>나의 행동은?</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems:'space-between', marginTop:10, padding:40}}>
           
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getSoc()
                    navigation.navigate("Test4")
                }}>
                    <Text style={parameters.buttonTitle}>편성표를 켜서 프로그램을 확인한다</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getPer()
                    navigation.navigate("Test4")
                }}>
                    <Text style={parameters.buttonTitle}>돌려보면서 재밌는게 나오면 멈춘다</Text>
                </TouchableOpacity>
            </View>
            <Progress.Bar progress={0.3} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />
        </View>
    )
}