import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contain: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4bcaf9',
  },
  bienvenidaContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    minHeight: 200,
    borderRadius: 10,
    backgroundColor: '#00d564',
  },
  viewLogo: {
    width: 120,
    height: 120,
  },
  nombreEmpresa: {
    color: '#ffb200',
  },
  textBienvenida: {
    fontSize: 18,
    color: '#f8f8f8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsGroup: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%',
    height: 100,
  },
  bCalculadora: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 40,
    backgroundColor: '#ffb200',
    borderRadius: 10,
  },
  bCalculadoraText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8f8f8',
  },
  green: {
    color: 'green',
  },
});
