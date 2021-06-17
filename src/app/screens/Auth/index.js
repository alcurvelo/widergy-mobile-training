import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UTLoading } from '@widergy/mobile-ui';

import authActions from '../../redux/auth/actions';
import Input from './components/Input';
import styles from './styles';

const Auth = () => {
  const [screenView, setScreenView] = useState(true);
  const [values, setValues] = useState({});
  const loading = useSelector(state => !!state.authR.tokenLoading);
  const dispatch = useDispatch();

  const signIn = () => dispatch(authActions.signIn(values));
  const newUser = () => dispatch(authActions.newUser(values));

  const readInput = (text, nameInput) => {
    setValues({
      ...values,
      [nameInput]: text,
    });
  };

  return (
    <UTLoading loading={loading} style={styles.spinner}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.viewLogo}
          source={require('../../assets/logo.png')}
        />
        <View
          style={[
            styles.boxBase,
            styles[screenView ? 'loginBox' : 'registerBox'],
          ]}
        >
          <Text style={styles.titleBox}>
            {screenView ? 'Iniciar sesión' : 'Ingresa tus datos y regístrate'}
          </Text>
          <Input
            placeholder="Correo eléctronico"
            nameInput="email"
            onChange={readInput}
            values={values}
          />
          <Input
            placeholder="Contraseña"
            nameInput="password"
            onChange={readInput}
            secureTextEntry={true}
            values={values}
          />
          {!screenView && (
            <Input
              placeholder="Confirma la contraseña"
              nameInput="confirmPassword"
              onChange={readInput}
              secureTextEntry={true}
              values={values}
            />
          )}
          <TouchableOpacity
            onPress={() => {
              screenView ? signIn() : newUser();
            }}
            style={[styles.buttonConfirm]}
            disabled={
              !screenView &&
              !(
                values.hasOwnProperty('confirmPassword') &&
                values.password === values.confirmPassword
              )
            }
          >
            <Text style={styles.textButonConfirm}>
              {screenView ? 'Entrar' : 'Regístrar'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setScreenView(!screenView);
              setValues({});
            }}
          >
            <Text style={styles.textButtonChange}>
              {screenView
                ? '¿Nó tenés cuenta?, Regístrate'
                : '¿Tenés cuenta?, inicia sesión'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </UTLoading>
  );
};
export default Auth;
