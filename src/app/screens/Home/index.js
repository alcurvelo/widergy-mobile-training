import React from 'react';
import { View , Text, ImageBackground,TouchableOpacity} from "react-native"
import styles from './styles'

const Home=({navigation})=>{
    return (
        <View style={styles.contain}>  
            <ImageBackground style={styles.viewLogo} source={require('../../assets/logo.png')}></ImageBackground>
            <View style={styles.bienvenidaContent}>
                <Text style={styles.textBienvenida}>Mi primer App, ejercicio hecho con fines de presentacion al training proporcionado por <Text style={styles.nombreEmpresa}>Widergy</Text></Text>
            </View>
            <View style={styles.buttonsGroup}>
                <Text style={[styles.textBienvenida,{color:'green'}]}>Presiona en la opción deseada</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Calculadora')} style={styles.bCalculadora}>
                    <Text style={styles.bCalculadoraText}>Calculadora</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Home