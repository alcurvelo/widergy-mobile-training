import React, {useState} from 'react';
import {View, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import actionHistory from '../../../redux/history/actions';
import {retrieveButtons} from '../../Home/utils';
import styles from './styles';

const ExpressionContainer = ({
  expression,
  key,
  editExpressionHistory,
  deleteHistoryForId,
}) => {
  const [typeExpression, setTypeExpression] = useState('');
  let GET_BUTTONS = retrieveButtons(typeExpression, setTypeExpression);

  const leerPresionado = target => {
    GET_BUTTONS.find(button => button.label === target).action();
  };

  return (
    <View style={styles.boxHistory}>
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
      <View style={styles.boxButtons}>
        <TouchableOpacity onPress={() => deleteHistoryForId(key)}>
          <ImageBackground
            style={[styles.buttonOption, styles.red]}
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => editExpressionHistory}>
          <ImageBackground
            style={[styles.buttonOption, styles.yellow]}
            source={{
              uri: 'https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapDispatchToProps = {
  editExpressionHistory: actionHistory.editExpressionHistory,
  deleteHistoryForId: actionHistory.deleteHistoryForId,
};
export default connect(null, mapDispatchToProps)(ExpressionContainer);
