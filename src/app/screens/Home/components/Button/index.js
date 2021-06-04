import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles.js';

const Button = ({button}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.45}
      underlayColor="#4bcaf9"
      onPress={button.action}
      style={[styles.boxButton, button.label === '0' && styles.specialButton]}>
      <View style={[styles.button, styles[button.style && button.style]]}>
        <Text style={styles.textButton}>{button.label}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default Button;
