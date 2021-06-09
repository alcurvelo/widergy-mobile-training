import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';

import Input from './components/Input';
import styles from './styles';

const LoginAndRegister = () => {
  const [screenView, setScreenView] = useState(true);
  const [values, setValues] = useState({});

  const readInput = (text, nameInput) => {
    setValues({
      ...values,
      [nameInput]: text,
    });
  };
  console.log(values);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.viewLogo}
        source={require('../../assets/logo.png')}
      />
      <View
        style={[
          styles.boxBase,
          styles[screenView ? 'loginBox' : 'registerBox'],
        ]}>
        {screenView ? (
          <>
            <Text style={styles.titleBox}>Iniciar sesión</Text>
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
          </>
        ) : (
          <>
            <Text style={styles.titleBox}>Ingresa tus datos y regístrate</Text>
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
            <Input
              placeholder="Confirma la contraseña"
              nameInput="confirmPassword"
              onChange={readInput}
              secureTextEntry={true}
              values={values}
            />
          </>
        )}
        <TouchableOpacity style={styles.buttonConfirm}>
          <Text style={styles.textButonConfirm}>
            {screenView ? 'Entrar' : 'Regístrar'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setScreenView(!screenView);
            setValues({});
          }}>
          <Text style={styles.textButtonChange}>
            {screenView
              ? '¿Nó tenés cuenta?, Regístrate'
              : '¿Tenés cuenta?, inicia sesión'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginAndRegister;
