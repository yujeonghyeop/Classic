import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'
import * as Progress from 'react-native-progress'
import firestore, { firebase } from '@react-native-firebase/firestore'


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

        <View style = {styles.container}>
            <Progress.Bar progress={0.9} width={200} color={'#6667ab'} height={20} borderRadius={20} marginBottom={100} marginTop ={50} />
            <Text style={styles.styledQ}>Q9</Text>
            <Text style={styles.styledFont}>친구들이 집들이를 온다고 한다.</Text>
            <Text style={styles.styledFont}>치킨을 시키려는데 어떻게 할까?</Text>
            <Button
            title = "인원수를 파악하여 미리 시켜 놓는다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getPlan()
                    navigation.navigate("Result")
                }}
                />
            <Button
            title = "일단 시키고 모자라면 또 시킨다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    getCnt()
                    navigation.navigate("Result")
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