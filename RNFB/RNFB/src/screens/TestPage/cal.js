// import React from 'react'
// import{View, Text, StyleSheet} from 'react-native'
// import {Icon,Button} from 'react-native-elements'
// import { parameters } from '../../global/styles'
// import firestore, { firebase } from '@react-native-firebase/firestore'
// import SplashScreen from 'react-native-splash-screen';

// export default function Result({navigation}){
//     const[loading, setLoading] = useState(false);
//     const user = firebase.auth().currentUser;
//     const email = user.email; 
//     let result = 1
//     async function cal1(){
//         const first = firestore().collection(email).doc("사고유형");
//         await first.get().then((doc)=>{
//             if (doc.exists){
//                 const pandi = doc.data();
//                 const plan = pandi["계획형"];
//                 const imp = pandi["즉흥형"];
//                 if(plan > imp){
//                     result = result * 1;
//                 }
//                 else{
//                     result = result * 2;
//                 }
//             }
//             else{
//                 console.log("no data")
//             }
//         })
//         const second = firestore().collection(email).doc("학습성격");
//         await second.get().then((doc)=>{
//             if (doc.exists){
//                 const pands = doc.data();
//                 const per = pands["개인형"];
//                 const soc = pands["사회형"];
//                 if(per > soc){
//                     result = result * 3;
//                 }
//                 else{
//                     result = result * 4;
//                 }
//             }
//             else{
//                 console.log("no data")
//             }
//         })
//         const third = firestore().collection(email).doc("행동조절");
//         await third.get().then((doc)=>{
//             if (doc.exists){
//                 const aandd = doc.data();
//                 const act = aandd["활발형"];
//                 const dif = aandd["차분형"];
//                 if(act > dif){
//                     result = result * 5;
//                 }
//                 else{
//                     result = result * 6;
//                 }
//             }
//             else{
//                 console.log("no data")
//             }
//         })
//         setLoading(true)
//     }
//     cal1()
//     return(
//         <View style = {styles.container}>
//             <Text style={styles.styledFont}>{loading == true ? result : "waiting"}</Text>
//             <Button 
//             title = "검사 다시하기"
//                 buttonStyle =  {styles.styledButton}
//                 titleStyle = {parameters.buttonTitle}
//                         //button에 스타일 입히기
//                 onPress = {() => {
//                     navigation.navigate("Test1")
//             }}
//             />
//             <Button 
//             title = "Main Page로 가기"
//                 buttonStyle =  {styles.styledButton}
//                 titleStyle = {parameters.buttonTitle}
//                         //button에 스타일 입히기
//                 onPress = {() => {
//                     navigation.navigate("HomeScreen")
//             }}
//             />
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container:{
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     styledButton :{     //button 스타일 지정
//         backgroundColor : '#6667ab',
//         alignContent : "center",
//         justifyContent : "center",
//         borderRadius : 12,
//         borderWidth :1,
//         borderColor:'#6667ab',
//         height:50,
//         paddingHorizontal:20,
//         width:350,
//         marginTop : 50
//     },
//     styledQ :{
//         fontSize : 30,
//         color:'#6667ab',
//         fontWeight:'bold',
//         marginBottom:10
//     },
//     styledFont:{
//         fontSize : 19,
//         color:'black',
//         fontWeight:'bold',
//     }
// })