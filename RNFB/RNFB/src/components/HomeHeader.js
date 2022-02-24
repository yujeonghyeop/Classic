//HomeScreen을 구성하는 header 꾸미는 js
import React from 'react'

import{View, Text, StyleSheet} from 'react-native'
import {Icon,withBadge} from 'react-native-elements'
import {colors,parameters} from '../global/styles'

export default function HomeHeader(){

    const BadgeIcon = withBadge(0)(Icon)    //마켓 아이콘 왼쪽위에 작은 동그라미가 뜨게 해준다.
    return(
        <View style = {styles.header}>

            {/* menu Icon */}
            <View style = {{alignItems:"center",justifyContent:"center",marginLeft:15}}>    
                <Icon
                    type = "material-community"
                    name = "menu"
                    color = "white"
                    size = {32}
                />
            </View>
            {/* name */}
            <View style = {{alignItems:"center", justifyContent:"center"}}>
                <Text style = {{color:colors.cardbackground, fontSize:25, fontWeight:'bold'}}> YJH</Text>
            </View>

            {/* cart Icon */}
            <View style = {{alignItems:"center", justifyContent:"center", marginRight:15}}>
                <BadgeIcon 
                    type = "material-community"
                    name = "cart"
                    size = {35}
                    color = "white"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height : parameters.headerHeight,
        justifyContent:"space-between"
    }
})