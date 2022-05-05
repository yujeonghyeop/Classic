import React,{useState} from 'react'

import{View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import firestore, { firebase } from '@react-native-firebase/firestore'

export default function Profile(){

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
//profile에 닉네임, 종류, 설명을 위한 data 다운
    return(
        <View style={styles.styledBox}>
            <View style={{flexDirection:'row'}}>
                
                <View style={styles.styledPicture}>
                    <Text>{email}</Text>
                </View>
                <View style={{margin: 20}}>
                    <Text>{nickname}</Text>
                    <Text>{exp}</Text>
                    <Button title='상세보기' buttonStyle={styles.styledButton} titleStyle={styles.buttonTitle}/>
                </View>
                
            </View> 
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin :10
    },
    styledPicture:{
        //사진 넣는 곳
        backgroundColor:'#6767A6',
        borderRadius: 75,
        width: 100,
        height: 100,

        
    },
    styledBox: {
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
    styledButton:{
        backgroundColor: '#FFFFFF',
        opacity:0.3,
        borderRadius: 10,
        width:200
       
    },
    buttonTitle:{
        color:'black',
        fontSize: 15,
    },
  });