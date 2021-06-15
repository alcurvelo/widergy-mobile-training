import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

import actionHistory from '../../../redux/history/actions';
import {retrieveButtons} from '../../Home/utils';
import styles from './styles';

const ExpressionContainer = ({expression, id}) => {
  useEffect(() => {
    setTypeExpression(expression);
  }, [expression]);

  const [display, setDisplay] = useState('');
  const [typeExpression, setTypeExpression] = useState('');
  let buttons = retrieveButtons(display, setDisplay, setTypeExpression);
  const separedExpression = typeExpression.split(/[=]/);
  const dispatch = useDispatch();

  const readInput = target => {
    buttons.find(button => button.label === target).action();
  };

  const editExpressionHistoryForId = () =>
    dispatch(
      actionHistory.editExpressionHistory({
        newExpression: typeExpression,
        id,
      }),
    );
  const deleteHistoryForId = () =>
    dispatch(actionHistory.deleteHistoryForId(id));

  return (
    <View style={styles.boxHistory}>
      <TextInput
        onKeyPress={({nativeEvent}) => {
          (nativeEvent.key.match(/[0123456789]/) ||
            nativeEvent.key.match(/[+-/=%*,]/)) != null
            ? readInput(nativeEvent.key)
            : nativeEvent.key === 'Backspace'
            ? buttons.find(button => button.label === '<').action()
            : console.warn(
                'Introduzca números o caracteres de una calculadora.',
              );
        }}
        onSubmitEditing={() => {
          Keyboard.dismiss();
          buttons.find(button => button.label === '=').action();
        }}
        onBlur={() => buttons.find(button => button.label === '=').action()}
        onPressIn={() => {
          setDisplay('');
        }}
        placeholder={separedExpression[0]}
        placeholderTextColor={'white'}
        style={[styles.textValues, styles.inputText]}
      />
      <Text style={styles.textIqual}>=</Text>
      <Text style={styles.textValues}>{separedExpression[1]}</Text>
      <View style={styles.boxButtons}>
        <TouchableOpacity onPress={deleteHistoryForId}>
          <ImageBackground
            style={[styles.buttonOption, styles.red]}
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={editExpressionHistoryForId}>
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
export default ExpressionContainer;
