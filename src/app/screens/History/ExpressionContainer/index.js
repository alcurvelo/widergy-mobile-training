import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

const ExpressionContainer = ({expression}) => {
  let twoValues = expression.split(/[=]/);
  return (
    <View style={styles.boxHistory}>
      <Text style={styles.textValues}>{twoValues[0]}</Text>
      <Text style={styles.textIqual}>=</Text>
      <Text style={styles.textValues}>{twoValues[1]}</Text>
      <View style={styles.boxButtons}>
        <TouchableOpacity>
          <ImageBackground
            style={[styles.buttonOption, styles.red]}
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
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
