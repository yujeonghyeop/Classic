import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'


export default function Test5({navigation}){
    const increment = firebase.firestore.FieldValue.increment(4)
    const user = firebase.auth().currentUser;
    const email = user.email;
    getAct = async () =>{
        const userDocument = firestore().collection(email).
        doc('행동조절')
        .update({
            '활발형' : increment
        })
    }
    getDif = async () =>{
        const userDocument = firestore().collection(email).
        doc('행동조절')
        .update({
            '차분형' : increment
        })
    }
    return(
        <View style = {styles.container}>
            <Progress.Bar progress={0.5} width={200} color={'#6667ab'} height={20} borderRadius={20} marginBottom={100} marginTop ={50} />
            <Text style={styles.styledQ}>Q5</Text>
            <Text style={styles.styledFont}>팀 프로젝트에 참여했을 때</Text>
            <Text style={styles.styledFont}>나의 역할은?</Text>
            <Button
            title = "활발히 의견을 낸다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getAct()
                    navigation.navigate("Test6")
                }}
                />
            <Button
            title = "내가 필요한 시점에 의견을 낸다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getDif()
                    navigation.navigate("Test6")
                }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    styledButton :{     //button 스타일 지정
        backgroundColor : '#6667ab',
        alignContent : "center",
        justifyContent : "center",
        borderRadius : 12,
        borderWidth :1,
        borderColor:'#6667ab',
        height:50,
        paddingHorizontal:20,
        width:350,
        marginTop : 50
    },
    styledQ :{
        fontSize : 30,
        color:'#6667ab',
        fontWeight:'bold',
        marginBottom:10
    },
    styledFont:{
        fontSize : 19,
        color:'black',
        fontWeight:'bold',
    }
})