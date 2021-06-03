import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import Button from './components/Button';
import {retrieveButtons} from './utils';

const Calculator = () => {
  //Variables y funcionesa
  const [display, setDisplay] = useState('');

  const getPresed = target => {
    GET_BUTTONS.find(button => button.label === target).action();
  };

  let GET_BUTTONS = retrieveButtons(display, setDisplay);

  //Fin de variables y funciones
  return (
    <KeyboardAwareScrollView style={styles.contain}>
      <View style={styles.containerCalculadora}>
        <View style={styles.boxPantalla}>
          <View style={styles.pantalla}>
            <TextInput
              onKeyPress={({nativeEvent}) => {
                (nativeEvent.key.match(/[0123456789]/) ||
                  nativeEvent.key.match(/[+-/=%*,]/)) != null
                  ? getPresed(nativeEvent.key)
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
    </KeyboardAwareScrollView>
  );
};
export default Calculator;
