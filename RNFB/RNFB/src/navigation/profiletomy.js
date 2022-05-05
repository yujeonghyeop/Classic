import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../components/Profile';
import MyAccountScreen from '../screens/MyAccountScreen';
import { NavigationContainer } from '@react-navigation/native';

const profileto = createStackNavigator();

export default function profileNavigator(){
    return(
        <profileto.Navigator>
            <profileto.Screen 
                name = "Profile"
                component = {Profile}
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <profileto.Screen 
                name = "MyAccountScreen"
                component = {MyAccountScreen}
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </profileto.Navigator>
    )
}
