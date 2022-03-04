import React from 'react';
import{View, Text, StyleSheet, Switch} from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { colors } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function DrawerContent(props){
    return(
        <View style = {styles.container}>
            <DrawerContentScrollView {...props}> 
            <View style = {{backgroundColor:'#6667ab',flexDirection:'row',alignItems:'center',paddingLeft:10,paddingVertical:10}}>
                <Avatar 
                    rounded
                    avatarStyle = {styles.avatar}
                    size = {75}
                    // source =
                />
                <View style={{marginLeft:10}}>
                    <Text style = {{fontWeight:'bold',color:'white',fontSize:18}}> 케장유</Text>
                    <Text style = {{color:'white',fontSize:14}}> 케장유@kenen.co.kr</Text>
                </View>

             
            </View>

            <DrawerItemList {...props}/>
            <DrawerItem 
                label = "Payment"
                icon = {({color, size})=>(
                    <Icon
                        type = "material-community"
                        name = "credit-card-outline"
                        size = {size}
                    />
                )}
            />
            <DrawerItem 
                label = "Promotions"
                icon = {({color, size})=>(
                    <Icon
                        type = "material-community"
                        name = "tag-heart"
                        size = {size}
                    />
                )}
            />
            <DrawerItem 
                label = "Settings"
                icon = {({color, size})=>(
                    <Icon
                        type = "material-community"
                        name = "cog-outline"
                        size = {size}
                    />
                )}
            />
            <DrawerItem 
                label = "Help"
                icon = {({color, size})=>(
                    <Icon
                        type = "material-community"
                        name = "lifebuoy"
                        size = {size}
                    />
                )}
            />

        <View style = {{borderTopWidth:1, borderTopColor:"6667ab"}}>
            <Text style = {styles.preferences}>Preferences</Text>
            <View style = {styles.switchText}>
                <Text style = {styles.darkthemeText}>Dark Theme</Text>
                <View style = {{paddingRight:10}}>
                        <Switch
                            trackColor = {{false: "#767577",true : "#81b0ff"}}
                            thumbColor = "#f4f3f4"
                         />
                </View>
            </View>

        </View>

            </DrawerContentScrollView>
            <DrawerItem 
                label = "Sign Out"
                icon = {({color, size})=>(
                    <Icon
                        type = "material-community"
                        name = "logout-variant"
                        size = {size}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    avatar:{
        borderWidth:4,
        borderColor:"white"
    },
    preferences:{
        fontSize: 16,
        color :colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize:16,
        color: colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:'bold'
    }
    
})