// import React from 'react';
import React,{useContext} from 'react';
import{View,  StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements';
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
import { buttonTitleB } from '../global/fontStyles';
import {setting} from '../global/styles';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../contexts/authContext';

export default function BusinessConsoleScreen({navigation}){

const{dispatchSignedIn} = useContext(SignInContext)

async function signOut(){   //로그아웃을 하기 위한 function
    
    try{
        auth()
        .signOut()
        .then(
            ()=>{
                console.log("USER SUCCESFULLY SIGNED OUT")
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
            })
    }catch(err){
        Alert.alert(err.code)
    }
}

    return(
        <View style={setting.container}>
            <Image source={Logo} style={logo} />
            <View style = {setting.AccountView}>
                <Button title="Logout" buttonStyle ={setting.AccountButton} titleStyle={buttonTitleB} onPress = {() => { signOut()}}/>
                <Button title="Q&A" buttonStyle ={setting.AccountButton} titleStyle={buttonTitleB} onPress = {() => { navigation.navigate("Inquiry")}}/>
            </View>
        </View>
        
    )
}
