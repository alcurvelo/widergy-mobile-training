import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';

import styles from './styles';
import Button from './components/Button';
import { retrieveButtons, execOpKeyboardKeyPresed } from './utils';

import actionHistory from '../../redux/history/actions';

const Home = ({ navigation }) => {
  const [display, setDisplay] = useState('');
  const [saveExpression, setSaveExpression] = useState('');
  const buttons = retrieveButtons(display, setDisplay, setSaveExpression);
  const dispatch = useDispatch();

  return (
    <KeyboardAwareScrollView style={styles.contain}>
      <View style={styles.containerCalculator}>
        <View style={styles.boxHistory}>
          {saveExpression.length > 0 && (
            <>
              <Text style={styles.textValues}>
                {saveExpression.split(/[=]/)[0]}
              </Text>
              <Text style={styles.textIqual}>=</Text>
              <Text style={styles.textValues}>
                {saveExpression.split(/[=]/)[1]}
              </Text>
              <View style={styles.boxButtonHistory}>
                <TouchableOpacity
                  onPress={() =>
                    saveExpression.length > 0 &&
                    dispatch(actionHistory.setHistory(saveExpression))
                  }
                >
                  <ImageBackground
                    style={[styles.buttonOption, styles.red]}
                    source={{
                      uri: 'https://www.freeiconspng.com/uploads/save-icon-20.png',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </>
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
