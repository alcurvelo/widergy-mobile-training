import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import Button from './components/Button';
import {retrieveButtons} from './utils';

const Home = ({navigation}) => {
  //Variables y funcionesa
  const [display, setDisplay] = useState('');

  const leerPresionado = target => {
    GET_BUTTONS.find(button => button.label === target).action();
  };

  let GET_BUTTONS = retrieveButtons(display, setDisplay);

  //Fin de variables y funciones
  return (
    <KeyboardAwareScrollView style={styles.contain}>
      <View style={styles.containerCalculator}>
        <View style={styles.boxHistory}>
          <Text style={styles.textValues}>expression</Text>
          <Text style={styles.textIqual}>=</Text>
          <Text style={styles.textValues}>resultado</Text>
          <View style={styles.boxButtonHistory}>
            <TouchableOpacity>
              <ImageBackground
                style={[styles.buttonOption, styles.red]}
                source={{
                  uri: 'https://lh3.googleusercontent.com/proxy/tOhIwSCvnEObBTg4L5X6y7mynDzJLwfa7rwe4Q9bL2wwieWefSNd8GL8ThtbTRDWQljxmx60f1bpQx3EdezRI-8BWoBOEayvPQ',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxPantalla}>
          <View style={styles.pantalla}>
            <TextInput
              onKeyPress={({nativeEvent}) => {
                (nativeEvent.key.match(/[0123456789]/) ||
                  nativeEvent.key.match(/[+-/=%*,]/)) != null
                  ? leerPresionado(nativeEvent.key)
                  : nativeEvent.key === 'Backspace'
                  ? GET_BUTTONS.find(button => button.label === '<').action()
                  : console.warn(
                      'Introduzca números o caracteres de una calculadora.',
                    );
              }}
              style={styles.textResultado}>
              {display}
            </TextInput>
          </View>
        </View>
        <View style={styles.boxButtons}>
          {GET_BUTTONS.map((button, key) => {
            return <Button key={key} button={button} />;
          })}
        </View>
      </View>
      <View style={styles.boxNavButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('History')}
          style={styles.buttonNav}>
          <Text style={styles.buttonNavText}>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={styles.buttonNav}>
          <Text style={styles.buttonNavText}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Home;
