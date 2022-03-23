import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'


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
        <View style = {styles.container}>
            <Progress.Bar progress={0.4} width={200} color={'#6667ab'} height={20} borderRadius={20} marginBottom={100} marginTop ={50} />
            <Text style={styles.styledQ}>Q4</Text>
            <Text style={styles.styledFont}>팀 프로젝트를 해야 한다.</Text>
            <Text style={styles.styledFont}>팀원을 고르는 방식 중 선호하는 방식은?</Text>
            <Button
            title = "친한 친구들 끼리 했으면 좋겠다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getSoc()
                    navigation.navigate("Test5")
                }}
                />
            <Button
            title = "교수님이 정해줬으면 좋겠다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getPer()
                    navigation.navigate("Test5")
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