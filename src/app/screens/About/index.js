import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

const About = ({navigation}) => {
  return (
    <View style={styles.contain}>
      <ImageBackground
        style={styles.viewLogo}
        source={require('../../assets/logo.png')}
      />
      <View style={styles.bienvenidaContent}>
        <Text style={styles.textBienvenida}>
          Mi primer App, ejercicio hecho con fines de presentacion al training
          proporcionado por <Text style={styles.nombreEmpresa}>Widergy</Text>
        </Text>
      </View>
      <View style={styles.buttonsGroup}>
        <Text style={[styles.textBienvenida, styles.green]}>
          Presiona en la opción deseada
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.bCalculadora}>
          <Text style={styles.bCalculadoraText}>Calculadora</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('History')}
          style={styles.bCalculadora}>
          <Text style={styles.bCalculadoraText}>Historial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default About;
