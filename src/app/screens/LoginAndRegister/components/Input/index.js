import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

const Input = ({
  placeholder,
  nameInput,
  onChange,
  secureTextEntry = false,
  values,
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={text => onChange(text, nameInput)}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={values[nameInput] ? values[nameInput] : ''}
    />
  );
};
export default Input;
