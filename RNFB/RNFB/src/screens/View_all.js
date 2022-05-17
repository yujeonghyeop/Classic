import React from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
import Swiper from 'react-native-swiper';
import { parameters, ViewAllStyle } from '../global/styles';

// 전체보기 페이지
export default function MyOrdersScreen(){
    return(
        <View style = {{flex:1}}>
            <Image source={Logo} style={logo} />
            <Swiper showsPagination={false} loop={false}>
                <View style={{alignItems:"center"}}>
                    <Text style={ViewAllStyle.startText}>교양과목</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <View style={{flexDirection:'row', padding:5}}>
                                <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}></View>
                                <View style={{margin:10}}>
                                    <Text style={ViewAllStyle.contentName}>교양과목 이름</Text>
                                    <Text style={ViewAllStyle.contentIntroduce}>교양과목 소개</Text>
                                </View>
                            </View>
                            <View style={{width:340, height:2, margin:5,backgroundColor:'#a6a6cc'}}></View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={ViewAllStyle.startText}>학습공간</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <View style={{flexDirection:'row', padding:5}}>
                                <View style={{width:120,height:120, margin:5, backgroundColor:'#FF9D9D'}}></View>
                                <View style={{margin:10}}>
                                    <Text style={ViewAllStyle.contentName}>학습공간 이름</Text>
                                    <Text style={ViewAllStyle.contentIntroduce}>학습공간 소개</Text>
                                </View>
                            </View>
                            <View style={{width:340, height:2, margin:10,backgroundColor:'#a6a6cc'}}></View>
                        </View>
                    </ScrollView>
                </View>
            </Swiper>
        </View>
    )
}