// 앱  화면을 구성해주는 페이지
import React from 'react'
import {View, Text, StyleSheet,StatusBar} from 'react-native'
import { SignInContextProvider } from './src/contexts/authContext'
import {colors} from './src/global/styles'
import RootNavigator from './src/navigation/RootNavigator'

export default function App(){
  return (
    <SignInContextProvider>
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = '#6667ab' //팬톤
      />
      <RootNavigator />
    </View>
    </SignInContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})