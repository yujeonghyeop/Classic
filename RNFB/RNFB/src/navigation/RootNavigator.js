//전체적인 navigatior 관리
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './authNavigators';

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}