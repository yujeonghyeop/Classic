import React from 'react'
import {View, Text, TouchableOpacity,Image} from 'react-native'
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
                <Text style={testpageStyle.styledQ}>Q 4</Text>
                <Text style={testpageStyle.styledQ1}>.</Text>
            </View>
            <View style ={testpageStyle.styledBox}>
                <Text style={testpageStyle.styledFont}>어떤 수업을 선호하는가?</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems:'space-between', marginTop:10, padding:40}}>
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getSoc()
                    navigation.navigate("Test5")
                }}>
                    <Text style={parameters.buttonTitle}>학점을 잘 주는 쉬운 수업</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getPer()
                    navigation.navigate("Test5")
                }}>
                    <Text style={parameters.buttonTitle}>전공에 대해 얻어가는게 많은 수업</Text>
                </TouchableOpacity>
            </View>
            <Progress.Bar progress={0.4} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />
        </View>
    )
}