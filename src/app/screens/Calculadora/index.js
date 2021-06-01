import React,{useState} from 'react'
import {View, TextInput} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import Button from './components/Button'
import {BUTTONS} from './constants'

const Calculadora =()=>{
    //Variables y funciones
    let [display,setDisplay]=useState('')
    const leerPresionado=(target)=>{
        GET_BUTTONS.find(button=>button.label===target).action()
    }
    const setExpression=(expression)=>{
        console.log(display)
        expression!=null
            ?   setDisplay(display.concat(expression))
            :   setDisplay('')
    }
    const deleteLastValue=()=>{
        setDisplay(display.slice(0,-1))
    }
    const operation=(op,numberOne,numberTwo)=>{
        let result
        switch (op) {
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
                    setDisplay('')
                    return ''
                }
                break;
            case '%':
                result=numberOne%numberTwo
                break;
        }
        return result
    }
    const solve=()=>{
        let result=''
        let exp=RegExp(/^(-?(\d*\,)?\d*)([\+|\-|\*|\/|\%]{1})(-?(\d*\,)?\d*)$/)
        if(display.match(exp) != null){
            result=display.replace(/\,/g,'.')
            let consultExpression=result.split(/([\+|\-|\*|\/|\%]{1})/)
            console.log(consultExpression)
            consultExpression.length==3
                ?   setDisplay(operation(consultExpression[1],parseFloat(consultExpression[0]),parseFloat(consultExpression[2])).toLocaleString("es-ES").replace('.',','))
                :   "Faltan los casos de operaciones con números negativos"
        }else {
            console.warn("Error:No es una operación valida.")
            setDisplay('')
        }
    }
    let GET_BUTTONS=BUTTONS(setExpression,deleteLastValue,solve)
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
                                ?   GET_BUTTONS.find(button=>button.label=="<").action()
                                :   console.warn("Introduzca números o caracteres de una calculadora.")
                        }}
                        style={styles.textResultado}>{display}</TextInput>
                    </View>
                </View>
                <View style={styles.boxButtons}>
                {
                    GET_BUTTONS.map((button,key)=>{
                        return (
                            <Button key={key} button={button}/>
                        )
                    })
                }
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
export default Calculadora