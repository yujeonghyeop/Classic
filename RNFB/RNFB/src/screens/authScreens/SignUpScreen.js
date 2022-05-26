

//creat acount 해주는 스크린

import React,{useState} from 'react'
import { StyleSheet,Text,View, ScrollView, Image, TextInput, Alert } from 'react-native'
import {colors, logo} from '../../global/styles'
import Header from '../../components/Header'
import { Formik } from 'formik'; //user Authetication
import {Icon, Button, CheckBox} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'   //animate한 요소를 더하기 위한 import
import auth from '@react-native-firebase/auth'
import Logo from '../../images/logo.png'
import firestore, { firebase } from '@react-native-firebase/firestore'


const initialValues = {
  phone_number: '',
  name : "", 
  family_name:"",
  password:"",
  email:'',
  username:''
}



const SignUpScreen = ({navigation}) => {

const[passwordFocussed, setPasswordFocussed] = useState(false)
const[passwordBlured,setPasswordBlured] = useState(false)
async function signUp(values){  // firebase에 email, password 넘겨주는 역할
  const {email, password} = values
  try{
    await auth().createUserWithEmailAndPassword(email, password)  //email, password를 firebase에 넘김
    firestore().collection("회원").doc(email).set({
      exp : "",
      more_exp : "",
      t_id : "",
      m_space : {},
      m_subject : {},
      result : 0,
      총체 : 0,
      분석 : 0,
      자기지향 : 0,
      사회지향 : 0,
      이성 : 0,
      감성 : 0,
    })   
    
     //creat account를 하자마자 user의 데이터를 firestore에 올려준다.
    console.log("USER ACCOUNT CREATED")
  }catch(error){
    if(error.code === 'auth/email-already-in-use'){ // 이미 있는 email이면 에러 출력
      Alert.alert(
        'That email address is already in use'
      )
    }
    if(error.code === 'auth/invalie=email'){  //양식에 안맞으면 에러 출력
      Alert.alert(
        'That email address is invalid'
      )
    }
    else{
      Alert.alert(error.code)
    }
  }
}


    return(
        <View style = {styles.container}>
        {/* <Header title = " My ACCOUNT" type = "arrow-left" navigation ={navigation}/> */}

            <ScrollView keyboardShouldPersistTaps = "always">
            <View style = {{alignItems:"center",marginTop:10}}>
                <Image source={Logo} style={logo} />
                <Text style = {styles.headtext1}>나의 학습 유형을 제대로 알고 공부하자</Text>
            </View>
            
                <Formik initialValues = {initialValues} onSubmit = {(values) =>{signUp(values)}}>
                    {(props)=>(
                        <View style = {styles.view2}>
                            {/* email 받는 칸 */}
                            <View style = {styles.view10}>
                              <View>
                                {/* icon 추가 */}
                                <Icon 
                                  name = 'email'
                                  style = {styles.email}
                                  color = {colors.grey3}
                                  type = "material"
                                />
                              </View>
                              <View style = {styles.view11}>
                                  <TextInput
                                    placeholder = "이메일 주소(필수)"
                                    style = {styles.input4}
                                    autoFocus = {false}
                                    onChangeText = {props.handleChange('email')}
                                    value = {props.values.email}
                                  />
                              </View>
                            </View>
                            {/* password 받는 칸 */}
                            <View style = {styles.view14}>
                                <Animatable.View animation = {passwordFocussed?"fadeInRight" : "fadeInLeft"}>
                                <Icon name = "lock" color = {colors.grey3} type = "material" />
                                </Animatable.View>
                                <TextInput
                                    placeholder = "비밀번호(필수)"
                                    style = {{flex:1}}
                                    autoFocus = {false}
                                    onChangeText = {props.handleChange('password')}
                                    value = {props.values.password}
                                    onFocus = {() => {setPasswordFocussed(true)}}
                                    onBlur = {() => {setPasswordBlured(true)}}
                                  />
                                  <Animatable.View animation = {passwordBlured ? "fadeInLeft" : "fadeInRight"} duration = {400}>
                                  <Icon name = "visibility-off" color = {colors.grey3} type = "material" style = {{marginRight:10}}/>
                                </Animatable.View>
                              </View>
                            {/* 이름 받는 칸 */}
                            <View style = {styles.view6}>
                                  <TextInput
                                    placeholder = "이름(필수)"
                                    style = {styles.input1}
                                    autoFocus = {false}
                                    onChangeText = {props.handleChange('name')}
                                    value = {props.values.name}
                                  />
                            </View>
                            {/* 폰  번호 받는 칸 */}
                                <View style = {styles.view6}>   
                                  <TextInput
                                    placeholder = "전화번호(필수)"
                                    style = {styles.input1}
                                    keyboardType = "number-pad"
                                    autoFocus = {true}
                                    onChangeText = {props.handleChange('phone_number')}
                                    value = {props.values.phone_number}
                                  />
                            </View>
                            {/*개인정보 활용 동의를 위한 View */}
                            <View>
                              <CheckBox
                                title = '개인정보 제3자 제공 동의(선택)'
                              />
                              <CheckBox
                                title = '만 14세 미만의 어린이/학생 이용자는 체크해주세요'
                              />
                            
                            </View>
                              {/* Create account의 룰 설명 하는 view */}
                              <View style = {styles.view15}>
                                <View style = {styles.view16}>
                                    <Text style = {styles.text3}>만 14세 이상이며 </Text>
                                    {/* <Text style = {styles.text4}>CLASSIC 이용약관</Text관 */}
                                    {/* <Text style = {styles.text3}>, </Text> */}
                                    <Text style = {styles.text4}>개인정보 수집 안내</Text> 
                                    <Text style = {styles.text3}>를 확인하고, 동의합니다.</Text>
                                  </View>
                                </View>
                                <View style = {styles.view17}>
                                  <Button 
                                    title = "동의하고 가입하기"
                                    buttonStyle = {styles.button1}
                                    titleStyle = {styles.title1}
                                    onPress = {props.handleSubmit}
                                  />
                                  </View>
                        </View>
                    )}
                </Formik>

                {/* 잘못 들어왔을 때 로그인 화면으로 돌려보내는 view */}
                <View style = {styles.view18}>
                      <Text style = {styles.text5}></Text>
                </View>

                <View style = {styles.view19}>
                  <View style = {styles.view20}>
                    <Text style = {styles.text6}> </Text>
                    </View>

                    <View style = {styles.view21}>
                        <Button
                          title = "로그인 하러 가기"
                          buttonStyle = {styles.button2}
                          titleStyle = {styles.title2}
                          onPress = {() => {navigation.navigate('SignInScreen')}}
                        />
                      </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({

    container:{flex:1,
        backgroundColor:'white'
      },
    headtext1: {
        color:colors.grey3,
        fontSize:16,
        fontWeight : "bold"
    },
    headtext2:{
        color:'#6667ab',
        fontSize:50,
        fontWeight : "bold"
    },

      view1:{justifyContent:'center',
             alignItems:'flex-start',
             marginTop:10,
             marginBottom:10,
             paddingHorizontal:15
            },

      text1:{
        fontSize:22,
        color:colors.buttons,
        fontWeight:'bold'
      },

      view2:{justifyContent:'flex-start',
             backgroundColor:'white',
             paddingHorizontal:15
            },

      view3:{marginTop:5,
            marginBottom:10
          },

      text2:{
            fontSize:15,
            color:colors.grey2
          },

      view4:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5
          
            },

      view5:{ marginLeft:30,
              marginTop:20      
               },

      input1:{fontSize:16, },

      view6:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
          },

       view7:   {marginLeft:0,
                 maxWidth:"65%",         
               },

      input2:{fontSize:16,
              marginLeft: 0,
              marginBottom:0
                  },         

      view8:{flexDirection:'row',
            borderWidth:1,
            borderColor: colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
          },

      view9:{marginLeft:0,
             maxWidth:"65%",    
           },

      input3:{fontSize:16,
        marginLeft: 0,
        marginBottom:0
       },

      view10: {flexDirection:'row',
              borderWidth:1,
              borderColor:colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
       },

       email:{fontSize:24,
              padding:0,
              marginBottom:0 ,
              marginTop:11,
              marginLeft:2
              },

       view11 : { marginLeft:30,
                  maxWidth:"65%",    
                },

       input4:{fontSize:16,
              marginLeft: -20,
              marginBottom:-10
              },      

     view13:  {flexDirection:"row",
              height:40,
            } ,

    view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.grey4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
    },       
      
    view15:{alignItems:'center',
            justifyContent:'center',
            marginTop:10
          },

    text3: {fontSize:13
              },
              
      view16:{flexDirection:'row'},

      text4:{textDecorationLine:'underline',
            color:'green',
            fontSize:13
            },

      button1: {backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
        width:'100%'
                          
      },
      
      title1:{color:"white",
      fontSize:20,  
      fontWeight:"bold" ,
      alignItems:"center",
      justifyContent:"center"  ,
      marginTop:-3
                            
    },

    view17:{marginVertical:10,
            marginTop:30
          },

    view18:{flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            //paddingTop:5,
          },

    text5:   {fontSize:15,
              fontWeight:'bold',
              },
              
      view19:{ backgroundColor:'white',
              paddingHorizontal:15,
              
              },

      view20:{marginTop:5
            },
      
      view21:{marginTop:5,
        alignItems:'flex-end',
      },

      button2:{backgroundColor:colors.background3,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.background2,
        height:40,
        paddingHorizontal:20,
        // width:'100%'
                          
      },

      title2:{color:colors.buttons,
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
                        
    }

})