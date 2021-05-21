import React from 'react';
import { View , Text, ImageBackground} from "react-native"
import styles from './styles'

const Home=()=>{
    return (
        <View style={styles.contain}>  
        <ImageBackground style={styles.viewLogo} source={require('../../assets/logo.png')}></ImageBackground>
            <View style={styles.bienvenidaContent}>
                <Text style={styles.textBienvenida}>Mi primer App, ejercicio hecho con fines de presentacion al training proporcionado por <Text style={styles.nombreEmpresa}>Widergy</Text></Text>
              </View></View>
    )
}
export default Home