
import React, { useState,useEffect } from 'react'
import{ View, Text, TouchableOpacity, Image,ScrollView } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import { parameters,testpageStyle } from '../../global/styles'
import { buttonTitleB } from '../../global/fontStyles'
import firestore, { firebase } from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import mozart from '../../images/mozart.png';
import bach from '../../images/bach.png';
import beethoven from '../../images/beethoven.png';
import brahms from '../../images/brahms.png';
import chopin from '../../images/chopin.png';
import haydn from '../../images/Haydn.png';
import hendel from '../../images/hendel.png';
import schubert from '../../images/Schubert.png';
export default function Result({navigation}){
    
    const [musician, setMusician] = useState('');
    const [sentence, setSentence] = useState('');
    const [srate, setsrate] = useState(0);
    const [hrate, sethrate] = useState(0);
    const [drate, setdrate] = useState(0);
    const [cnt, setCnt] = useState(false);
    const [subject, setsubject] = useState();
    const [subjecticon, setsubjecticon] = useState();
    const [space, setspace] = useState();
    const [spaceicon, setspaceicon] = useState();
    const [source,setsource] = useState()
    const user = firebase.auth().currentUser;
    const email = user.email; 
    
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

    const getImage15 = async key =>{
        const inf = firestore().collection("tool").doc("15");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const longsen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    'more_exp' : longsen,
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(hendel)
        setCnt(true);
    }
    const getImage18 = async key =>{
        const inf = firestore().collection("tool").doc("18");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const longsen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument =firestore().collection("회원").
                doc(email)
                    .update({
                    'more_exp' : longsen,
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(beethoven)
        setCnt(true);
    }
    const getImage20 = async key =>{
        const inf = firestore().collection("tool").doc("20");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const longsen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    'more_exp' : longsen,
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(brahms)
        setCnt(true);
    }
    const getImage24 = async key =>{
        const inf = firestore().collection("tool").doc("24");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const longsen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    'more_exp' : longsen,
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(haydn)
        setCnt(true);
    }
    const getImage30 = async key =>{
        const inf = firestore().collection("tool").doc("30");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const longsen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    'more_exp' : longsen,
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(schubert)
        setCnt(true);
    }
    const getImage36 = async key =>{
        const inf = firestore().collection("tool").doc("36");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const longsen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    'more_exp' : longsen,
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(chopin)
        setCnt(true);
    }
    const getImage40 = async key =>{
        const inf = firestore().collection("tool").doc("40");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const longsen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(mozart)
        setCnt(true);
    }
    const getImage48 = async key =>{
        const inf = firestore().collection("tool").doc("48");
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const name = ininf["musician"];
                const sen = ininf["exp"];
                const longsen = ininf["more_exp"];
                setMusician(name)
                setSentence(sen)
                const userDocument = firestore().collection("회원").
                doc(email)
                    .update({
                    '이름' : name,
                    '설명' : sen
                })
            }
            else{
                console.log("no data")
            }
        })
        setsource(bach)
        setCnt(true);
    }
    const [score, setScore] = useState(1);
    const first = firestore().collection("회원").doc(email);
    async function Read(){
        await first.get().then((doc)=>{
            if (doc.exists){
                const pandi = doc.data();
                const plan = pandi["result"];
                const rate1 = pandi["사고유형비율"]
                const rate2 = pandi["학습성격비율"]
                const rate3 = pandi["행동조절비율"]
                setsrate(rate1)
                sethrate(rate2)
                setdrate(rate3)
                if (plan === 15){
                    setsubject("서양영화사")
                    setsubjecticon("palette")
                    setspace("안다미로 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage15();
                }
                else if(plan === 18){
                    setsubject("자연과학의 이해")
                    setsubjecticon("emoji-nature")
                    setspace("안다미로 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage18();
                }
                else if (plan === 20){
                    setsubject("인류학이란 무엇인가")
                    setsubjecticon("auto-stories")
                    setspace("투썸플레이스")
                    setspaceicon("emoji-food-beverage")
                    setScore(plan);
                    getImage20();
                }
                else if (plan === 24){
                    setsubject("서양철학사")
                    setsubjecticon("auto-stories")
                    setspace("투썸플레이스")
                    setspaceicon("emoji-food-beverage")
                    setScore(plan);
                    getImage24();
                }
                else if (plan === 30){
                    setsubject("현대사회의 윤리")
                    setsubjecticon("auto-stories")
                    setspace("토브 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage30();
                }
                else if (plan === 36){
                    setsubject("철학이란 무엇인가")
                    setsubjecticon("auto-stories")
                    setspace("토브 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage36();
                } 
                else if (plan === 40){
                    setsubject("형식논리학")
                    setsubjecticon("auto-stories")
                    setspace("플랜트 스터디카페")
                    setspaceicon("meeting-room")
                    setScore(plan);
                    getImage40();
                }
                else if (plan === 48){
                    setsubject("독일 명작의 이해")
                    setsubjecticon("self-improvement")
                    setspace("플랜트 스터디카페")
                    setspaceicon("meeting-room")
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
                <View style = {{alignItems:"center", marginTop:25}}>
                    <Text style = {testpageStyle.text1}>당신의 유형은</Text>
                    <Text style = {testpageStyle.text2}>{musician}</Text>
                </View>
                <Image 
                    style = {{width:300, height:400}}
                    source = {source} 
                />
                
                <Progress.Bar progress={srate} width={330} color={'#FF9D9D'} height={35} borderRadius={12} marginTop={25}/>
                <View style = {{flex:1, flexDirection:'row', width:340, justifyContent:'space-between'}}>
                    <Text style = {testpageStyle.styledMyType}>계획형</Text>
                    <Text style = {testpageStyle.styledMyType}>즉흥형</Text>
                </View>

                <Progress.Bar progress={hrate} width={330} color={'#FF9D9D'} height={35} borderRadius={12} />
                <View style = {{flex:1, flexDirection:'row', width:340, justifyContent:'space-between'}}>
                    <Text style = {testpageStyle.styledMyType}>사회형</Text>
                    <Text style = {testpageStyle.styledMyType}>개인형</Text>
                </View>

                <Progress.Bar progress={drate} width={330} color={'#FF9D9D'} height={35} borderRadius={12}/>
                <View style = {{flex:1, flexDirection:'row', width:340, justifyContent:'space-between'}}>
                    <Text style = {testpageStyle.styledMyType}>활발형</Text>
                    <Text style = {testpageStyle.styledMyType}>차분형</Text>
                </View>

                <View style = {testpageStyle.styledExplain}>
                    <Text style = {testpageStyle.text1}>{sentence}</Text>
                </View>

                <View style = {{flex:1, flexDirection:'row', width:350, marginBottom:25, position: 'relative'}}>
                    <View style = {{position: 'absolute', left:70, top:-25, height:80, width:40, backgroundColor:'#6767A6', transform: [{rotate: '80deg'}]}}></View>
                    <View style = {testpageStyle.styledRecommend}>
                        <Text style = {testpageStyle.styledRecommendText1}>최고의 공부장소</Text>
                        <View style ={{height:130, width:130, backgroundColor:'#FF9D9D'}}>
                        <Icon name = {spaceicon} type = 'material'size = {120}/>
                        </View>
                        <Text style = {testpageStyle.styledRecommendText2}>{space}</Text>
                    </View>
                    <View style = {{position: 'absolute', right:70, top:-25, height:80, width:40, backgroundColor:'#6767A6', transform: [{rotate: '80deg'}]}}></View>
                    <View style = {testpageStyle.styledRecommend}>
                        <Text style = {testpageStyle.styledRecommendText1}>최고의 교양과목</Text>
                        <View style = {{height:130, width:130, backgroundColor:'#FF9D9D'}}>
                        <Icon name = {subjecticon} type = 'material'size = {120}/>
                        </View>
                        <Text style = {testpageStyle.styledRecommendText2}>{subject}</Text>
                    </View>
                </View>

                <TouchableOpacity style={testpageStyle.styledButton} onPress = {() => {
                        resettype()
                        navigation.navigate("Test1")
                }}>
                    <Text style={buttonTitleB}>검사 다시하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={testpageStyle.styledButton} onPress = {() => {
                        navigation.navigate("HomeScreen")
                    }}
                >
                    <Text style={buttonTitleB}>Main Page로 가기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    ) : null
}