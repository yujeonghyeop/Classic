import React from 'react';
import {View, TextInput, Image} from 'react-native'
import {logo, inquiryStyle} from '../../global/styles';
import Logo from '../../images/logo.png'
import {Button} from 'react-native-elements';
import { buttonTitleInquiry  } from '../../global/fontStyles';

export default class Inquiry extends React.Component {

    state = {
        title: '',
        content: ''
    }

    changeTitle = (title) => {
        this.setState({ title });
    };
    changeContent = (content) => {
        this.setState({ content });
    };

    render(){
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
}