//로그인이 완료되면 메인화면, HomeScreen으로 오게된다.

import React from 'react';
import {View, Text, StyleSheet,Image, ScrollView, Dimensions} from 'react-native';
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
        <ScrollView horizontal={true}>
          <View style={styles.viewStyle1}>
            <Text style = {styles.textStyle}>Screen 1</Text>
          </View>
          <View style={styles.viewStyle2}>
            <Text style = {styles.textStyle}>Screen 2</Text>
          </View>
          <View style={styles.viewStyle3}>
            <Text style = {styles.textStyle}>Screen 3</Text>
          </View>
        </ScrollView>
      </View>
    </View>
    
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
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
  viewStyle1: {
    backgroundColor : "#5f9ea0",
    flex: 1,
    width : screenWidth,
    height : screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewStyle2: {
    backgroundColor : "#08f000",
    flex: 1,
    width : screenWidth,
    height : screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewStyle3: {
    backgroundColor : "#ff0043",
    flex: 1,
    width : screenWidth,
    height : screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize : 20,
    padding : 15,
    color : 'white',
    textAlign: 'center'
  }
});
