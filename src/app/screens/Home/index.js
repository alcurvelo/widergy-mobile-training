import React, { useState, useEffect, Fragment } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import actionsHistory from '../../redux/history/actions';
import styles from './styles';
import Button from './components/Button';
import { retrieveButtons, execOpKeyboardKeyPresed } from './utils';

const Home = ({ navigation }) => {
  const [display, setDisplay] = useState('');
  const [reload, setReload] = useState(false);
  const [saveExpression, setSaveExpression] = useState('');
  const buttons = retrieveButtons(display, setDisplay, setSaveExpression);
  const separedExpression = saveExpression.split(/[=]/);
  const history = useSelector(state => state.historyR.history);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsHistory.getHistories());
  }, [dispatch, reload]);

  const setHistory = () => dispatch(actionsHistory.setHistory(saveExpression));

  const expressionSaveExistInHistory = () => {
    if (
      history.length > 0 &&
      history.findIndex(target => target.expression === saveExpression) !== -1
    ) {
      return true;
    }
    return false;
  };

  return (
    <KeyboardAwareScrollView style={styles.contain}>
      <View style={styles.containerCalculator}>
        <View style={styles.boxHistory}>
          {saveExpression.length > 0 && (
            <Fragment>
              <Text style={styles.textValues}>{separedExpression[0]}</Text>
              <Text style={styles.textIqual}>=</Text>
              <Text style={styles.textValues}>{separedExpression[1]}</Text>
              <View style={styles.boxButtonHistory}>
                <TouchableOpacity
                  disabled={
                    !(
                      display.length > 0 &&
                      saveExpression.length > 0 &&
                      history[history.length - 1] !== saveExpression
                    )
                  }
                  onPress={() => {
                    if (setHistory()) {
                      setReload(!reload);
                    }
                  }}
                >
                  <ImageBackground
                    style={[styles.buttonOption, styles.red]}
                    source={{
                      uri: 'https://www.freeiconspng.com/uploads/save-icon-20.png',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </Fragment>
          )}
        </View>
        <View style={styles.boxScreen}>
          <View style={styles.screen}>
            <TextInput
              onKeyPress={({ nativeEvent }) =>
                execOpKeyboardKeyPresed(nativeEvent.key, buttons)
              }
              style={styles.textResult}
            >
              {display}
            </TextInput>
          </View>
        </View>
        <View style={styles.boxButtons}>
          {buttons.map((button, key) => {
            return (
              <Button
                key={key}
                label={button.label}
                onPress={button.action}
                style={button.style}
                variantStyle={button.variantStyle}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.boxNavButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('History')}
          style={styles.buttonNav}
        >
          <Text style={styles.buttonNavText}>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={styles.buttonNav}
        >
          <Text style={styles.buttonNavText}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Home;
