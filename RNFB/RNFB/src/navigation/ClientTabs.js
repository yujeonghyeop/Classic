//사용자 바 나타내는 스크린
import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen'
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){   //App Stack과 연동하기 위한 함수 export

    return(
        <ClientTabs.Navigator
            tabBarOptions = {{
                activeTintColor : colors.buttons
            }}
            screenOptions = {{
                headerShown :false
            }}  //맨 위에 header를 가려주는 역할
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

            <ClientTabs.Screen 
                name = "SearchScreen"
                component = {SearchScreen}
                options = {
                    {
                        tabBarLabel : "Search",
                        tabBarIcon : ({color,size}) =>(
                            <Icon 
                                name = 'search'
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
                        tabBarLabel : "My Order",
                        tabBarIcon : ({color,size}) =>(
                            <Icon 
                                name = 'view-list'
                                type = 'material'
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            
            />
            <ClientTabs.Screen 
                name = "MyAccount"
                component = {MyAccountScreen}
                options = {
                    {
                        tabBarLabel : "My Account",
                        tabBarIcon : ({color,size}) =>(
                            <Icon 
                                name = 'person'
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