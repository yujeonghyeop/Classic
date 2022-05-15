//로그인 인증이 완료되면 이 화면을 띄워준다.
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import Test1 from '../screens/TestPage/Test1'
import Test2 from '../screens/TestPage/Test2'
import Test3 from '../screens/TestPage/Test3'
import Test4 from '../screens/TestPage/Test4';
import Result from '../screens/TestPage/Result';
import Test5 from '../screens/TestPage/Test5';
import Test6 from '../screens/TestPage/Test6';
import Test7 from '../screens/TestPage/Test7';
import Test8 from '../screens/TestPage/Test8';
import Test9 from '../screens/TestPage/Test9';
import cal from '../screens/TestPage/cal';
import MyAccountScreen from '../screens/MyAccountScreen';
import Account from '../screens/settingScreen/Account';
import Passward from '../screens/settingScreen/Passward';
import Logout from '../screens/settingScreen/Logout';
import Inquiry from '../screens/settingScreen/Inquiry';
import Feedback from '../screens/settingScreen/Feedback';

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
            
            <App.Screen
                 name = "MyAccountScreen"
                 component = {MyAccountScreen}
                 options ={{
                     headerShown : false,
                     ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />

            <App.Screen
                name = "Test1"
                component = {Test1}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Test2"
                component = {Test2}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Test3"
                component = {Test3}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Test4"
                component = {Test4}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Test5"
                component = {Test5}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Test6"
                component = {Test6}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Test7"
                component = {Test7}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Test8"
                component = {Test8}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Test9"
                component = {Test9}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "cal"
                component = {cal}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Result"
                component = {Result}
                options = {{
                    headerShown : false
                }}
            />
             <App.Screen
                name = "Account"
                component = {Account}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Passward"
                component = {Passward}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Logout"
                component = {Logout}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Inquiry"
                component = {Inquiry}
                options = {{
                    headerShown : false
                }}
            />
            <App.Screen
                name = "Feedback"
                component = {Feedback}
                options = {{
                    headerShown : false
                }}
            />
        </App.Navigator>
    )
}
