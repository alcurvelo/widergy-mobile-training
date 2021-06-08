import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.contain}>
      <ImageBackground
        style={styles.viewLogo}
        source={require('../../assets/logo.png')}
      />
      <View style={styles.welcomeContent}>
        <Text style={styles.textWelcome}>
          Mi primer App, ejercicio hecho con fines de presentacion al training
          proporcionado por <Text style={styles.nameBusiness}>Widergy</Text>
        </Text>
      </View>
      <View style={styles.buttonsGroup}>
        <Text style={[styles.textWelcome, styles.green]}>
          Presiona en la opción deseada
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Calculator')}
          style={styles.bCalculator}>
          <Text style={styles.bCalculatorText}>Calculadora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
