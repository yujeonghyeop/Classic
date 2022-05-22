import React from 'react';
import{View, TextInput, StyleSheet, Image} from 'react-native'
import {logo, inquiryStyle} from '../../global/styles';
import Logo from '../../images/logo.png'
import {Button} from 'react-native-elements';
import { buttonTitleInquiry  } from '../../global/fontStyles';
import { render } from 'express/lib/response';

export default function Inquiry(){

    state = {
        title: '',
        content: ''
    }

    changeTitle = (title) => {
        this.setState({title});
    };
    changeContent = (content) => {
        this.setState({content});
    };

    const {title, content} = this.state;
        
    return(
        <View style = {inquiryStyle.container}>
            <Image source={Logo} style={logo} />
            <View style ={inquiryStyle.titleView}>
                <TextInput 
                    onChangeText={this.changeTitle}
                    placeholder="제목"
                    value={title}
                />
            </View>
            <View style ={inquiryStyle.contentView}>
                <TextInput 
                    onChangeText={this.changeContent}
                    placeholder="내용을 입력하세요"
                    value={content}
                />
            </View>
            <Button title="문의 제출하기" buttonStyle={inquiryStyle.buttonStyle} titleStyle={buttonTitleInquiry}/>
        </View>
    )
}