import React from 'react';
import { TextInput } from 'react-native';

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
      placeholderTextColor="#2f2100"
      secureTextEntry={secureTextEntry}
      value={values[nameInput] || ''}
    />
  );
};
export default Input;
