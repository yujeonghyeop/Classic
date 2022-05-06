//로그인이 완료되면 메인화면, HomeScreen으로 오게된다.

import React,{useState} from 'react';
import {View, Text, StyleSheet,Image, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import Profile from '../components/Profile';
import logo from '../images/logo.png';
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
    <View style={styles.container}>
      {/* <HomeHeader navigation={navigation} /> */}
      <Image source={logo} style={styles.logo} />
      {/* <Profile style={{flex:1}}/>
      profile 전시 */}
      <View style = {{flex:1}}> 
      <View style={styles.styledBox}>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={styles.styledPicture}/>
                    <Text
                    style={{
                        fontFamily: 'FrankRuhlLibre-Light',
                    }}>{email}</Text>
                </View>
                <View style={{flex: 1, margin: 20, flexDirection:'column'}}>
                    <Button
                    title = {nickname}
                    buttonStyle = {styles.nicknamebutton}
                    titleStyle = {styles.nicknametitle}
                        onPress = {() => {
                            navigation.navigate("MyAccountScreen")
                        }}
                    />
                    <Text
                    style={{
                        fontFamily: 'GowunBatang-Bold',
                    }}>{exp}</Text>
                    <Button title='상세보기' buttonStyle={styles.styledButton} titleStyle={styles.buttonTitle}/>
                </View>
            </View> 
        </View>
        </View>
      <Button
        title="검사하러 가기"
        buttonStyle={styles.styledButton1}
        titleStyle={parameters.buttonTitle}
        //button에 스타일 입히기
        onPress={() => {
          navigation.navigate('Test1');
        }}
        //이 버튼을 누를 때 SignInScreen으로 가라는 navigation 등록
      />
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.viewStyle}></View>
          <View style={styles.viewStyle}></View>
          <View style={styles.viewStyle}></View>
          <View style={styles.viewStyle}></View>
          <View style={styles.viewStyle}></View>
        </ScrollView>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#FFFFFF'
    },
    logo:{
      width: 250,
      height: 42,
      alignSelf: 'center',
      margin: 10,
      marginTop: 40
    },
    nicknamebutton : {
      backgroundColor : '#E8E8F2'
    },
    nicknametitle:{
      color:'black',
      fontSize: 15,
      fontFamily: 'GowunBatang-Bold'
    },
    styledButton1: { //검사하러가기 버튼 스타일
      //button 스타일 지정
      backgroundColor: '#6667ab',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#6667ab',
      height: 50,
      paddingHorizontal: 20,
      width: '50%',
      marginTop: 10,
      marginLeft: 100,
    },
    viewStyle: { //Swipe 스타일
      backgroundColor : "#6667ab",
      flex: 1,
      width : 200,
      height : 250,
      justifyContent: 'center',
      alignItems: 'center',
      margin:20
    },
    styledPicture:{ 
      //사진 넣는 곳
      backgroundColor:'#6767A6',
      borderRadius: 75,
      width: 100,
      height: 100,
  },
  styledBox: {  //box style
  //box
    backgroundColor: '#E8E8F2',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 150,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
  },
  styledButton:{  //상세보기 버튼 디자인
      backgroundColor: '#FFFFFF',
      opacity:0.3,
      borderRadius: 10,
      width:200
    
  },
  buttonTitle:{
      color:'black',
      fontSize: 15,
      fontFamily: 'GowunBatang-Bold'
  },
  });
