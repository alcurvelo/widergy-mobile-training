import React,{useState} from 'react'
import {View,Text,TouchableHighlight,TextInput} from 'react-native'
import styles from '../Calculadora/styles'
import {buttonsWithValue} from './constants'

const Calculadora =()=>{
    const leerPresionado=(target)=>{
        if(target.match(/[0123456789]/)!=null){
            console.log("número")
        }else{
            console.log("caracter")
        }
    }

    return (
        <View style={styles.contain}>
            <View style={styles.containerCalculadora}>
                <View style={styles.boxPantalla}>
                    <View style={styles.pantalla}>
                        <Text style={styles.textResultado}>{pantalla}</Text>
                    </View>
                </View>
                <View style={styles.boxButtons}>
                {
                    buttonsWithValue.map((element,key)=>{
                        return (
                            <TouchableHighlight onPress={()=>leerPresionado(element)} key={key} style={[styles.boxButton,element==='0' && styles.specialButton]}>
                                <View style={styles.button}>
                                    <Text style={styles.textButton}>{element}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })
                }
                </View>
            </View>
        </View>
    )
}
export default Calculadora