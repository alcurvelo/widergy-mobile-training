import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const renderField = ({
  input,
  placeholder,
  meta: { invalid, submitFailed, error },
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
      {submitFailed && invalid && error && (
        <Text style={[styles.textSync, styles.error]}>{error}</Text>
      )}
    </View>
  );
};

export default renderField;
