import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import Button from './components/Button';
import {retrieveButtons, execOpKeyboardKeyPresed} from './utils';

const Home = () => {
  const [display, setDisplay] = useState('');
  const buttons = retrieveButtons(display, setDisplay);

  return (
    <KeyboardAwareScrollView style={styles.contain}>
      <View style={styles.containerCalculator}>
        <View style={styles.boxScreen}>
          <View style={styles.screen}>
            <TextInput
              onKeyPress={({nativeEvent}) =>
                execOpKeyboardKeyPresed(nativeEvent.key, buttons)
              }
              style={styles.textResult}>
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
    </KeyboardAwareScrollView>
  );
};
export default Home;
