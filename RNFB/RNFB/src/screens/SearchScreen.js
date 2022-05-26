import React,{useState,useEffect} from 'react'
import { SearchBar, Icon } from 'react-native-elements';
import {View, Text, Image} from 'react-native'
import {logo} from '../global/styles';
import Logo from '../images/logo.png';
import firestore, { firebase } from '@react-native-firebase/firestore'
import { parameters, ViewAllStyle } from '../global/styles';


export default function SearchScreen(){
    const [search, setsearch] = useState('');
    const [space, setspace] = useState([]);
    const [subject, setsubject] = useState([]);
    const [findspaceresult, setfindspaceresult] = useState([]);
    const [findsubjectresult, setfindsubjectresult] = useState([]);

    const onSubmit = (e) =>{
      setfindspaceresult([])
      setfindsubjectresult([]);
      subject.map(data=>{
        if(data.name ===search){
          setfindsubjectresult(data)
      }})
      space.map(data=>{
        if(data.name ===search){
          setfindspaceresult(data)
      }})
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
      setfindspaceresult([])
      setfindsubjectresult([]);
  },[]);
    return (
      <View>
    <View>
        <Image source={Logo} style={logo} />
        <SearchBar
        style={{/*fontFamily: 'IBMPlexSansKR-Regular',*/ color: "#FF9D9D"}}
        placeholder="Type here..."
        placeholderTextColor={'#FF9D9D'}
        inputContainerStyle={{backgroundColor: '#F2F2F2'}}
        leftIconContainerStyle={{backgroundColor: '#F2F2F2'}}
        inputStyle={{backgroundColor: '#F2F2F2'}}
        containerStyle={{
            backgroundColor: '#F2F2F2',
            justifyContent: 'space-around',
            borderTopWidth:0,
            borderBottomWidth:0,
            height:70
        }}
        onChangeText={setsearch}
        onSubmitEditing = {onSubmit}
        value={search}
        />
      </View>
      {findspaceresult.length !=0 ?
      <View style={{alignItems:"center"}}>
          <View>
              <View style={{flexDirection:'row', padding:5}}>
                  <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}>
                    {findspaceresult.kate ==='school' && (<Icon name = 'festival' type = 'material'size = {120} />)}
                    {findspaceresult.kate ==='cafe' && (<Icon name = 'emoji-food-beverage' type = 'material'size = {120}/>)}
                    {findspaceresult.kate ==='sc' && (<Icon name = 'meeting-room' type = 'material'size = {120}/>)}

                  </View>
                  <View style={{flexShrink:1,flexGrow:1,flexBasis:150}}>
                      <Text style={ViewAllStyle.contentName}>{findspaceresult.name}</Text>
                      <Text style={ViewAllStyle.contentIntroduce}>{findspaceresult.location}</Text>
                  </View>
              </View>
              <View style={{width:340, height:2, margin:5,backgroundColor:'#a6a6cc'}}></View>
          </View>
  </View> : null}
  {findsubjectresult.length !=0 ?
      <View style={{alignItems:"center"}}>
          <View>
              <View style={{flexDirection:'row', padding:5}}>
                  <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}>
                  {findsubjectresult.kate ==='자연과 과학' && (<Icon name = 'emoji-nature' type = 'material'size = {120} />)}
                    {findsubjectresult.kate ==='인간과 사회' && (<Icon name = 'public' type = 'material'size = {120}/>)}
                    {findsubjectresult.kate ==='문학과 예술' && (<Icon name = 'palette' type = 'material'size = {120}/>)}
                    {findsubjectresult.kate ==='역사와 철학' && (<Icon name = 'auto-stories' type = 'material'size = {120}/>)}
                    {findsubjectresult.kate ==='일반선택' && (<Icon name = 'border-color' type = 'material'size = {120}/>)}
                    {findsubjectresult.kate ==='일반교양' && (<Icon name = 'self-improvement' type = 'material'size = {120}/>)}
                   
                  </View>
                  <View style={{flexShrink:1,flexGrow:1,flexBasis:150}}>
                      <Text style={ViewAllStyle.contentName}>{findsubjectresult.name}</Text>
                      <Text style={ViewAllStyle.contentIntroduce}>{findsubjectresult.professor}</Text>
                  </View>
              </View>
              <View style={{width:340, height:2, margin:5,backgroundColor:'#a6a6cc'}}></View>
          </View>
  </View> : null}
  </View>
    );
}