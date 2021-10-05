import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles.js';

const Button = ({ label, onPress, style, variantStyle }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.45}
      underlayColor="#4bcaf9"
      onPress={onPress}
      style={[styles.boxButton, variantStyle]}
    >
      <View style={[styles.button, style]}>
        <Text style={styles.textButton}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default Button;
