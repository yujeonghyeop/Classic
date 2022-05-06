import React from 'react'

import {View, Text, StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements';
import {logo} from '../global/styles';
import Logo from '../images/logo.png';

export default function MyAccountScreen(){
    return(
        <View style = {{flex:1, alignItems:'center', justifyContent:'center', flexDirection: 'column'}}>
            <Image source={Logo} style={logo} />
            <View style={styles.background}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', padding: 15}}> 
                        <View style={styles.styledPicture}/>
                        <Text style={{fontFamily: 'FrankRuhlLibre-Light',}}>브람스</Text>
                    </View>
                    <View style={{flexDirection: 'column', alignItems:'center'}}>
                        <Text style={{fontFamily: 'FrankRuhlLibre-Light',}}>name</Text>
                        <Button title='상세 보기' buttonStyle={styles.styledButton1} titleStyle={styles.buttonTitle} />
                        <Button title='검사하러 가기' buttonStyle={styles.styledButton1} titleStyle={styles.buttonTitle} />
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', flex:1, alignItems:'stretch'}}>
                <Button title='내가 쓴 글' buttonStyle={styles.styledButton} titleStyle={styles.buttonTitle}/>
                <Button title='스크랩 한 글' buttonStyle={styles.styledButton} titleStyle={styles.buttonTitle}/>
                <Button title='스크랩 한 학습공간' buttonStyle={styles.styledButton} titleStyle={styles.buttonTitle}/>
                <Button title='스크랩 한 교양과목' buttonStyle={styles.styledButton} titleStyle={styles.buttonTitle}/>
            </View>
            <View style={styles.styledList}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        flex:3,
        backgroundColor: '#E8E8F2',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'stretch',
        paddingHorizontal: 150,
        height: 150,
        margin:10
    },
    styledButton:{
        flex:1,
        backgroundColor: '#E8E8F2',
    }, 
    buttonTitle:{
        color:'black',
        fontSize: 13.5,
        fontFamily: 'GowunBatang-Bold'
    },
    styledButton1:{
        backgroundColor:'#FFFFFF',
        opacity:0.3,
        alignItems: 'stretch',
        borderRadius: 10,
        margin: 5,
    },
    styledList:{
        flex:8,
        backgroundColor: '#E8E8F2', 
        paddingHorizontal: 250,
        
    },
    styledPicture:{ 
        //사진 넣는 곳
        backgroundColor:'#6767A6',
        borderRadius: 75,
        width: 100,
        height: 100,
    }
});