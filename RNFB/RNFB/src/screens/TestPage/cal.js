import React,{useState,useEffect} from 'react'
import{View, Text, StyleSheet} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'
import firestore, { firebase } from '@react-native-firebase/firestore'
import SplashScreen from 'react-native-splash-screen';

export default function Result({navigation}){
    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState(false);
    const[cnt, setcnt] = useState(1);
    const user = firebase.auth().currentUser;
    const email = user.email; 
    let result = 1;
    async function cal1(){
        const first = firestore().collection(email).doc("사고유형");
        await first.get().then((doc)=>{
            if (doc.exists){
                const pandi = doc.data();
                const plan = pandi["계획형"];
                const imp = pandi["즉흥형"];
                if(plan > imp){
                    result *= 1;
                }
                else{
                    result *= 2;
                }
            }
            else{
                console.log("no data")
            }
        })
        console.log("cal1 complete!",result)
    }
    async function cal2(){
        const second = firestore().collection(email).doc("학습성격");
        await second.get().then((doc)=>{
            if (doc.exists){
                const pands = doc.data();
                const per = pands["개인형"];
                const soc = pands["사회형"];
                if(per > soc){
                    result *= 3;
                }
                else{
                    result *= 4;
                }
            }
            else{
                console.log("no data")
            }
        })
        console.log("cal2 complete!",result)

    }
    async function cal3(){
        const third = firestore().collection(email).doc("행동조절");
        await third.get().then((doc)=>{
            if (doc.exists){
                const aandd = doc.data();
                const act = aandd["활발형"];
                const dif = aandd["차분형"];
                if(act > dif){
                    result *= 5;
                }
                else{
                    result *= 6;
                }
            }
            else{
                console.log("no data")
            }
        })
        console.log("cal3 complete!", result)
        setcnt(result);
        setPage(true);
        setLoading(true);
    }
    async function cal4(){    
            const userDocument = await firestore().collection(email). //현재 접속중인 user의 데이터를 수정해준다.
            doc('결과')
            .update({
                'result' : cnt
            })
            console.log("setting completed");
        }
    useEffect(()=>{
        cal1();
        cal2();
        cal3();
    },[])
    useEffect(()=>{
        cal4();
    },[page])
    return(
        <View style = {styles.container}>
            <Text style={styles.styledFont}>{loading == true ? navigation.navigate("Result"): "두구두구두구"}</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        color:'#6667ab',
        backgroundColor :'#6667ab'
    },
    styledFont:{
        fontSize : 50,
        color:'white',
        fontWeight:'bold',
    }
})