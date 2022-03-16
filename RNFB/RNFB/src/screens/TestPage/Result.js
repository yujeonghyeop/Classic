import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'

export default function Result({navigation}){
    return(
        
        <View style = {styles.container}>
            <Text style={styles.styledFont}>당신은 베토벤!</Text>
            <Button 
            title = "검사 다시하기"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                        //button에 스타일 입히기
                onPress = {() => {
                    navigation.navigate("Test1")
            }}
            />
            <Button 
            title = "Main Page로 가기"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                        //button에 스타일 입히기
                onPress = {() => {
                    navigation.navigate("HomeScreen")
            }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
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
        width:350,
        marginTop : 50
    },
    styledQ :{
        fontSize : 30,
        color:'#6667ab',
        fontWeight:'bold',
        marginBottom:10
    },
    styledFont:{
        fontSize : 19,
        color:'black',
        fontWeight:'bold',
    }
})