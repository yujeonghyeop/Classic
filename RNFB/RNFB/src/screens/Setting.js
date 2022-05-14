import React from 'react';
import{View,  StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements';
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
import { styledtext } from '../global/fontStyles';

export default function BusinessConsoleScreen(){
    return(
        <View style={{flexDirection:'column', justifyContent: 'space-evenly'}}>
            <Image source={Logo} style={logo} />
            <View style = {{flexDirection:'column', backgroundColor : '#E8E8F2'}}>
                <Button title="계정" buttonStyle ={style.button} titleStyle={styledtext}/>
                <Button title="문의 또는 피드백하기" buttonStyle={style.button} titleStyle={styledtext}/>
            </View>
        </View>
        
    )
}

const style = StyleSheet.create({
    button:{
        backgroundColor: '#E8E8F2',
    }
})