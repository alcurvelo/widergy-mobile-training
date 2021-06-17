import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  input: {
    minWidth: '100%',
    height: 40,
    borderRadius: 10,
    borderColor: '#ffb200',
    borderWidth: 2,
    backgroundColor: '#ffb200',
    color: '#f8f8f8',
    marginTop: 5,
    textAlign: 'center',
  },
  textSync: {
    borderRadius: 5,
    backgroundColor: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    color: 'darkred',
  },
  warning: {
    color: 'darkorange',
  },
});
