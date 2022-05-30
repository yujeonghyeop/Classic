//로그인이 완료되면 메인화면, HomeScreen으로 오게된다.

import React,{useState,useEffect} from 'react';
import { useIsFocused } from '@react-navigation/core';
import {View, Text, TouchableOpacity,Image, ScrollView} from 'react-native';
import {buttonTitleW,buttonTitleB, styledtext} from '../global/fontStyles';
import {logo, mainPageStyle} from '../global/styles';
import Logo from '../images/logo.png';
import Swiper from 'react-native-swiper';
import firestore, { firebase } from '@react-native-firebase/firestore';
import mozart from '../images/mozart.png';
import bach from '../images/bach.png';
import beethoven from '../images/beethoven.png';
import brahms from '../images/brahms.png';
import chopin from '../images/chopin.png';
import haydn from '../images/Haydn.png';
import hendel from '../images/hendel.png';
import schubert from '../images/Schubert.png';

import bachMain from '../images/bachMain.jpg';
import beethovenMain from '../images/beethovenMain.jpg';
import brahmsMain from '../images/brahmsMain.jpg';
import chopinMain from '../images/chopinMain.jpg';
import mozartMain from '../images/mozartMain.jpg';
import HaydnMain from '../images/HaydnMain.jpg';
import hendelMain from '../images/hendelMain.jpg';
import SchubertMain from '../images/SchubertMain.jpg';
import noMain from '../images/noMain.jpg';

