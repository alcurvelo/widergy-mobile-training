import React,{useState} from 'react'
import {View,Text,TouchableHighlight,TextInput} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../Calculadora/styles'
import {buttonsWithValue} from './constants'

const Calculadora =()=>{
    //Variables y funciones
    let [pantalla,setPantalla]=useState('')
    let [operation,setOperation]=useState('')
    let [numberOne,setNumberOne]=useState(0)
    const resetCalculator=()=>{
        setPantalla('')
        setOperation('')
        setNumberOne(0)
    }
    const leerPresionado=(target)=>{
        //Si es un número lo concatena
        if(target.match(/[0123456789]/)!=null) {
            setPantalla(pantalla.concat(target))
        }else{
            caracterPresionado(target)
        }
    }
    const caracterPresionado=(target)=>{
        //Operaciones de la calculadora
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
            numberTwo=0
            setPantalla(result.toLocaleString("es-ES").replace('.',','))
            setNumberOne(result)
        }
        switch (target) {
            case "C":
                resetCalculator()
                break;
            case "<":
                setPantalla(pantalla.slice(0,pantalla.length-1))
                break;
            case '=':
                if(operation.length>0){
                    realizarOperation(numberOne,operation,pantalla)
                    setOperation('')
                }else{
                    setPantalla(numberOne.toLocaleString("es-ES").replace('.',','))
                }
                break;
            default:
                if(target.match(/[+-/=%*,]/)!=null){
                    //Si es una , solo la concatena, no realiza ninguna operacion
                    if(target!=','){
                        setOperation(target)
                        setNumberOne(parseFloat(pantalla.replace(',','.')))
                    }
                    setPantalla(pantalla+target)
                }
                break;
        }
    }
    //Fin de variables y funciones
    return (
        <KeyboardAwareScrollView style={styles.contain}>
            <View style={styles.containerCalculadora}>
                <View style={styles.boxPantalla}>
                    <View style={styles.pantalla}>
                        <TextInput
                        onKeyPress={({nativeEvent})=>{
                            (nativeEvent.key.match(/[0123456789]/)||nativeEvent.key.match(/[+-/=%*,]/))!=null
                            ?   leerPresionado(nativeEvent.key)
                            :   nativeEvent.key=='Backspace' 
                                ?   caracterPresionado("<")
                                :   console.warn("Introduzca números o caracteres de una calculadora.")
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
        </KeyboardAwareScrollView>
    )
}
export default Calculadora