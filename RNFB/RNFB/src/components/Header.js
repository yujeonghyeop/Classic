//Header 구성하는 페이지
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors, parameters} from '../global/styles'
import {Icon} from 'react-native-elements'
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';

export default function Header({title,type,navigation}){
    return (
        <View style = {styles.header}>
            <View style = {{marginLeft:20}}>
                <Icon 
                    type = "material-community"
                    name = {type}
                    color = {colors.headerText}
                    size = {28}
                    onPress = {() =>{
                        navigation.goBack()
                    }}
                    //뒤로가기 버튼을 눌렀을 때 설정해놓은 navigation이 있으므로 goBack을 통해 한 페이지 뒤로 보냄 
                />
            </View>
            <View>
                    <Text style = {styles.headerText}>{title}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header :{
        flexDirection : "row",
        backgroundColor : colors.buttons,
        height : parameters.headerHeight
    },
    headerText : {
        color: colors.headerText,
        fontSize:22,
        fontWeight:"bold",
        marginLeft :30
    }
})