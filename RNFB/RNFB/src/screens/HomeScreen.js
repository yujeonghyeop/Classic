//로그인이 완료되면 메인화면, HomeScreen으로 오게된다.

import React from 'react';
import {View, Text, StyleSheet,Image, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import Profile from '../components/Profile';
import logo from '../images/logo.png';
import {colors, parameters, title} from '../global/styles';

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
    backgroundColor:'#FFFFFF',
  },
  logo:{
    width: 250,
    height: 42,
    alignSelf: 'center',
    margin: 10,
    marginTop: 40,
    alignItems: 'center'
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
  viewStyle: {
    backgroundColor : "#6667ab",
    flex: 1,
    width : 200,
    height : 250,
    justifyContent: 'center',
    alignItems: 'center',
    margin:20
  }
});
