import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import ExpressionContainer from './ExpressionContainer';
import actionHistory from '../../redux/history/actions';
import styles from './styles';

const History = ({navigation, history, getHistories, deleteAllHistories}) => {
  let expressions = ['24 + 36 = 60', '25 - 275 = -250'];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.boxHistories}>
        <View style={styles.optionsGlobal}>
          <TouchableOpacity style={styles.buttonGlobal}>
            <Text onPress={() => deleteAllHistories} style={styles.textButton}>
              Borrar todos
            </Text>
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
const mapStateToProps = state => {
  return {
    history: state.historyReducer.history,
  };
};
const mapDispatchToProps = {
  getHistories: actionHistory.getHistories,
  editExpressionHistory: actionHistory.editExpressionHistory,
  deleleteAllHistories: actionHistory.deleteAllHistories,
  deleteHistoryForId: actionHistory.deleteHistoryForId,
};
export default connect(mapStateToProps, mapDispatchToProps)(History);
