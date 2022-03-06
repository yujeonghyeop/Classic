//로그인 인증이 완료되면 이 화면을 띄워준다.
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';

const App = createStackNavigator();

export function AppStack(){
    return(
        <App.Navigator>
             <App.Screen 
                name = "App"
                component = {DrawerNavigator}    //로그인 인증이 되었을 때 HomeScreen 대신에 ClientTab을 띄우게 한다.
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />     
        </App.Navigator>
    )
}
