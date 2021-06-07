import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';

import styles from './styles';
import Button from './components/Button';
import {retrieveButtons} from './utils';
import actionHistory from '../../redux/history/actions';

const Home = ({navigation, setHistory, history}) => {
  //Variables y funcionesa
  const [display, setDisplay] = useState('');
  const [saveExpression, setSaveExpression] = useState('');
  let GET_BUTTONS = retrieveButtons(display, setDisplay, setSaveExpression);

  const leerPresionado = target => {
    GET_BUTTONS.find(button => button.label === target).action();
  };
  console.log(history);
  //Fin de variables y funciones
  return (
    <KeyboardAwareScrollView style={styles.contain}>
      <View style={styles.containerCalculator}>
        <View style={styles.boxHistory}>
          {saveExpression.length > 0 && (
            <>
              <Text style={styles.textValues}>
                {saveExpression.split(/[=]/)[0]}
              </Text>
              <Text style={styles.textIqual}>=</Text>
              <Text style={styles.textValues}>
                {saveExpression.split(/[=]/)[1]}
              </Text>
              <View style={styles.boxButtonHistory}>
                <TouchableOpacity
                  onPress={() =>
                    saveExpression.length > 0 && setHistory(saveExpression)
                  }>
                  <ImageBackground
                    style={[styles.buttonOption, styles.red]}
                    source={{
                      uri: 'https://www.freeiconspng.com/uploads/save-icon-20.png',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}
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
const mapStateToProps = state => {
  return {
    history: state.historyReducer.history,
  };
};
const mapDispatchToprops = {
  setHistory: actionHistory.setHistory,
};
export default connect(mapStateToProps, mapDispatchToprops)(Home);
