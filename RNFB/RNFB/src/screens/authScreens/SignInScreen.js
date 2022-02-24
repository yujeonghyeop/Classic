// 로그인 화면, 회원가입 가능

import React,{useState,useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Alert} from 'react-native'
import {colors, parameters, title} from '../../global/styles'
import {Icon,Button,SocialIcon} from 'react-native-elements'
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable'   //animate한 요소를 더하기 위한 import
import { Formik } from 'formik'; //user Authetication
import auth from '@react-native-firebase/auth'



export default function SignInScreen({navigation}){

    const[textInput2Fossued, setTextInput2Fossued] = useState(false)
    //pw border가 focus를 받는지 안받는지를 확인하기 위해 useState로 상태를 기록
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    //각각의 데이터를 받기 위해 변수로 설정
    

async function signIn(data){
    try{
    const {password,email} = data
    const user = await auth().signInWithEmailAndPassword(email, password)
    if(user){
        console.log("USER SIGNED-IN")
    }
}
    catch(error){
        Alert.alert(
            error.name,
            error.message
        )
    }
}



    return(
        <View style ={styles.container}>
            <Header title = " My ACCOUNT" type = "arrow-left" navigation ={navigation}/>

            <View>
                <Text style = {title}>Sign-In</Text> 
            </View>

            <View style = {{alignItems:"center",marginTop:10}}>
                <Text style = {styles.text1}>Please enter the email and password</Text>
                <Text style = {styles.text1}>registered with your account</Text>
            </View>
            
            {/* user의 데이터를 받는 부분을 Formik으로 감싸준다 */}
            <Formik
                initialValues = {{email:'',password:''}}
                onSubmit = {(values)=>{
                    signIn(values)
                }}
            
            >
            {/* 데이터를 다루기 위해 props라는 변수 설정 */}
            {(props)=>

            <View>
            <View>
                <View style = {{marginTop:20}}> 
                    <TextInput 
                        style = {styles.TextInput1}
                        placeholder = "Email"
                        ref = {textInput1}  //email 데이터 받는 부분
                        //Text가 바뀌었을때 그 값을 value에 저장해준다.
                        onChangeText = {props.handleChange('email')}
                        value = {props.values.email}
                    />
                </View>
                
                <View style = {styles.TextInput2}>      
                    {/* password 부분에 animate 요소도 더해서 나타낸다 */}
                    <Animatable.View animation = {textInput2Fossued ? "" :"fadeInLeft" } duration={400}>
                        {/* Fossued가 false일때 에니메이션 동작 */}
                        <Icon 
                            name = "lock"
                            iconStyle = {{color:colors.grey3}}
                            type = "material"
                            style = {{}}
                        />
                        {/* 잠금 ICON */}
                    </Animatable.View>
                        <TextInput
                            style = {{width :"80%"}}
                            placeholder = "password"
                            ref = {textInput2}  //pw 데이터 받는 부분
                            onFocus = {() =>{
                                setTextInput2Fossued(false)
                            }}
                            onBlur = {() => {
                                setTextInput2Fossued(true)
                            }}
                            
                            //Text가 바뀌었을 때 그 값을 value에 저장해준다.
                            onChangeText = {props.handleChange('password')}
                            value = {props.values.password}

                            // pw 데이터를 받는 ref가 focus를 받으면(클릭이 되면) Fossued를 false로 세팅하고 
                            // focus에서 벗어나면 Fossued를 True로 세팅한다.
                        />
                    <Animatable.View animation = {textInput2Fossued ? "" :"fadeInLeft" } duration={400}>
                        {/* Fossued가 false일때 에니메이션 동작 */}
                        <Icon 
                            name = "visibility-off"
                            iconStyle = {{color:colors.grey3}}
                            type = "material"
                            style = {{marginRight : 10}}
                            
                        />
                        {/* //visibility Icon */}
                    </Animatable.View>
                    
                    </View>
                </View>

                <View style = {{marginHorizontal:20, marginVertical : 20}}> 
                {/* button에 여백 두기 */}
                    <Button 
                        title = "SIGN IN"
                            buttonStyle =  {parameters.styledButton}
                            titleStyle = {parameters.buttonTitle}
                            
                            //SIGN IN 버튼을 누르면 저장되어 있던 value들이 Submit된다.
                            onPress = {props.handleSubmit}
                            
                    />
                </View>
                </View>
                }
            </Formik>

            
                <View style = {{alignItems: "center", marginTop:15}}> 
                {/* pw 잊어버렸을 때의 항목 만들기 */}
                    <Text style = {{...styles.text1, textDecorationLine: "underline"}}> Forgot Password ?</Text>
                </View>

                <View style = {{alignItems : "center", marginTop:20, marginBottom:20}}>
                    <Text style = {{fontSize:20, fontWeight:"bold"}}> OR</Text>
                </View>
                {/* facebook으로 로그인 할 수 있는 버튼 생성 */}
                <View style = {{marginHorizontal:10, marginTop:10}}>
                    <SocialIcon
                    //SocialIcon이라는 친구를 사용해 SocialIcon을 불러올 수 있다.
                        title = "Sign In With Facebook"
                        button
                        type = "facebook"
                        style = {styles.SocialIcon}
                        onPress ={()=>{
                        }}//눌렀을 때 무슨 함수를 실행할 지 지정하는 함수
                    />
                </View>

                <View style = {{marginHorizontal:10, marginTop:10}}>
                    <SocialIcon
                        title = "Sign In With Google"
                        button
                        type = "google"
                        style = {styles.SocialIcon}
                        onPress ={()=>{
                        }}
                    />
                </View>

                <View style = {{alignItems:"flex-end",marginHorizontal:20, marginTop:10}}>
                    <Button 
                        title = "Create an account"
                        buttonStyle = {styles.createButton}
                        titleStyle = {styles.createButtonTitle}

                        onPress = {() => {
                            navigation.navigate("SignUpScreen")
                        }}
                        
                    />

                </View>

            </View>
    )
}
const styles = StyleSheet.create({
    container :{
        flex:1
    },
    text1: {
        color:colors.grey3,
        fontSize:16
    },

    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft: 15
    },
        TextInput2:{
            borderWidth:1,
            borderRadius:12,
            marginHorizontal:20,
            borderColor:"#86939e",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            alignContent:"center",
            paddingLeft:15  //글자 왼쪽 공백
        },
    SocialIcon:{
        borderRadius:12,
        height:50
    },
    createButton: {
        backgroundColor:"white",
        alignContent:"center",
        justifyContent :"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20,
    },
    createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }

})