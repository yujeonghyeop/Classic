import React, { useState,useEffect } from 'react'
import firestore, { firebase } from '@react-native-firebase/firestore'
import {View, Text, ScrollView, Image, TouchableOpacity, useWindowDimensions} from 'react-native'
import {Button} from 'react-native-elements';
import {logo, myAccountstyle, ViewAllStyle} from '../global/styles';
import { styledtext, buttonTitleB, buttonTitleW  } from '../global/fontStyles';
import Logo from '../images/logo.png';
import bach from '../images/bach.png';
import example from '../images/example.png';
import Swiper from 'react-native-swiper';
import { getDate } from 'cli';
import { getDrawerStatusFromState } from '@react-navigation/drawer';
import { FlatList } from 'react-native-gesture-handler';
import bach2 from '../images/bach.jpg';

export default function MyAccountScreen({navigation}){
    const [nickname, setNickname] = useState(null)
    const user = firebase.auth().currentUser;
    const email = user.email; 
    const [test, settest] = useState();
    const getname = async key=> {
        const inf = firestore().collection("회원").doc(email)
        await inf.get().then((doc)=>{
            if (doc.exists){
                const ininf = doc.data();
                const musician = ininf["이름"];
                const name = ininf["result"];
                settest(name)
                setNickname(musician)
                }
            })
        }
    const resettype = async key =>{
        firestore().collection("회원").doc(email).update({
            result : 0,
            총체 : 0,
            분석 : 0,
            자기지향 : 0,
            사회지향 : 0,
            이성 : 0,
            감성 : 0,
            })   
    }
    useEffect(()=>{
        getname();
    })

    const [button1, setColor1] = useState('#6767A6');
    const [button2, setColor2] = useState('#E8E8F2');
    const [button1f, setFont1] = useState(buttonTitleB);
    const [button2f, setFont2] = useState(buttonTitleW);
    const [index, setIndex] = useState(0);
    const [space, setspace] = useState([]);
    const [subject, setsubject] = useState([]);
    const [location, setlocaction] = useState(['']);
    const layout = useWindowDimensions();

    const clickHandler1 = () => {
        setColor1('#6767A6');
        setColor2('#E8E8F2');
        setFont1(buttonTitleB);
        setFont2(buttonTitleW);
        setIndex(0);
    }

    const clickHandler2 = () =>{
        setColor1('#E8E8F2');
        setColor2('#6767A6');
        setFont1(buttonTitleW);
        setFont2(buttonTitleB);
        setIndex(1);
    }

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

    useEffect(() => {
        spaceshow()
        subjectshow()
    },[]);

    return(
        <View style = {myAccountstyle.container}>
            <Image source={Logo} style={logo} />
            <View style={myAccountstyle.styledBox}>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding:10}}>
                    <View style={{flexDirection: 'column', margin:10,justifyContent: 'center', alignItems:'center'}}> 
                        <View style={myAccountstyle.styledPicture}>
                            <Image
                            source={bach2}
                            style={{width:"140%", height:"140%", margin:'5%', borderRadius:20}}
                            />
                        </View>
                        <Text style={buttonTitleW}>{nickname}</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent:'flex-start', margin: 10, padding:15}}>
                        {console.log(test)}
                        <View style={{flexDirection: 'column', alignItems:'center'}}>
                            <Button title='상세 보기' buttonStyle={myAccountstyle.styledButton} titleStyle={buttonTitleW}
                            onPress = {() => { navigation.navigate("Detail")}}
                             />
                           
                            {test===0 ? <Button title='다시 검사하기' buttonStyle={myAccountstyle.styledButton} titleStyle={buttonTitleW}
                            onPress = {() => 
                                {   resettype()
                                    navigation.navigate("Test1")}
                                }
                           />
                            : <Button title='검사하러 가기' buttonStyle={myAccountstyle.styledButton} titleStyle={buttonTitleW}
                             onPress = {() => { navigation.navigate("Test1")}}
                            />
                            }
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex: 8}}>
                <View style={{flexDirection:'row', marginTop:10}}>
                    <TouchableOpacity style={[myAccountstyle.ListButton, {backgroundColor:button1}]} onPress={clickHandler1}>
                        <Text style={button1f}>스크랩 한 교양과목</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[myAccountstyle.ListButton,{backgroundColor:button2}]} onPress={clickHandler2}>
                        <Text style={button2f}>스크랩 한 학습공간</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:60}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                            { 
                                index == 0 ? 
                                <View>
                                { subject.map((data)=>(
                                        <View key ={data.name} >
                                            <View style={{flexDirection:'row', padding:5}}>
                                                <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}/>
                                                <View style={{margin:10}}>
                                                    <Text style={ViewAllStyle.contentName}>{data.name}</Text>
                                                    <Text style={ViewAllStyle.contentIntroduce}>{data.professor}</Text>
                                                </View>
                                            </View>
                                        <View style={{width:340, height:2, margin:5,backgroundColor:'#a6a6cc'}}/>
                                    </View>))
                                }
                                </View> : 
                                <View>
                                    {space.map((data) =>(
                                        <View key ={data.name} >
                                        <View style={{flexDirection:'row', padding:5}}>
                                            <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}></View>
                                            <View style={{flexShrink:1,flexGrow:1,flexBasis:150}}>
                                                <Text style={ViewAllStyle.contentName}>{data.name}</Text>
                                                <Text style={ViewAllStyle.contentIntroduce}>{data.location}</Text>
                                            </View>
                                        </View>
                                        <View style={{width:340, height:2, margin:5,backgroundColor:'#a6a6cc'}}></View>
                                    </View>
                                    ))}
                                    </View>
                            }
                    </ScrollView>
                </View>
            </View>  
        </View>
    )
}