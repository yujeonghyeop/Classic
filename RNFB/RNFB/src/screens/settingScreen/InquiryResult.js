import React from 'react';
import {View, Text, Image} from 'react-native'
import {logo, inquiryStyle} from '../../global/styles';
import Logo from '../../images/logo.png'
import {Button} from 'react-native-elements';
import { buttonTitleInquiry  } from '../../global/fontStyles';

export default function InquiryResult({navigation}){
    return(
        <View style = {inquiryStyle.InquiryResultcontainer}>
            <Image source={Logo} style={logo} />
            <View style = {inquiryStyle.InquiryResultTextView}>
                <Text style={inquiryStyle.InquiryResultFont}>문의가 접수되었습니다</Text>
                <Text style={inquiryStyle.InquiryResultFont}>감사합니다</Text>
            </View>
            <Button title="홈으로 돌아가기" buttonStyle={inquiryStyle.buttonStyle} titleStyle={buttonTitleInquiry}
                onPress={() => {navigation.navigate("MainScreen")}}
            />
        </View>
    )
}