import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'

export default function Test1({navigation}){
    return(
        <View style = {styles.container}>
            <Text>Tv를 틀고 뭘 볼지 정하는</Text>
            <Text>나의 모습은?</Text>
            <Button
            title = "편성표를 켜서 프로그램을 확인한다"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    navigation.navigate("Test2")
                }}
                />
            <Button
            title = "돌려보면서 재밌는게 나오면 멈춘다"
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