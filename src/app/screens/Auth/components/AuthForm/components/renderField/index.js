import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const renderField = ({
  input,
  placeholder,
  meta: { touched, error, warning },
  secureTextEntry,
}) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        {...input}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#2f2100"
        secureTextEntry={secureTextEntry}
      />
      {touched &&
        ((error && (
          <Text style={[styles.textSync, styles.error]}>{error}</Text>
        )) ||
          (warning && (
            <Text style={[styles.textSync, styles.warning]}>{warning}</Text>
          )))}
    </View>
  );
};

export default renderField;
