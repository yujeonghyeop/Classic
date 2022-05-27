import React from 'react'
import{View, TouchableOpacity,Text,Image} from 'react-native'
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
                <Text style={testpageStyle.styledQ}>Q 2</Text>
                <Text style={testpageStyle.styledQ1}>.</Text>
            </View>
            <View style ={testpageStyle.styledBox}>
                <Text style={testpageStyle.styledFont}>길을 가다가 넘어졌다</Text>
                <Text style={testpageStyle.styledFont}>가장 먼저 하는 일은?</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems:'space-between', marginTop:10, padding:40}}>
           
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getSoc()
                    navigation.navigate("Test3")
                }}>
                    <Text style={parameters.buttonTitle}>주변에 나를 본 사람이 있는지 확인한다</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getPer()
                    navigation.navigate("Test3")
                }}>
                    <Text style={parameters.buttonTitle}>내 몸에 다친곳이 있는지 확인한다</Text>
                </TouchableOpacity>
            </View>
            <Progress.Bar progress={0.2} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />
        </View>
    )
}