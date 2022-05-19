import React from 'react'
import {View, Text, Image, ScrollView, useWindowDimensions} from 'react-native'
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
import Swiper from 'react-native-swiper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { parameters, ViewAllStyle } from '../global/styles';

// 전체보기 페이지

const firstTab = () => (
    <View style={{alignItems:"center"}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{margin:20}}>
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
); // 교양과목

const secondTab = () => (
    <View style={{alignItems:"center"}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{margin:20}}>
            <View>
                <View style={{flexDirection:'row', padding:5}}>
                    <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}></View>
                    <View style={{margin:10}}>
                        <Text style={ViewAllStyle.contentName}>학습공간 이름</Text>
                        <Text style={ViewAllStyle.contentIntroduce}>학습공간 소개</Text>
                    </View>
                </View>
                <View style={{width:340, height:2, margin:5,backgroundColor:'#a6a6cc'}}></View>
            </View>
        </ScrollView>
    </View>
); // 학습공간

const renderScene = SceneMap({
    first: firstTab,
    second: secondTab,
});

export default function MyOrdersScreen(){
    
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: '교양과목'},
        {key: 'second', title: '학습공간'},
    ]);

    return(
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width:layout.width}}
                style={{backgroundColor:"white"}}
                renderTabBar={props => <TabBar {...props}
                    indicatorStyle={{backgroundColor:'#FF9D9D'}}
                    style={{backgroundColor: '#6767A6'}}
                    labelStyle= {{fontSize:15, fontFamily: 'IBMPlexSansKR-Bold'}}
                />}
            />
    )
}