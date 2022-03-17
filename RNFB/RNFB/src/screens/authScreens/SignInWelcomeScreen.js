//들어왔을 때 보이는 메인 페이지

import React,{useState,useRef,useEffect, useContext} from 'react';

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import {colors, parameters, title} from '../../global/styles'
import {Button} from 'react-native-elements'
import { SignInContext } from '../../contexts/authContext';
import auth from '@react-native-firebase/auth'

export default function SignInWelcomeScreen({navigation}){  //props는 navigation을 위함 
    const {dispatchSignedIn} = useContext(SignInContext)
useEffect(()=>{ //파이어베이스 이용하여 로그인하는 부분
    auth().onAuthStateChanged((user)=>{
        if(user){
            dispatchSignedIn({type :"UPDATE_SIGN_IN", payload :{userToken:"signed-in"}})
        }else{
            dispatchSignedIn({type :"UPDATE_SIGN_IN", payload :{userToken:null}})

        }
    })
},[])



    return(
        // flex를 활용하여 화면 구성을 할 수 있다. 
        <View style = {{flex:1}}>
            <View style = {{flex:3, justifyContent:'flex-start',alignItems:'center', paddingTop:20}}>
                <Text style = {{fontSize:40, color:'#6667ab', fontWeight:'bold'}}> CLASSIC</Text>
            </View>

        <View style = {{flex:4}}>
            <View style = {{marginHorizontal:20, marginVertical : 20}}> 
                {/* button에 여백 두기 */}
                    <Button 
                        title = "로그인 하기"
                            buttonStyle =  {parameters.styledButton}
                            titleStyle = {parameters.buttonTitle}

                            //button에 스타일 입히기

                                onPress = {() => {
                                    navigation.navigate("SignInScreen")
                                }}
                                //이 버튼을 누를 때 SignInScreen으로 가라는 navigation 등록
                            
                    />
            </View>
            <View style = {{marginHorizontal:20, marginTop : 10}}>
                    <Button 
                        title = "검사 하러 가기"
                        buttonStyle = {styles.createButton}
                        titleStyle = {styles.createButtonTitle}

                        onPress = {() => {
                            navigation.navigate("Test1")
                        }}
                        
                    />

                </View>

        </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    createButton: {
        backgroundColor:'#6667ab',
        alignContent:"center",
        justifyContent :"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:'#6667ab',
        height:50,
        paddingHorizontal:20,
        borderColor : '#6667ab'
    },
    createButtonTitle:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
})