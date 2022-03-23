import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'


export default function Test1({navigation}){
    const increment = firebase.firestore.FieldValue.increment(4)
    const user = firebase.auth().currentUser;
    const email = user.email; //현재 접속죽인 user의 email을 가져온다.
    getPlan = async () =>{
        const userDocument = firestore().collection(email). //현재 접속중인 user의 데이터를 수정해준다.
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

        <View style = {styles.container}>
            <Progress.Bar progress={0.1} width={200} color={'#6667ab'} height={20} borderRadius={20} marginBottom={100} marginTop ={50} />
            <Text style={styles.styledQ}>Q1</Text>
            <Text style={styles.styledFont}>Tv를 틀고 뭘 볼지 정하는</Text>
            <Text style={styles.styledFont}>나의 모습은?</Text>
            <Button
            title = "편성표를 켜서 프로그램을 확인한다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getPlan()
                    navigation.navigate("Test2")
                }}
                />
            <Button
            title = "돌려보면서 재밌는게 나오면 멈춘다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getCnt()
                    navigation.navigate("Test2")
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