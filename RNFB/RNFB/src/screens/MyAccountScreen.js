import React, { useState,useEffect } from 'react'
import firestore, { firebase } from '@react-native-firebase/firestore'
import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import {Button} from 'react-native-elements';
import {logo, myPageStyle} from '../global/styles';
import { styledtext, buttonTitleB, buttonTitleW  } from '../global/fontStyles';
import Logo from '../images/logo.png';
import Swiper from 'react-native-swiper';

export default function MyAccountScreen({navigation}){
    const user = firebase.auth().currentUser;
    const email = user.email; 
    const [test, settest] = useState();
    const getname = async key=> {
        const inf = firestore().collection("회원").doc(email)
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["result"];
                settest(name)
                }
            })
        }
    const resettype = async key =>{
        firestore().collection("회원").doc(email).update({
            result : 0,
            총체 : 0,
            분석 : 0,
            자기지향 : 0,
            사회지향 : 0,
            이성 : 0,
            감성 : 0,
            })   
    }
    useEffect(()=>{
        getname();
    })

    const [button1, setColor1] = useState('#6767A6');
    const [button2, setColor2] = useState('#E8E8F2');
    const [button1f, setFont1] = useState(buttonTitleB);
    const [button2f, setFont2] = useState(buttonTitleW);

    const clickHandler1 = () => {
        setColor1('#6767A6');
        setColor2('#E8E8F2');
        setFont1(buttonTitleB);
        setFont2(buttonTitleW);
    }

    const clickHandler2 = () =>{
        setColor1('#E8E8F2');
        setColor2('#6767A6');
        setFont1(buttonTitleW);
        setFont2(buttonTitleB);
    }

    return(
        <View style = {{flex:1, alignItems:'space-between', justifyContent:'center', flexDirection: 'column'}}>
            <Image source={Logo} style={logo} />
            <View style={myPageStyle.styledBox}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding:10}}>
                    <View style={{flexDirection: 'column', margin:10,justifyContent: 'center'}}> 
                        <View style={myPageStyle.styledPicture}/>
                        <Text style={{fontFamily: 'IBMPlexSansKR-Light', alignItems: 'center', marginLeft:30}}>name</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent:'flex-start', margin: 10, padding:15}}>
                        {console.log(test)}
                        <View style={{flexDirection: 'column', alignItems:'center'}}>
                            <Button title='상세 보기' buttonStyle={myPageStyle.styledButton1} titleStyle={styledtext} />
                            {
                            test===0 ? 
                            <Button title='검사하러 가기' buttonStyle={myPageStyle.styledButton1} titleStyle={styledtext}
                             onPress = {() => { navigation.navigate("Test1")}}
                            />:
                            <Button title='다시 검사하기' buttonStyle={myPageStyle.styledButton1} titleStyle={styledtext}
                            onPress = {() => 
                                {   resettype()
                                    navigation.navigate("Test1")}
                                }
                           />}
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex: 8}}>
                <View style={{flexDirection:'row', marginTop:10}}>
                    <TouchableOpacity style={{backgroundColor:button1,width:'50%', alignItems:'center', padding:5}} onPress={clickHandler1}>
                        <Text style={button1f}>스크랩 한 학습 공간</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:button2,width:'50%', alignItems:'center', padding:5}} onPress={clickHandler2}>
                        <Text style={button2f}>스크랩 한 교양과목</Text>
                    </TouchableOpacity>
                </View> 
                <Swiper showsPagination={false} loop={false}>
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{width:300,height:300, backgroundColor:'gray'}}></View>
                            <View style={{width:300,height:300, backgroundColor:'gray'}}></View>
                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView >
                            <View style={{width:300,height:300, backgroundColor:'gray'}}></View>
                            <View style={{width:300,height:300, backgroundColor:'gray'}}></View>
                        </ScrollView>
                    </View>
                </Swiper>
            </View>
                
        </View>
    )
}