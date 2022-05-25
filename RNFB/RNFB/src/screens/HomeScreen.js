//로그인이 완료되면 메인화면, HomeScreen으로 오게된다.

import React,{useState,useEffect} from 'react';
import {View, Text, TouchableOpacity,Image, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {buttonTitleW,buttonTitleB, styledtext} from '../global/fontStyles';
import HomeHeader from '../components/HomeHeader';
import {logo, mainPageStyle} from '../global/styles';
import Logo from '../images/logo.png';
import {colors, parameters, title} from '../global/styles';
import Swiper from 'react-native-swiper';
import firestore, { firebase } from '@react-native-firebase/firestore';

export default function HomeScreen({navigation}) {
  const [nickname, setNickname] = useState(null)
  const [exp, setExp] = useState(null)
  const [result, setresult] = useState('')
  const [space, setspace] = useState([]);
  const [subject, setsubject] = useState([]);
  const user = firebase.auth().currentUser;
  const email = user.email; 

  useEffect(() => {
    const first = firestore().collection("회원").doc(email);
    first.get().then((doc)=>{
        if (doc.exists){
            const pandi = doc.data();
            const name = pandi["이름"];
            const explain = pandi["설명"];
            const re = pandi["result"];
            setNickname(name);
            setresult(re)
            setExp(explain);
        }
    })
  },[]);
  
  return (
    <View style={mainPageStyle.container}>
      {/* <HomeHeader navigation={navigation} /> */}
      <Image source={Logo} style={logo} />
      <View style={mainPageStyle.styledBox}>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection: 'column', margin: 10,alignItems:'center'}}> 
                    <View style={mainPageStyle.styledPicture}/>
                    <Text style={buttonTitleW}>{email}</Text>
                </View>
                <View style={{flex: 1,flexDirection:'column',justifyContent:'center', margin:10}}>
                    <TouchableOpacity style = {mainPageStyle.nicknamebutton} onPress = {() => {navigation.navigate("MyAccountScreen")}}>
                      <Text style={buttonTitleW}>{nickname}</Text>
                    </TouchableOpacity>
                    {/* <Button title = {nickname} buttonStyle = {mainPageStyle.nicknamebutton} titleStyle = {styledtext}
                        onPress = {() => {navigation.navigate("MyAccountScreen")}}/> */}
                    <View style={{padding:5, alignItems:'center', justifyContent:'center'}}><Text style={styledtext}>{exp}</Text></View>
                    {/*<Button title='상세보기' buttonStyle={mainPageStyle.styledButton} titleStyle={buttonTitleW}/>*/}
                </View>
            </View> 
      </View>

      {/* 메인화면 하단 스와이퍼 (자동) */}
      <View style={{flex:3, padding:5, marginBottom:5}}>
        <Swiper autoplay={true}>
          <View style={mainPageStyle.slide}>
            <Image
              source={{uri:"https://w.namu.la/s/65a44f971833d6cf2c16e58cb20d518a076aaae093902a1f75361caccef27e1435d612f3de2379cab174726aebe987e1cecbe9a56af4bdddea79f9b7dd8d7bc2b59160b9a95d99c8f703f3357d5d46e1940ffd7820476c3b25f8eecee5ad8febf58fa6389de49ff47831b60e2b115ce1"}}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <Text style={mainPageStyle.slideText}>치라미{"\n"}친칠라 포켓몬</Text>
          </View>
          <View style={mainPageStyle.slide}>
            <Image
              source={{uri:"https://w.namu.la/s/a09cdb2fadaef8fad8180f013d52ceaa89ee9b023cc5ba7f78bcd2febc5ce20843e4646c2529ec88a86988f8f79398f4f082f9036da6331d1fbcf80e6090f4b2ef4b45bee9de4449601744ac43c9115728fde766f0840c2a08ee5d788cb12a35e16d06abe9f0b9914fd81d51e049c9c0"}}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <Text style={mainPageStyle.slideText}>피카츄{"\n"}거다이맥스</Text>
          </View>
          <View style={mainPageStyle.slide}>
            <Image
              source={{uri:"https://w.namu.la/s/fd2f3f823495c22acc8eaaeeca4c6f22d0f61b0bde795915fa992d028ef821cd33a1138c75ba4cb974507472348e492e8a38548ee8db6f7006b42354252dd789b5a783f94c850110c91777100e900fa7c65863b517172804cd29ea3bbe1d95e2"}}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <Text style={mainPageStyle.slideText}>이브이{"\n"}거다이맥스</Text>
          </View>
          <View style={mainPageStyle.slide}>
            <Image
              source={{uri:"https://w.namu.la/s/9d70ee6444bb2695baa9fe667f0a5e9023e6e75dd3fc9d7ca0ec429b5954b94525f9ab2e1306616cedfa018d94c36caa986dc07eb5e711fe4e9ea366c6ba789deffce3e3414a957266af163d272dcaac2072e61e315426c0d775452c7753e2a0"}}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <Text style={mainPageStyle.slideText}>염버니{"\n"}토끼 포켓몬</Text>
          </View>
        </Swiper>
      </View>
    </View>
    
  );
}