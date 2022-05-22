import React,{useState,useEffect} from 'react'
import { SearchBar } from 'react-native-elements';
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
                  <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}></View>
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
                  <View style={{width:120,height:120, margin:10, backgroundColor:'#FF9D9D'}}></View>
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