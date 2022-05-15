// import React from 'react';
import React from 'react';
import{View,  StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements';
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
import { buttonTitleB } from '../global/fontStyles';
import {setting} from '../global/styles';

export default function BusinessConsoleScreen({navigation}){
    return(
        <View style={setting.container}>
            <Image source={Logo} style={logo} />
            <View style = {setting.AccountView}>
                <Button title="계정" buttonStyle ={setting.AccountButton} titleStyle={buttonTitleB} onPress = {() => { navigation.navigate("Account")}}/>
                <Button title="문의하기" buttonStyle ={setting.AccountButton} titleStyle={buttonTitleB} onPress = {() => { navigation.navigate("Inquiry")}}/>
                <Button title="피드백하기" buttonStyle={setting.AccountButton} titleStyle={buttonTitleB} onPress = {() => { navigation.navigate("Feedback")}}/>
            </View>
        </View>
        
    )
}
