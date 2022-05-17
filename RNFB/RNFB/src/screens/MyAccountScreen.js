import React from 'react'
import firestore, { firebase } from '@react-native-firebase/firestore'
import {View, Text, StyleSheet, Image} from 'react-native'
import {Button} from 'react-native-elements';
import {logo, myPageStyle} from '../global/styles';
import { styledtext } from '../global/fontStyles';
import Logo from '../images/logo.png';

export default function MyAccountScreen({navigation}){
    const user = firebase.auth().currentUser;
    const email = user.email; 

    return(
        <View style = {{flex:1, alignItems:'space-between', justifyContent:'center', flexDirection: 'column'}}>
            <Image source={Logo} style={logo} />
            <View style={myPageStyle.styledBox}>
                <View style={{flexDirection: 'row',  padding:10}}>
                    <View style={{flexDirection: 'column', margin:10,justifyContent: 'center'}}> 
                        <View style={myPageStyle.styledPicture}/>
                        <Text style={{fontFamily: 'IBMPlexSansKR-Light', alignItems: 'center', marginLeft:30}}>name</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent:'flex-start', margin: 10}}>
                        <View style={{flexDirection: 'column', alignItems:'center'}}>
                            <Button title='상세 보기' buttonStyle={myPageStyle.styledButton1} titleStyle={styledtext} />
                            <Button title='검사하러 가기' buttonStyle={myPageStyle.styledButton1} titleStyle={styledtext}
                             onPress = {() => { navigation.navigate("Test1")}}
                            />
                        </View>
                        
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', flex: 2,justifyContent:'space-between'}}>
                <Text>스크랩 한 학습공간</Text>
                <Text>스크랩 한 교양과목</Text>
                {/* <Button title='스크랩 한 학습공간' buttonStyle={myPageStyle.styledButton} titleStyle={styledtext}/>
                <Button title='스크랩 한 교양과목' buttonStyle={myPageStyle.styledButton} titleStyle={styledtext}/> */}
            </View>
            <View style={myPageStyle.styledList}></View>
        </View>
    )
}
