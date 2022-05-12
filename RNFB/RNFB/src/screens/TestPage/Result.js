import React, { useState,useEffect } from 'react'
import{ View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import firestore, { firebase } from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper';

export default function Result({navigation}){
    // useEffect(() => {
    //     try {
    //       setTimeout(() => {
    //         SplashScreen.hide(); /** 추가 **/
    //       }, 2000); /** 스플래시 시간 조절 (2초) **/
    //     } catch(e) {
    //       console.warn('에러발생');
    //       console.warn(e);
    //     }
    //   });
    


    const [url, setUrl] = useState('');
    const [musician, setMusician] = useState('');
    const [sentence, setSentence] = useState('');
    const [cnt, setCnt] = useState(false);
    const user = firebase.auth().currentUser;
    const email = user.email; 
    
    const getImage15 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/헨델.png');
        const inf = firestore().collection("15").doc("정보");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["이름"];
                const sen = ininf["설명"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection(email).
                    doc('결과')
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage18 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/베토벤.png');
        const inf = firestore().collection("18").doc("정보");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["이름"];
                const sen = ininf["설명"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection(email).
                    doc('결과')
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage20 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/브람스.png');
        const inf = firestore().collection("20").doc("정보");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["이름"];
                const sen = ininf["설명"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection(email).
                    doc('결과')
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage24 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/하이든.png');
        const inf = firestore().collection("24").doc("정보");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["이름"];
                const sen = ininf["설명"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection(email).
                    doc('결과')
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage30 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/슈베르트.png');
        const inf = firestore().collection("30").doc("정보");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["이름"];
                const sen = ininf["설명"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection(email).
                    doc('결과')
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage36 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/쇼팽.png');
        const inf = firestore().collection("36").doc("정보");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["이름"];
                const sen = ininf["설명"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection(email).
                    doc('결과')
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage40 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/모차르트.png');
        const inf = firestore().collection("40").doc("정보");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["이름"];
                const sen = ininf["설명"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection(email).
                    doc('결과')
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage48 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/바흐.png');
        const inf = firestore().collection("48").doc("정보");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["이름"];
                const sen = ininf["설명"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection(email).
                    doc('결과')
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const [score, setScore] = useState(1);
    const first = firestore().collection(email).doc("결과");
    async function Read(){
        await first.get().then((doc)=>{
            if (doc.exists){
                const pandi = doc.data();
                const plan = pandi["result"];
                if (plan === 15){
                    setScore(plan);
                    getImage15();
                }
                else if(plan === 18){
                    setScore(plan);
                    getImage18();
                }
                else if (plan === 20){
                    setScore(plan);
                    getImage20();
                }
                else if (plan === 24){
                    setScore(plan);
                    getImage24();
                }
                else if (plan === 30){
                    setScore(plan);
                    getImage30();
                }
                else if (plan === 36){
                    setScore(plan);
                    getImage36();
                } 
                else if (plan === 40){
                    setScore(plan);
                    getImage40();
                }
                else if (plan === 48){
                    setScore(plan);
                    getImage48();
                }
            }
        })
    }
    useEffect(()=>{
        Read();
    })

    return cnt ? (
        <ScrollView keyboardShouldPersistTaps = "always">
            <View style = {testpageStyle.container}>
                
                <View style = {{alignItems:"center"}}>
                    <Text style = {testpageStyle.text1}>당신의 유형은</Text>
                    <Text style = {testpageStyle.text2}>{musician}</Text>
                </View>
                <Image 
                    style = {{width:300, height:400}}
                    source = {{uri : url}} 
                />
                <Progress.Bar progress={0.7} width={350} color={'#FF9D9D'} height={35} borderRadius={12} marginTop ={25} />
                <Progress.Bar progress={0.5} width={350} color={'#FF9D9D'} height={35} borderRadius={12} marginTop ={25} />
                <Progress.Bar progress={0.8} width={350} color={'#FF9D9D'} height={35} borderRadius={12} marginTop ={25} />

                <View style = {testpageStyle.styledExplain}>
                    <Text style = {testpageStyle.text1}>{sentence}</Text>
                </View>

                <Button 
                    title = "검사 다시하기"
                    buttonStyle =  {testpageStyle.styledButton}
                    titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                    onPress = {() => {
                        navigation.navigate("Test1")
                }}
                />
                <Button 
                title = "Main Page로 가기"
                    buttonStyle =  {testpageStyle.styledButton}
                    titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                    onPress = {() => {
                        navigation.navigate("HomeScreen")
                }}
                />
            </View>
        </ScrollView>

    ) : null
}