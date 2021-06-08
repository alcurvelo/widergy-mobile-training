import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

const Input = ({placeholder, nameInput, readInput}) => {
  return (
    <TextInput
      style={styles.input}
      onChange={e => readInput(e)}
      nameInput={nameInput}
      placeholder={placeholder}
    />
  );
};
export default Input;
