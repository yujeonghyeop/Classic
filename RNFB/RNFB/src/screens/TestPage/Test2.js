import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'

export default function Test2({navigation}){
    return(
        <View style = {styles.container}>
            <Text>친구와의 약속이 깨졌다</Text>
            <Text>나의 행동은?</Text>
            <Button
            title = "다른 친구와의 약속을 잡아보려 한다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    navigation.navigate("Test2")
                }}
                />
            <Button
            title = "그날은 쉰다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    navigation.navigate("Test2")
                }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    styledButton :{     //button 스타일 지정
        backgroundColor : '#6667ab',
        alignContent : "center",
        justifyContent : "center",
        borderRadius : 12,
        borderWidth :1,
        borderColor:'#6667ab',
        height:50,
        paddingHorizontal:20,
        width:"100%",
        marginTop : 50
    },
})