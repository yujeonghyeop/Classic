import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator
            tabBarOptions = {{
                activeTintColor : colors.buttons
            }}
        >
            <ClientTabs.Screen 
                name = "HomeScreen"
                component = {HomeScreen}
                options = {
                    {
                        tabBarLabel : "Home",
                        tabBarIcon : ({color,size}) =>(
                            <Icon 
                                name = 'home'
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            
            />
        </ClientTabs.Navigator>
    )
}