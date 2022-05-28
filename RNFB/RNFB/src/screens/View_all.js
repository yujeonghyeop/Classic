import React,{ useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ViewAllStyle } from '../global/styles';
import { buttonTitleW } from '../global/fontStyles';
import { CheckBox } from "@rneui/themed";
import firestore, { firebase, getDocs } from '@react-native-firebase/firestore';
import { Button, Icon } from 'react-native-elements';

// 전체보기 페이지

export default function MyOrdersScreen(){
    const[checkBox, setCheckBox] = useState(false)
    const[press1, setPress1] = useState('');
    const[press2, setPress2] = useState('');
    const [space, setspace] = useState([]);
    const [subject, setsubject] = useState([]);
    const user = firebase.auth().currentUser;
    const email = user.email; 
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
        console.log(1)
    }

   

    const pressHandler1 = (params,e)=>{
        setPress1('#E8E8F2');
        const userDocument = firestore().collection("회원").
                doc(email).collection("mysubject").doc(params["id"])
                    .set({
                    'kate' : params["kate"],
                    'professor' : params["professor"],
                    'name' : params["name"]
                })
    }

    const pressHandler2 = (params,e)=>{
        console.log(params["id"])
        const userDocument = firestore().collection("회원").
                doc(email).collection("myspace").doc(params["id"])
                    .set({
                    'kate' : params["kate"],
                    'location' : params["location"],
                    'name' : params["name"]
                })
        setPress2('#E8E8F2');
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
                                            <TouchableOpacity style={{backgroundColor:press1}} onPress={(e)=>{pressHandler1(data,e)}}>
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
                                            </TouchableOpacity>
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
                                                <TouchableOpacity style={{backgroundColor:press2}} onPress={(e)=>{pressHandler2(data,e)}}>
                                                   <View style={{flexDirection:'row', padding:5}}>
                                                    <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}>
                                                    {data.kate ==='school' && (<Icon name = 'festival' type = 'material'size = {120} />)}
                                                    {data.kate ==='cafe' && (<Icon name = 'emoji-food-beverage' type = 'material'size = {120}/>)}
                                                    {data.kate ==='sc' && (<Icon name = 'meeting-room' type = 'material'size = {120}/>)}
                                                    </View>
                                                    <View style={{margin:10}}>
                                                        <Text style={ViewAllStyle.contentName}>{data.name}</Text>
                                                        <Text style={ViewAllStyle.contentIntroduce}>{data.location}</Text>
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
                                                </TouchableOpacity>
                                                

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
                renderTabBar={ props => <TabBar {...props}

                    indicatorStyle={{backgroundColor:'#FF9D9D'}}
                    style={{backgroundColor: '#6767A6'}}
                    labelStyle= {{fontSize:15, fontFamily: 'IBMPlexSansKR-Bold'}}/>
                }
            />
            
    )
}