import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';

import Input from './components/Input';
import styles from './styles';

const LoginAndRegister = () => {
  const [screenView, setScreenView] = useState(true);
  const [values, setValues] = useState({});
  const readInput = (target) => {
    console.log(target);
    /*
    setValues({
      [target.nameInput]: target.value,
    });*/
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
              readInput={readInput}
            />
            <Input
              placeholder="Contraseña"
              nameInput="password"
              readInput={readInput}
            />
          </>
        ) : (
          <Text style={styles.titleBox}>Ingresa tus datos y regístrate</Text>
        )}
        <TouchableOpacity onPress={() => setScreenView(!screenView)}>
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
const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(LoginAndRegister);
