import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import Button from './components/Button';
import {retrieveButtons, execOpKeyboardKeyPresed} from './utils';

const Home = ({navigation}) => {
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
      <View style={styles.boxNavButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('History')}
          style={styles.buttonNav}>
          <Text style={styles.buttonNavText}>Historial</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={styles.buttonNav}>
          <Text style={styles.buttonNavText}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Home;
