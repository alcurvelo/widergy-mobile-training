import React from 'react';
import {ImageBackground,Text,View} from 'react-native'
import styles from './styles'
const DrawerScreenLayout=({nombre,urlIcon})=>{
    return (
        <View style={styles.boxDrawerScreen}>
            <ImageBackground source={{uri:urlIcon}} style={styles.imageDrawerScreen}/>
            <Text style={styles.textDrawerScreen}>{nombre}</Text>
        </View>
    )
}
export default DrawerScreenLayout