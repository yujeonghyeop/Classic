//들어왔을 때 보이는 메인 페이지

import React,{useState,useRef} from 'react';

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import {colors, parameters, title} from '../../global/styles'
import {Icon,Button,SocialIcon} from 'react-native-elements'

export default function SignInWelcomeScreen({navigation}){  //props는 navigation을 위함 
    return(

        // flex를 활용하여 화면 구성을 할 수 있다. 
        <View style = {{flex:1}}>
            <View style = {{flex:3, justifyContent:'flex-start',alignItems:'center', paddingTop:20}}>
                <Text style = {{fontSize:26, color:colors.buttons, fontWeight:'bold'}}> DISCOVER RESTAURANTS</Text>
                <Text style = {{fontSize:26, color:colors.buttons, fontWeight:'bold'}}> IN YOUR AREA</Text>
            </View>

        <View style = {{flex:4}}>
            <View style = {{marginHorizontal:20, marginVertical : 20}}> 
                {/* button에 여백 두기 */}
                    <Button 
                        title = "SIGN IN"
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
                        title = "Create your account"
                        buttonStyle = {styles.createButton}
                        titleStyle = {styles.createButtonTitle}

                        onPress = {() => {
                            navigation.navigate("SignUpScreen")
                        }}
                        
                    />

                </View>

        </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    createButton: {
        backgroundColor:"white",
        alignContent:"center",
        justifyContent :"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor : colors.buttons
    },
    createButtonTitle:{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
})