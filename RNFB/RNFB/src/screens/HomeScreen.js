//로그인이 완료되면 메인화면, HomeScreen으로 오게된다.

import React,{useState,useEffect} from 'react';
import {View, Text, TouchableOpacity,Image, ScrollView} from 'react-native';
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
  const [result, setresult] = useState('')
  const [space, setspace] = useState([]);
  const [subject, setsubject] = useState([]);
  const user = firebase.auth().currentUser;
  const email = user.email; 
  
  const spaceshow = async () =>{
      firebase.firestore().collection(result+"_space").onSnapshot(snapshot =>{
           const tweet = snapshot.docs.map(doc => ({
               id : doc.id,
               ...doc.data(),
           }))
           setspace(tweet)
       })
}
   const subjectshow = async () =>{
      firebase.firestore().collection(result+"_subject").onSnapshot(snapshot =>{
           const tweet = snapshot.docs.map(doc => ({
               id : doc.id,
               ...doc.data(),
           }))
           setsubject(tweet)
       })
  
   }
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
            spaceshow()
            subjectshow()
        }
    })
    
},[]);
// setTimeout(()=>{
//   spaceshow()
//   subjectshow()
// },1000);
  return (
    <View style={mainPageStyle.container}>
      {/* <HomeHeader navigation={navigation} /> */}
      <Image source={Logo} style={logo} />
      <View style={mainPageStyle.styledBox}>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection: 'column', margin: 10,}}> 
                    <View style={mainPageStyle.styledPicture}/>
                    <Text style={styledtext}>{email}</Text>
                </View>
                <View style={{flex: 1,flexDirection:'column',justifyContent:'center', margin:10}}>
                    <TouchableOpacity style = {mainPageStyle.nicknamebutton} onPress = {() => {navigation.navigate("MyAccountScreen")}}>
                      <Text style={styledtext}>{nickname}</Text>
                    </TouchableOpacity>
                    {/* <Button title = {nickname} buttonStyle = {mainPageStyle.nicknamebutton} titleStyle = {styledtext}
                        onPress = {() => {navigation.navigate("MyAccountScreen")}}/> */}
                    <Text style={styledtext}>{exp}</Text>
                    {/*<Button title='상세보기' buttonStyle={mainPageStyle.styledButton} titleStyle={buttonTitleW}/>*/}
                </View>
            </View> 
      </View>
      <View style={{flex:3, padding:5, marginBottom:5}}ii>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {subject.map((data)=>(
          <View key ={data.name} style={mainPageStyle.viewStyle}>
            <Text>{data.name}</Text>
            <Text>{data.professor}</Text>
          </View>
        ))}
        </ScrollView>
      </View>

      <View style={{flex:3, padding:5, marginBottom:5}}ii>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {space.map((data)=>(
          <View  key ={data.name} style={mainPageStyle.viewStyle}>
            <Text>{data.name}</Text>
            <Text>{data.location}</Text>
          </View>
        ))}
        </ScrollView>
      </View>
    </View>
    
  );
}