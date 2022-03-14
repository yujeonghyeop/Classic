//로그인이 완료되면 메인화면, HomeScreen으로 오게된다. 
import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import {colors, parameters, title} from '../global/styles'


export default function HomeScreen({navigation}){
    return(
    <View style = {styles.container}>
        <HomeHeader navigation = {navigation}/>
        <Button
            title = "검사하러 가기"
                buttonStyle =  {styles.styledButton}
                titleStyle = {parameters.buttonTitle}
                            //button에 스타일 입히기
                onPress = {() => {
                    navigation.navigate("Test1")
                }}
                //이 버튼을 누를 때 SignInScreen으로 가라는 navigation 등록       
                    />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
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
        marginTop : 200
    },
})