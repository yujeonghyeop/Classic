import React from 'react'
import {View, Text, TouchableOpacity,Image} from 'react-native'
import { parameters, testpageStyle } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'
import logo from '../../images/logo.png';


export default function Test9({navigation}){
    const increment = firebase.firestore.FieldValue.increment(4)
    const user = firebase.auth().currentUser;
    const email = user.email;
    getPlan = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            '이성' : increment
        })
    }
    getCnt = async () =>{
        const userDocument = firestore().collection("회원").
        doc(email)
        .update({
            '감성' : increment
        })
    }
    return(

        <View style = {testpageStyle.container}>
            <Image source={logo} style={testpageStyle.logo} />
            <View style={{flexDirection: 'row'}}>
                <Text style={testpageStyle.styledQ}>Q 9</Text>
                <Text style={testpageStyle.styledQ1}>.</Text>
            </View>
            <View style ={testpageStyle.styledBox}>
                <Text style={testpageStyle.styledFont}>친구에게 어려운 부탁이 왔다</Text>
                <Text style={testpageStyle.styledFont}>"생각해볼게"라고 말했을 때,</Text>
                <Text style={testpageStyle.styledFont}>내 대답의 의도는?</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems:'space-between', marginTop:10, padding:40}}>
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getPlan()
                    navigation.navigate("cal")
                }}>
                    <Text style={parameters.buttonTitle}>충분히 생각하고 답하기 위해</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testpageStyle.styledButton} onPress={() => {
                    getCnt()
                    navigation.navigate("cal")
                }}>
                    <Text style={parameters.buttonTitle}>간접적인 거절을 하기 위해</Text>
                </TouchableOpacity>
            </View>
            <Progress.Bar progress={1.0} width={300} color={'#6667ab'} height={10} borderRadius={5} marginBottom={100} marginTop ={30} backgroundColor = {'#E8E8F2'} />

        </View>
    )
}