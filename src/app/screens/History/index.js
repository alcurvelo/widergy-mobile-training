import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ExpressionContainer from './ExpressionContainer';
import actionHistory from '../../redux/history/actions';
import styles from './styles';

const History = ({navigation}) => {
  const dispatch = useDispatch();
  const history = useSelector(store => store.historyR.history);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.boxHistories}>
        <View style={styles.optionsGlobal}>
          <TouchableOpacity style={styles.buttonGlobal}>
            <Text
              onPress={() => dispatch(actionHistory.deleteAll(history))}
              style={styles.textButton}>
              Borrar todos
            </Text>
          </TouchableOpacity>
        </View>
        {history.length > 0 &&
          history.map((expression, key) => (
            <ExpressionContainer key={key} id={key} expression={expression} />
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
