import React, {useState,useEffect} from 'react'
import{View, Text, StyleSheet, Image} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'
import firestore, { firebase } from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import SplashScreen from 'react-native-splash-screen';

export default function Result({navigation}){
    useEffect(() => {
        try {
          setTimeout(() => {
            SplashScreen.hide(); /** 추가 **/
          }, 2000); /** 스플래시 시간 조절 (2초) **/
        } catch(e) {
          console.warn('에러발생');
          console.warn(e);
        }
      });
      
    const [url, setUrl] = useState('');
    const [cnt, setCnt] = useState(false);
    const getImage15 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/헨델.png');
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage18 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/베토벤.png');
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage20 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/브람스.png');
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage24 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/하이든.png');
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage30 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/슈베르트.png');
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage36 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/쇼팽.png');
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage40 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/모차르트.png');
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const getImage48 = async key =>{
        const imageRef = storage().refFromURL('gs://rnfb-123ee.appspot.com/바흐.png');
        a = await imageRef.getDownloadURL();
        setUrl(a);
        setCnt(true);
    }
    const [score, setScore] = useState(1);
    const user = firebase.auth().currentUser;
    const email = user.email;
    const first = firestore().collection(email).doc("결과");
    async function Read(){
        await first.get().then((doc)=>{
            if (doc.exists){
                const pandi = doc.data();
                const plan = pandi["result"];
                if (plan === 15){
                    setScore(plan);
                    getImage15();
                }
                else if(plan === 18){
                    setScore(plan);
                    getImage18();
                }
                else if (plan === 20){
                    setScore(plan);
                    getImage20();
                }
                else if (plan === 24){
                    setScore(plan);
                    getImage24();
                }
                else if (plan === 30){
                    setScore(plan);
                    getImage30();
                }
                else if (plan === 36){
                    setScore(plan);
                    getImage36();
                } 
                else if (plan === 40){
                    setScore(plan);
                    getImage40();
                }
                else if (plan === 48){
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
        <View style = {styles.container}>
            {console.log(url)}
            <Image 
                style = {{width:300, height:400}}
                source = {{uri : url}} 
                />
            <Button 
            title = "검사 다시하기"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                        //button에 스타일 입히기
                onPress = {() => {
                    navigation.navigate("Test1")
            }}
            />
            <Button 
            title = "Main Page로 가기"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                        //button에 스타일 입히기
                onPress = {() => {
                    navigation.navigate("HomeScreen")
            }}
            />
        </View>
    ) : null
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    styledButton :{     //button 스타일 지정
        backgroundColor : '#6667ab',
        alignContent : "center",
        justifyContent : "center",
        borderRadius : 12,
        borderWidth :1,
        borderColor:'#6667ab',
        height:50,
        paddingHorizontal:20,
        width:350,
        marginTop : 50
    },
    styledQ :{
        fontSize : 30,
        color:'#6667ab',
        fontWeight:'bold',
        marginBottom:10
    },
    styledFont:{
        fontSize : 19,
        color:'black',
        fontWeight:'bold',
    }
})