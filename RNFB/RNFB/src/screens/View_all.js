import React,{useState,useEffect} from 'react'
import {View, Text, Image, ScrollView, useWindowDimensions} from 'react-native'
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
import Swiper from 'react-native-swiper';
import { TabView, SceneMap } from 'react-native-tab-view';
import { parameters, ViewAllStyle } from '../global/styles';
import firestore, { firebase, getDocs } from '@react-native-firebase/firestore'

// 전체보기 페이지

const firstTab = () => (
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
); // 교양과목

const secondTab = () => (
    <View style={{alignItems:"center"}}>
                    <Text style={ViewAllStyle.startText}>학습공간</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <View style={{flexDirection:'row', padding:5}}>
                                <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}></View>
                                <View style={{margin:10}}>
                                    <Text style={ViewAllStyle.contentName}></Text>
                                    <Text style={ViewAllStyle.contentIntroduce}>교양과목 소개</Text>
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
    const [space, setspace] = useState(['안다미로','몽상']);
    const [location, setlocaction] = useState(['']);
    const spaceshow = async () =>{
        const first = await firestore().collection("15_space")
        const inputdata = first.get().then((q) => {
            q.docs.map((doc)=>({
                s_name : doc.data()["name"],
                s_location : doc.data()["location"]
            })
        )
        console.log("w" + inputdata)
    })
    }
    console.log(space.s_name)
    
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: '교양과목'},
        {key: 'second', title: '학습공간'},
    ]);
    useEffect(() => {
        setspace(['안다미로', '몽상'])
        spaceshow();
    },[]);
    
    return(
            <TabView
                navigationState={{index, routes}}
                renderScene={({route}) =>{
                    switch(route.key){
                        case 'first':
                            return (
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
                            );
                        case 'second':
                        return (
                    <View style={{alignItems:"center"}}>
                    <Text style={ViewAllStyle.startText}>학습공간</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {space.map((data) =>(
                        <View>
                            <View style={{flexDirection:'row', padding:5}}>
                                <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}></View>
                                <View style={{margin:10}}>
                                    <Text style={ViewAllStyle.contentName}>{data}</Text>
                                </View>
                            </View>
                            <View style={{width:340, height:2, margin:5,backgroundColor:'#a6a6cc'}}></View>
                        </View>
                        ))}
                    </ScrollView>
                </View>
                        )
                        default:
                            return null;
                    }
                }}
                onIndexChange={setIndex}
                initialLayout={{width:layout.width}}
            />
    )
}