//로그인이 완료되면 메인화면, HomeScreen으로 오게된다.

import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import Profile from '../components/Profile';
import logo from '../images/logo.png';
import {colors, parameters, title} from '../global/styles';
import Swiper from 'react-native-swiper';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* <HomeHeader navigation={navigation} /> */}
      <Image source={logo} style={styles.logo} />
      <Profile style={{flex:1}}/>
      <Button
        title="검사하러 가기"
        buttonStyle={styles.styledButton}
        titleStyle={parameters.buttonTitle}
        //button에 스타일 입히기
        onPress={() => {
          navigation.navigate('Test1');
        }}
        //이 버튼을 누를 때 SignInScreen으로 가라는 navigation 등록
      />
      <View style={{flex:8, justifyContent:"space-between", marginTop:"5%"}}>
        <Swiper loop={false} showsPagination={false} s>
          <View style={styles.slide1}></View>
          <View style={styles.slide2}></View>
          <View style={styles.slide3}></View>
          <View style={styles.slide2}></View>
        </Swiper>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
  logo:{
    width: 250,
    height: 42,
    alignSelf: 'center',
    margin: 10,
    marginTop: 40
  },
  styledButton: {
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
  slide1: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#9DD6EB',
  },
  slide2: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#97CAE5'
  },
  slide3: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#92BBD9'
  }
});
