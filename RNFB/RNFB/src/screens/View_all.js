import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
import Swiper from 'react-native-swiper';

// 전체보기 페이지
export default function MyOrdersScreen(){
    return(
        <View style = {{flex:1}}>
            <Image source={Logo} style={logo} />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{left:80}}>교양과목</Text>
                <Text style={{right:80}}>학습공간</Text>
            </View>
            <Swiper showsPagination={false} loop={false}>
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{width:300,height:300, backgroundColor:'gray'}}></View>
                        <View style={{width:300,height:300, backgroundColor:'gray'}}></View>
                    </ScrollView>
                </View>
                <View>
                    <ScrollView >
                        <View style={{width:300,height:300, backgroundColor:'gray'}}></View>
                        <View style={{width:300,height:300, backgroundColor:'gray'}}></View>
                    </ScrollView>
                </View>
            </Swiper>
        </View>
    )
}