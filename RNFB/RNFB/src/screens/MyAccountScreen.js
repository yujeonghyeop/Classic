import React, { useState,useEffect } from 'react'
import firestore, { firebase } from '@react-native-firebase/firestore'
import {View, Text, StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements';
import {logo, myPageStyle} from '../global/styles';
import { styledtext } from '../global/fontStyles';
import Logo from '../images/logo.png';

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
    return(
        <View style = {{flex:1, alignItems:'space-between', justifyContent:'center', flexDirection: 'column'}}>
            <Image source={Logo} style={logo} />
            <View style={myPageStyle.styledBox}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding:10}}>
                    <View style={{flexDirection: 'column', margin:10,justifyContent: 'center'}}> 
                        <View style={myPageStyle.styledPicture}/>
                        <Text style={{fontFamily: 'IBMPlexSansKR-Light', alignItems: 'center'}}>name</Text>
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
            <View style={{flexDirection: 'row', flex:1,justifyContent:'space-evenly'}}>
                <Button title='스크랩 한 학습공간' buttonStyle={myPageStyle.styledButton} titleStyle={styledtext}/>
                <Button title='스크랩 한 교양과목' buttonStyle={myPageStyle.styledButton} titleStyle={styledtext}/>
            </View>
            <View style={myPageStyle.styledList}></View>
        </View>
    )
}