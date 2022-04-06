import React, {useState,useEffect} from 'react'
import{View, Text, StyleSheet, Image,ScrollView} from 'react-native'
import {Icon,Button} from 'react-native-elements'
import { parameters } from '../../global/styles'
import firestore, { firebase } from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import * as Progress from 'react-native-progress'
import Swiper from 'react-native-swiper';


export default function Result(){

return (
<Swiper style={styles.wrapper} showsButtons={true}>
    <View style={styles.slide1}>
    <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View style={styles.slide2}>
    <Text style={styles.text}>Beautiful</Text>
    </View>
    <View style={styles.slide3}>
    <Text style={styles.text}>And simpleå</Text>
    </View>
</Swiper>
)}

const styles = StyleSheet.create({

    wrapper: {
    },
    slide1: {
        width:300,
        height:300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    slide2: {
        width:300,
        height:300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        width:300,
        height:300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BB',
},
})