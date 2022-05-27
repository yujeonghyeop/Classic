import React,{ useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ViewAllStyle } from '../global/styles';
import { buttonTitleW } from '../global/fontStyles';
import firestore, { firebase, getDocs } from '@react-native-firebase/firestore';
import { Button, Icon } from 'react-native-elements';

// 전체보기 페이지

export default function MyOrdersScreen(){

    const [space, setspace] = useState([]);
    const [subject, setsubject] = useState([]);
    const [test, settest] = useState([])
    const [location, setlocaction] = useState(['']);
    const spaceshow = async () =>{
        firebase.firestore().collection("view_all_space").onSnapshot(snapshot =>{
            const tweet = snapshot.docs.map(doc => ({
                id : doc.id,
                ...doc.data(),
            }))
            setspace(tweet)
        })
        
}
    const subjectshow = async () =>{
        firebase.firestore().collection("view_all_subject").onSnapshot(snapshot =>{
            const tweet = snapshot.docs.map(doc => ({
                id : doc.id,
                ...doc.data(),
            }))
            setsubject(tweet)
        })
        
    }
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: '교양과목'},
        {key: 'second', title: '학습공간'},
    ]);

    const [border, setBorderwidth] = useState(0);
    const scrapHandler = () =>{
        setBorderwidth(1);
    }

    useEffect(() => {
        spaceshow()
        subjectshow()
    },[]);
    return(
        
            <TabView
                navigationState={{index, routes}}
                renderScene={({route}) => {
                    switch(route.key) {
                        case 'first':
                            return(
                                <View style={{alignItems:"center"}}>
                                    <ScrollView showsVerticalScrollIndicator={false} style={{margin:20}}>
                                        {subject.map((data)=>(
                                        <View key ={data.name} >
                                            <View style={{flexDirection:'row', padding:5}}>
                                                <View style={{width:150,height:150, margin:10, backgroundColor:'#FF9D9D'}}>
                                                {data.kate ==='자연과 과학' && (<Icon name = 'emoji-nature' type = 'material'size = {120} />)}
                                                {data.kate ==='인간과 사회' && (<Icon name = 'public' type = 'material'size = {120}/>)}
                                                {data.kate ==='문학과 예술' && (<Icon name = 'palette' type = 'material'size = {120}/>)}
                                                {data.kate ==='역사와 철학' && (<Icon name = 'auto-stories' type = 'material'size = {120}/>)}
                                                {data.kate ==='일반선택' && (<Icon name = 'border-color' type = 'material'size = {120}/>)}
                                                {data.kate ==='일반교양' && (<Icon name = 'self-improvement' type = 'material'size = {120}/>)}

                                                </View>
                                                <View style={{margin:10}}>
                                                    <Text style={ViewAllStyle.contentName}>{data.name}</Text>
                                                    <Text style={ViewAllStyle.contentIntroduce}>{data.professor}</Text>
                                                </View>
                                                <View>                                                    
                                                    <TouchableOpacity style={[ViewAllStyle.scrap,/*{borderWidth:border}*/]} onPress={scrapHandler}>
                                                        <Icon 
                                                            name = 'add'
                                                            type = 'material'
                                                            size = {40}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={{width:340, height:2, margin:5,backgroundColor:'#a6a6cc'}}></View>
                                        </View>
                                        ))}
                                    </ScrollView>
                                </View>
                            );
                        case 'second':
                            return(
                                <View style={{alignItems:"center"}}>
                                    <ScrollView showsVerticalScrollIndicator={false} style={{margin:20}}>
                                        {space.map((data) =>(
                                            <View key ={data.name} >
                                                <View style={{flexDirection:'row', padding:5}}>
                                                    <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}>
                                                    {data.kate ==='school' && (<Icon name = 'festival' type = 'material'size = {120} />)}
                                                    {data.kate ==='cafe' && (<Icon name = 'emoji-food-beverage' type = 'material'size = {120}/>)}
                                                    {data.kate ==='sc' && (<Icon name = 'meeting-room' type = 'material'size = {120}/>)}
                                                    </View>
                                                    <View style={{flexShrink:1,flexGrow:1,flexBasis:150}}>
                                                        <Text style={ViewAllStyle.contentName}>{data.name}</Text>
                                                        <Text style={ViewAllStyle.contentIntroduce}>{data.location}</Text>
                                                        <TouchableOpacity style={[ViewAllStyle.scrap,{borderWidth:border}]} onPress={scrapHandler}>
                                                            <Text style={buttonTitleW}>스크랩 하기</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={{width:340, height:2, margin:5,backgroundColor:'#a6a6cc'}}></View>
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                            );
                        default:
                            return null;
                    }
                }}
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