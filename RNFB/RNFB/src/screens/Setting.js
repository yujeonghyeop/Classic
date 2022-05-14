import React from 'react';
import{View,  StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements';
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
import { styledtext } from '../global/fontStyles';

export default function BusinessConsoleScreen({navigation}){
    return(
        <View style={{flexDirection:'column', justifyContent: 'space-evenly'}}>
            <Image source={Logo} style={logo} />
            <View style = {{flexDirection:'column', backgroundColor : '#E8E8F2',justifyContent: 'space-between' }}>
                <Button title="계정" buttonStyle ={style.button} titleStyle={styledtext} onPress = {() => { navigation.navigate("Account")}}/>
                <Button title="문의하기" buttonStyle ={style.button} titleStyle={styledtext} onPress = {() => { navigation.navigate("Inquiry")}}/>
                <Button title="피드백하기" buttonStyle={style.button} titleStyle={styledtext} onPress = {() => { navigation.navigate("Feedback")}}/>
            </View>
        </View>
        
    )
}

const style = StyleSheet.create({
    button:{
        backgroundColor: '#E8E8F2',
        height:50,
        paddingHorizontal:20,
        width:"70%",
        alignSelf: 'flex-start'
    }
})