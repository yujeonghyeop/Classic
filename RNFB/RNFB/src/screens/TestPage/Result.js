import React, {useState,useEffect} from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'
import firestore, { firebase } from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

export default function Result({navigation}){
    const getImage = async key => {
        let url = '';
        try {
          const imageRef = storage().ref('모차르트.png');
          url = await imageRef.getDownloadURL();
          setUrl(url);
          console.log('1')
          console.log('imageUrl:', url);
          return url;
        } catch (e) {
          console.log(e);
        }
      };
      getImage()
    const [score, setScore] = useState(1);
    const user = firebase.auth().currentUser;
    const email = user.email;
    const first = firestore().collection(email).doc("결과");
    async function Read(){
        await first.get().then((doc)=>{
            if (doc.exists){
                const pandi = doc.data();
                const plan = pandi["result"];
                console.log(plan)
                setScore(plan);
            }
        })
    }
    useEffect(()=>{
        Read();
    })
    return(
        <View style = {styles.container}>
            <Text style={styles.styledFont}>your score : {score}!</Text>
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
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
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