//로그인이 완료되면 메인화면, HomeScreen으로 오게된다.

import React,{useState} from 'react';
import {View, Text, StyleSheet,Image, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {buttonTitleW,buttonTitleB, styledtext} from '../global/fontStyles';
import HomeHeader from '../components/HomeHeader';
import {logo, mainPageStyle} from '../global/styles';
import Logo from '../images/logo.png';
import {colors, parameters, title} from '../global/styles';
import firestore, { firebase } from '@react-native-firebase/firestore'

export default function HomeScreen({navigation}) {
  const [nickname, setNickname] = useState(null)
  const [exp, setExp] = useState(null)
  const user = firebase.auth().currentUser;
  const email = user.email; 
  const first = firestore().collection(email).doc("결과");
  first.get().then((doc)=>{
      if (doc.exists){
          const pandi = doc.data();
          const name = pandi["이름"];
          const explain = pandi["설명"];
          setNickname(name);
          setExp(explain);
      }
  })
  return (
    <View style={mainPageStyle.container}>
      {/* <HomeHeader navigation={navigation} /> */}
      <Image source={Logo} style={logo} />
      <View style={mainPageStyle.styledBox}>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection: 'column', margin: 10}}> 
                    <View style={mainPageStyle.styledPicture}/>
                    <Text style={styledtext}>{email}</Text>
                </View>
                <View style={{flex: 1,flexDirection:'column',alignItems:'center', margin:10}}>
                    <Button title = {nickname} buttonStyle = {mainPageStyle.nicknamebutton} titleStyle = {styledtext}
                        onPress = {() => { navigation.navigate("MyAccountScreen")}}/>
                    <Text style={styledtext}>{exp}</Text>
                    <Button title='상세보기' buttonStyle={mainPageStyle.styledButton} titleStyle={buttonTitleW}/>
                </View>
            </View> 
      </View>
      <View style = {{flex:1, alignItems:'center', margin:5}}>
         <Button
        title="검사하러 가기"
        buttonStyle={mainPageStyle.styledButton1}
        titleStyle={buttonTitleB}
        //button에 스타일 입히기
        onPress={() => {
          navigation.navigate('Test1');
        }}
        //이 버튼을 누를 때 SignInScreen으로 가라는 navigation 등록
      />
      </View>
      <View style={{flex:5, padding:5, marginBottom:5}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={mainPageStyle.viewStyle}></View>
          <View style={mainPageStyle.viewStyle}></View>
          <View style={mainPageStyle.viewStyle}></View>
          <View style={mainPageStyle.viewStyle}></View>
          <View style={mainPageStyle.viewStyle}></View>
        </ScrollView>
      </View>
    </View>
    
  );
}
