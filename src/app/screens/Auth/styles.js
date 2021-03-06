import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#007b3a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewLogo: {
    width: 120,
    height: 120,
  },
  boxBase: {
    minWidth: '80%',
    minHeight: 150,
    backgroundColor: '#4bcaf9',
    borderRadius: 10,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBox: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textButtonChange: {
    marginTop: 15,
    color: '#007b3a',
    fontWeight: 'bold',
  },
});
