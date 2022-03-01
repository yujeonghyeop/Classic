import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import RootClientTabs from './ClientTabs';

const App = createStackNavigator();

export function AppStack(){
    return(
        <App.Navigator>
             <App.Screen 
                name = "RootClientTabs"
                component = {RootClientTabs}
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />     
        </App.Navigator>
    )
}
