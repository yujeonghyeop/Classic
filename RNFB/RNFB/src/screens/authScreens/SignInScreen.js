// 로그인 화면, 회원가입 가능
import React,{useState,useRef, useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Alert,Image} from 'react-native'
import {colors, parameters, title,testpageStyle} from '../../global/styles'
import {Icon,Button,SocialIcon} from 'react-native-elements'
import { buttonTitleBL } from '../../global/fontStyles';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable'   //animate한 요소를 더하기 위한 import
import { Formik } from 'formik'; //user Authetication
import auth from '@react-native-firebase/auth'
import { SignInContext } from '../../contexts/authContext';
import logo from '../../images/logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SignInScreen({navigation}){
    const [secure, setSecure] = useState(true)
    const{dispatchSignedIn} = useContext(SignInContext)
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
        dispatchSignedIn({type :"UPDATE_SIGN_IN", payload :{userToken:"signed-in"}})
    }
}   //user가 검증이 되면 dispatchSignedIn을 활용하여 상태를 바꿔준다. 
    catch(error){
        Alert.alert(
            error.name, //error name과 message를 출력해준다.
            error.message
        )
    }
}



    return(
        <View style ={styles.container}>
            <Image source={logo} style={testpageStyle.logo} />

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
                    <Animatable.View animation = {textInput2Fossued ? "" :"fadeInLeft" } duration={200}>
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
                            secureTextEntry = {secure}
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
                    <Animatable.View animation = {textInput2Fossued ? "" :"fadeInLeft" } duration={200}>
                        {/* Fossued가 false일때 에니메이션 동작 */}
                        {secure ?
                        <Icon 
                            name = "visibility"
                            iconStyle = {{color:colors.grey3}}
                            type = "material"
                            // style = {{marginRight : 200}}
                            onPress={()=>setSecure(!secure)}
                        />
                        :
                        <Icon 
                            name = "visibility-off"
                            iconStyle = {{color:colors.grey3}}
                            type = "material"
                            // style = {{marginRight : 200}}
                            onPress={()=>setSecure(!secure)}
                        />
                        }   
                        {/* 삼항연산자로 비밀번호를 보이게 하기랑 보이지 않게 하기 따로 설정 */}
                    </Animatable.View>
                    
                    </View>
                </View>

                <View style = {{marginHorizontal:20, marginVertical : 20}}> 
                {/* button에 여백 두기 */}
                    <TouchableOpacity style={parameters.styledButton} onPress = {props.handleSubmit}>
                        <Text style={buttonTitleBL}>로그인 하기</Text>
                    </TouchableOpacity>
                </View>
                </View>
                }
            </Formik>

            
                <View style = {{alignItems: "center", marginTop:15}}> 
                {/* pw 잊어버렸을 때의 항목 만들기 */}
                    <Text style = {{...styles.text1, textDecorationLine: "underline"}}> 비밀번호를 잊어버리셨나요?</Text>
                </View>

                {/* facebook으로 로그인 할 수 있는 버튼 생성 */}
                <View style = {{marginHorizontal:10, marginTop:10}}>
                    <SocialIcon
                    //SocialIcon이라는 친구를 사용해 SocialIcon을 불러올 수 있다.
                        title = "페이스북으로 로그인하기"
                        button
                        type = "facebook"
                        style = {styles.SocialIcon}
                        onPress ={()=>{
                        }}//눌렀을 때 무슨 함수를 실행할 지 지정하는 함수
                    />
                </View>

                <View style = {{marginHorizontal:10, marginTop:10}}>
                    <SocialIcon
                        title = "구글로 로그인하기"
                        button
                        type = "google"
                        style = {styles.SocialIcon}
                        onPress ={()=>{
                        }}
                    />
                </View>

                <View style = {{alignItems:"flex-end",marginHorizontal:20, marginTop:10}}>
                    <Button 
                        title = "회원가입"
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
        fontSize:16,
        fontWeight : "bold"
    },
    text2:{
        color:'#6667ab',
        fontSize:50,
        fontWeight : "bold"
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
            paddingLeft:10,  //글자 왼쪽 공백
            paddingRight:10
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
        borderColor:'#6667ab',
        height:40,
        paddingHorizontal:20,
    },
    createButtonTitle:{
        color:'#6667ab',
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }

})