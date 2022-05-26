//로그인이 완료되면 메인화면, HomeScreen으로 오게된다.

import React,{useState,useEffect} from 'react';
import {View, Text, TouchableOpacity,Image, ScrollView} from 'react-native';
import {buttonTitleW,buttonTitleB, styledtext} from '../global/fontStyles';
import {logo, mainPageStyle} from '../global/styles';
import Logo from '../images/logo.png';
import Swiper from 'react-native-swiper';
import firestore, { firebase } from '@react-native-firebase/firestore';
import mozart from '../images/mozart.png';
import bach from '../images/bach.png';
import bach2 from '../images/bach.jpg';
import beethoven from '../images/beethoven.png';
import brahms from '../images/brahms.png';
import chopin from '../images/chopin.png';

export default function HomeScreen({navigation}) {
  const [nickname, setNickname] = useState(null)
  const [exp, setExp] = useState(null)
  const [result, setresult] = useState('')
  const [moza, setmoza] = useState()
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
                    <View style={mainPageStyle.styledPicture}>
                      <Image
                        source={bach2}
                        style={{width:"140%", height:"140%", margin:'5%', borderRadius:20}}
                      />
                      </View>
                      <Text style={buttonTitleW}>{email}</Text>
                </View>
                <View style={{flex: 1,flexDirection:'column',justifyContent:'center', margin:10}}>
                    <TouchableOpacity style = {mainPageStyle.nicknamebutton} onPress = {() => {navigation.navigate("MyAccountScreen")}}>
                      <Text style={buttonTitleW}>{nickname}</Text>
                    </TouchableOpacity>
                    {/* <Button title = {nickname} buttonStyle = {mainPageStyle.nicknamebutton} titleStyle = {styledtext}
                        onPress = {() => {navigation.navigate("MyAccountScreen")}}/> */}
                    <View style={{padding:5, alignItems:'center', justifyContent:'center'}}><Text style={buttonTitleW}>{exp}</Text></View>
                    {/*<Button title='상세보기' buttonStyle={mainPageStyle.styledButton} titleStyle={buttonTitleW}/>*/}
                </View>
            </View> 
      </View>

      {/* 메인화면 하단 스와이퍼 (자동) */}
      <View style={{flex:5, padding:5, marginBottom:5}}>
        <Swiper autoplay={true}>
          <View style={mainPageStyle.slide}>
              <Image
                source={mozart}
                style={{width:"50%", height:"100%", margin:'5%'}}
              />
              <Text style={mainPageStyle.slideText}>모차르트{"\n"}음악의 신동</Text>  
          </View>
          <View style={mainPageStyle.slide}>
            <Image
              source={bach}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <Text style={mainPageStyle.slideText}>바흐{"\n"}음악의 아버지</Text>
          </View>
          <View style={mainPageStyle.slide}>
            <Image
              source={beethoven}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <Text style={mainPageStyle.slideText}>베토벤{"\n"}음악의 성인</Text>
          </View>
          <View style={mainPageStyle.slide}>
            <Image
              source={brahms}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <Text style={mainPageStyle.slideText}>브람스{"\n"}음악계의 로맨티스트</Text>
          </View>
          <View style={mainPageStyle.slide}>
            <Image
              source={chopin}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <Text style={mainPageStyle.slideText}>쇼팽{"\n"}피아노의 시인</Text>
          </View>
        </Swiper>
      </View>
    </View>
  );
}