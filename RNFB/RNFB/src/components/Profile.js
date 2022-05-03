import React from 'react'

import{View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'

export default function Profile(){
    return(
        <View style={styles.styledBox}>
            <View style={{flexDirection:'row'}}> 
                <View style={styles.styledPicture}/>
                <View style={{margin: 20}}>
                    <Text></Text>
                    <Button title='상세보기' buttonStyle={styles.styledButton} titleStyle={styles.buttonTitle}/>
                </View>
                
            </View>
               
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    styledPicture:{
        //사진 넣는 곳
        backgroundColor:'#6767A6',
        borderRadius: 75,
        width: 100,
        height: 100,

        
    },
    styledBox: {
     //box
      backgroundColor: '#E8E8F2',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      paddingHorizontal: 20,
      height: 150,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10
    },
    styledButton:{
        backgroundColor: '#FFFFFF',
        opacity:0.3,
        borderRadius: 10,
        width:200
       
    },
    buttonTitle:{
        color:'black',
        fontSize: 15,
    },
  });