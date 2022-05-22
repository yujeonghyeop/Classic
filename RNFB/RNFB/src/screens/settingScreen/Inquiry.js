import React from 'react';
import{View, Text, StyleSheet, Image} from 'react-native'
import {logo, inquiryStyle} from '../../global/styles';
import Logo from '../../images/logo.png'
import {Button} from 'react-native-elements';
import { buttonTitleInquiry  } from '../../global/fontStyles';
import {setting} from '../../global/styles';

export default function Inquiry(){
    return(
        <View style = {setting.container}>
            <Image source={Logo} style={logo} />
            <View style ={setting.AccountView}>
            </View>
            <Button title="문의 제출하기" buttonStyle={inquiryStyle.buttonStyle} titleStyle={buttonTitleInquiry}/>
        </View>
    )
}