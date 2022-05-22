import React, { useState } from 'react';
import {View, TextInput, Image} from 'react-native'
import {logo, inquiryStyle} from '../../global/styles';
import Logo from '../../images/logo.png'
import {Button} from 'react-native-elements';
import { buttonTitleInquiry  } from '../../global/fontStyles';
import firestore, { firebase } from '@react-native-firebase/firestore';


export default function Inquiry({navigation}) {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const user = firebase.auth().currentUser;
    const email = user.email; //현재 접속죽인 user의 email을 가져온다.

    const goInquiryResult = async key => {
        console.log(title, content)
        firestore().collection("feedback").doc(email).set({
            제목 : title,
            내용 : content
          })  
    }
        return(
            <View style = {inquiryStyle.container}>
                <Image source={Logo} style={logo} />
                <View style ={inquiryStyle.titleView}>
                    <TextInput 
                        onChangeText={settitle}
                        placeholder="제목"
                        value={title}
                    />
                </View>
                <View style ={inquiryStyle.contentView}>
                    <TextInput 
                        onChangeText={setcontent}
                        placeholder="내용을 입력하세요"
                        value={content}
                    />
                </View>
                <Button title="문의 제출하기" buttonStyle={inquiryStyle.buttonStyle} titleStyle={buttonTitleInquiry}
                    onPress = {() => {
                        goInquiryResult()
                        navigation.navigate("InquiryResult")
                }}
                />
            </View>
        )
    }
