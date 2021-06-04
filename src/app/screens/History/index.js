import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import ExpressionContainer from './ExpressionContainer';
import styles from './styles';

const History = ({navigation}) => {
  let expressions = ['24 + 36 = 60', '25 - 275 = -250'];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.boxHistories}>
        <View style={styles.optionsGlobal}>
          <TouchableOpacity style={styles.buttonGlobal}>
            <Text style={styles.textButton}>Borrar todos</Text>
          </TouchableOpacity>
        </View>
        {expressions.map((expression, key) => (
          <ExpressionContainer key={key} expression={expression} />
        ))}
      </ScrollView>
      <View style={styles.boxNavButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonNav}>
          <Text style={styles.buttonNavText}>Calculadora</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={styles.buttonNav}>
          <Text style={styles.buttonNavText}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default History;
