import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { UTLoading } from '@widergy/mobile-ui';

import AuthForm from './components/AuthForm';
import styles from './styles';

const Auth = () => {
  const [screenView, setScreenView] = useState(true);
  const loading = useSelector(state => !!state.authR.tokenLoading);

  const onSubmit = values => {};
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
          <AuthForm screenView={screenView} onSubmit={onSubmit} />
          <TouchableOpacity
            onPress={() => {
              setScreenView(!screenView);
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