export default function HomeScreen({navigation}) {
  const isFocused = useIsFocused();
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
  },[isFocused]);
  

  const profile = (name) => {
    if(name === "로맨티스트 브람스"){
      return brahmsMain;
    }
    else if(name === "피아노의 시인 쇼팽"){
      return chopinMain;
    }
    else if(name === "악성 베토벤"){
      return beethovenMain;
    }
    else if(name === "음악의 신동 모차르트"){
      return mozartMain;
    }
    else if(name === "음악의 아버지 바흐"){
      return bachMain;
    }
    else if(name === "가곡의 왕 슈베르트"){
      return SchubertMain;
    }
    else if(name === "교향곡의 아버지 하이든"){
      return HaydnMain;
    }
    else if(name === "음악의 어머니 헨델"){
      return hendelMain;
    }
    return noMain;
  }
  return (
    <View style={mainPageStyle.container}>
      {/* <HomeHeader navigation={navigation} /> */}
      <Image source={Logo} style={logo} />
      <View style={mainPageStyle.styledBox}>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection: 'column', margin: 10,alignItems:'center'}}> 
                    <View style={mainPageStyle.styledPicture}>
                      <Image
                        source={profile(nickname)}
                        style={{width:"140%", height:"140%", margin:'5%', borderRadius:20}}
                      />
                      </View>
                      <Text style={buttonTitleW}>{email}</Text>
                </View>
                <View style={{flex: 1,flexDirection:'column',justifyContent:'center', margin:10}}>
                    <TouchableOpacity style = {mainPageStyle.nicknamebutton} onPress = {() => {navigation.navigate("MyAccountScreen")}}>
                      {result===0 ?<Text>검사를 진행해 주세요!</Text> : <Text style={buttonTitleW}>{nickname}</Text> }
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
              <View style={mainPageStyle.slideTextView}>
                <Text style={mainPageStyle.slideText1}>모차르트{"\n"}음악의 신동</Text>
                <Text style={mainPageStyle.slideText2}>음악가의 집안에서 태어난{"\n"}모차르트는 5살 때 이미{"\n"}미뉴에트와 트리오를 모두{"\n"}외워 연주하기도 했고,{"\n"}6살 때 부터는{"\n"}유럽전역에 걸친 연주를{"\n"}다니며 음악의 신동이라{"\n"}불리게 되었다.</Text>
              </View>
          </View>

          <View style={mainPageStyle.slide}>
            <Image
              source={bach}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <View style={mainPageStyle.slideTextView}>
                <Text style={mainPageStyle.slideText1}>바흐{"\n"}음악의 아버지</Text>
                <Text style={mainPageStyle.slideText2}>음악의 아버지인 이유는{"\n"}바흐가 모든 음악의{"\n"}기초공사를 했기에{"\n"}후대 작곡가들을 통해{"\n"}재탄생 되었기 때문이다.</Text>
            </View>
          </View>

          <View style={mainPageStyle.slide}>
            <Image
              source={beethoven}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <View style={mainPageStyle.slideTextView}>
                <Text style={mainPageStyle.slideText1}>베토벤{"\n"}음악의 성인</Text>
                <Text style={mainPageStyle.slideText2}>성인이라고 불리게 된{"\n"}가장 큰 이유는{"\n"}고전시대에서 낭만시대로{"\n"}연결하는 다리가 되었던{"\n"}사람이었기 때문이다.</Text>
            </View>
          </View>

          <View style={mainPageStyle.slide}>
            <Image
              source={brahms}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <View style={mainPageStyle.slideTextView}>
                <Text style={mainPageStyle.slideText1}>브람스{"\n"}음악계의 로맨티스트</Text>
                <Text style={mainPageStyle.slideText2}>독일음악의 정통성을{"\n"}계승하는 순수주의자였으며,{"\n"}음악의 진화를 신봉하는{"\n"}완벽주의자였고,{"\n"}철학적인 절제로 미를{"\n"}추구하는 로맨티스트였다.</Text>
            </View>
          </View>

          <View style={mainPageStyle.slide}>
            <Image
              source={chopin}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <View style={mainPageStyle.slideTextView}>
                <Text style={mainPageStyle.slideText1}>쇼팽{"\n"}피아노의 시인</Text>
                <Text style={mainPageStyle.slideText2}>쇼팽의 곡은 독특한 선율로{"\n"}시를 읊는 느낌이 들며{"\n"}많은 대중들에게 공감을{"\n"}만들어낸다. 쇼팽은{"\n"}노래하는 목소리의{"\n"}아름다움을 재현하기 위해{"\n"}피아노를 쓴다고 한다.</Text>
            </View>
          </View>

          <View style={mainPageStyle.slide}>
            <Image
              source={schubert}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <View style={mainPageStyle.slideTextView}>
                <Text style={mainPageStyle.slideText1}>슈베르트{"\n"}가곡의 왕</Text>
                <Text style={mainPageStyle.slideText2}>가곡의 반주에 스토리를 입혀{"\n"}일반적인 가곡을{"\n"}예술의 경지로 끌어 올렸다.{"\n"}생전에 633개의{"\n"}가곡을 만들었으며{"\n"}많은 문필가의 시를 이용하여{"\n"}가곡의 왕이라 불린다.</Text>
            </View>
          </View>

          <View style={mainPageStyle.slide}>
            <Image
              source={haydn}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <View style={mainPageStyle.slideTextView}>
                <Text style={mainPageStyle.slideText1}>하이든{"\n"}교향곡의 아버지</Text>
                <Text style={mainPageStyle.slideText2}>30년 넘게 에스테하지가의{"\n"}궁정음악가로 있으면서{"\n"}모든 교향곡의 틀을 정립한{"\n"}사람이다. 하이든의 교향곡은{"\n"}100곡이 넘으며 이 때문에{"\n"}교향곡의 아버지라 불린다.</Text>
            </View>
          </View>

          <View style={mainPageStyle.slide}>
            <Image
              source={hendel}
              style={{width:"50%", height:"100%", margin:'5%'}}
            />
            <View style={mainPageStyle.slideTextView}>
                <Text style={mainPageStyle.slideText1}>헨델{"\n"}음악의 어머니</Text>
                <Text style={mainPageStyle.slideText2}>성서적인 내용을{"\n"}토대로 다루는 오라토리오가{"\n"}대표적인 음악장르이며,{"\n"}그의 부드럽고 온유한{"\n"}어머니의 모습을 보이는{"\n"}음악적 스타일 때문에{"\n"}음악의 어머니라 불린다.</Text>
            </View>
          </View>
        </Swiper>
      </View>
    </View>
  );
}