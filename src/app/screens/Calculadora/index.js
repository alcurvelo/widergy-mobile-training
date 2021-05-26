import React,{useState} from 'react'
import {View,Text,TouchableHighlight,TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../Calculadora/styles'
import {buttonsWithValue} from './constants'

const Calculadora =()=>{
    let [pantalla,setPantalla]=useState('')
    let [operation,setOperation]=useState('')
    let [numberOne,setNumberOne]=useState(0)
    const reiniciaCalculadora=()=>{
        setPantalla('')
        setOperation('')
        setNumberOne(0)
    }
    const caracterPresionado=(target)=>{
        const realizarOperation=(numberOne,operation,pantalla)=>{
            let numberTwo=parseFloat(pantalla.split(operation).pop().replace(',','.'))
            let result=0
            switch (operation) {
                case '+':
                    result=numberOne+numberTwo
                    break;
                case '-':
                    result=numberOne-numberTwo
                    break;
                case '*':
                    result=numberOne*numberTwo
                    break;
                case '/':
                    if(numberTwo!=0){
                        result=numberOne/numberTwo
                    }else{
                        console.warn("Indeterminado")
                        setPantalla('')
                        return false
                    }
                    break;
                case '%':
                    result=numberOne%numberTwo
                    break;
            }
            setPantalla(result.toFixed(3).replace('.',','))
            setNumberOne(result)
        }
        switch (target) {
            case "C":
                reiniciaCalculadora()
                break;
            case "<":
                setPantalla(pantalla.slice(0,pantalla.length-1))
                break;
            case '=':
                realizarOperation(numberOne,operation,pantalla)
                break;
            default:
                if(target.match(/[+-/=%*,]/)!=null){
                    if(target!=','){
                        console.log(pantalla," pantalla")
                        setOperation(target)
                        setNumberOne(parseFloat(pantalla.replace(',','.')))
                    }
                    setPantalla(pantalla+target)
                }else{
                    console.warn("Introduzca números o caracteres de una calculadora.")
                    setPantalla('')
                }
                break;
        }
    }
    const numeroPresionado=(target)=>{
        setPantalla(pantalla+target)
    }
    const leerPresionado=(target)=>{
        console.log(target)
        if(target.match(/[0123456789]/)!=null) {
            numeroPresionado(target)
        }else{
            caracterPresionado(target)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.contain}>
                <View style={styles.containerCalculadora}>
                    <View style={styles.boxPantalla}>
                        <View style={styles.pantalla}>
                            <TextInput
                            onKeyPress={({nativeEvent})=>{
                                (nativeEvent.key.match(/[0123456789]/)||nativeEvent.key.match(/[+-/=%*,]/))!=null
                                ?   leerPresionado(nativeEvent.key)
                                :   nativeEvent.key=='Backspace' 
                                    &&   caracterPresionado("<")
                            }}
                            style={styles.textResultado}>{pantalla}</TextInput>
                        </View>
                    </View>
                    <View style={styles.boxButtons}>
                    {
                        buttonsWithValue.map((element,key)=>{
                            return (
                                <TouchableHighlight 
                                    activeOpacity={0.45}
                                    underlayColor="#4bcaf9"
                                    onPress={()=>leerPresionado(element)} 
                                    key={key} 
                                    style={[styles.boxButton,element==='0' && styles.specialButton]}>
                                    <View style={[
                                        styles.button,
                                        element.match(/[C<]/)!=null && styles.specialButtonDel,
                                        element.match(/[+-/=%*,]/)!=null && styles.specialButtonOperations
                                        ]}>
                                        <Text style={styles.textButton}>{element}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Calculadora