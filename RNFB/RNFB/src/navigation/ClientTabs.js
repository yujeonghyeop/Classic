//Client Tab 나타내는 스크린
import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen'
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import SettingScreen from "../screens/Setting";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){   //App Stack과 연동하기 위한 함수 export

    return(
        <ClientTabs.Navigator initialRouteName = 'HomeScreen'
            screenOptions = {{
                activeTintColor : colors.buttons
            }}
            screenOptions = {{
                headerShown :false
            }}  //맨 위에 header를 가려주는 역할
        >
            
            <ClientTabs.Screen 
                name = "SearchScreen"
                component = {SearchScreen}
                options = {
                    {
                        tabBarLabel : "Alarm",
                        tabBarIcon : ({color,size}) =>(
                            <Icon 
                                name = 'notifications'
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            
            />

            <ClientTabs.Screen 
                name = "Community"
                component = {SearchScreen}
                options = {
                    {
                        tabBarLabel : "Community",
                        tabBarIcon : ({color,size}) =>(
                            <Icon 
                                name = 'people-outline'
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
        
        />
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
            

            <ClientTabs.Screen 
                name = "MyOrderScreen"
                component = {MyOrdersScreen}
                options = {
                    {
                        tabBarLabel : "Scrap",
                        tabBarIcon : ({color,size}) =>(
                            <Icon 
                                name = 'bookmark-outline'
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            
            />
            <ClientTabs.Screen 
                name = "Setting"
                component = {SettingScreen}
                options = {
                    {
                        tabBarLabel : "Setting",
                        tabBarIcon : ({color,size}) =>(
                            <Icon 
                                name = 'settings'
                                type = 'feather'
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