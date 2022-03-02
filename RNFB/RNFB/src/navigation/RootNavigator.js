//전체적인 navigatior 관리
import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './authNavigators';   //인증 절차를 거치는 화면들
import { AppStack } from './appStack';  //인증이 완료되면 보여져야 하는 화면들 
import { SignInContext } from '../contexts/authContext';

export default function RootNavigator(){

const {signedIn} = useContext(SignInContext)
    return(
        <NavigationContainer>
            {
                signedIn.userToken !=='signed-in'?(
                    <AuthStack />
                ):(
                    <AppStack />
                )
            }
        </NavigationContainer>
    )
}