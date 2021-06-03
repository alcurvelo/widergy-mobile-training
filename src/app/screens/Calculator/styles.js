import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  containerCalculadora: {
    backgroundColor: '#00d564',
    height: 500,
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  boxPantalla: {
    backgroundColor: '#00d564',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    flex: 0.5,
  },
  pantalla: {
    flex: 1,
    backgroundColor: '#ffb200',
    borderRadius: 10,
  },
  textResultado: {
    fontSize: 22,
    fontWeight: 'bold',
    width: '100%',
    padding: 10,
    textAlign: 'right',
  },
  boxButtons: {
    flex: 4,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#ffb200',
    borderRadius: 5,
  },
});
