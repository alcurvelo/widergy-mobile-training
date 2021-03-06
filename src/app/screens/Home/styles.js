import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  containerCalculator: {
    backgroundColor: '#00d564',
    height: 520,
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  boxHistory: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textIqual: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  textValues: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '40%',
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  boxButtonHistory: {
    width: '10%',
  },
  buttonOption: {
    margin: 1.5,
    width: 20,
    height: 20,
    borderRadius: 2,
  },
  boxScreen: {
    backgroundColor: '#00d564',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    flex: 0.5,
  },
  screen: {
    flex: 1,
    backgroundColor: '#ffb200',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    minHeight: 50,
  },
  textResult: {
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
  boxNavButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
  },
  buttonNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    height: 40,
    backgroundColor: '#ffb200',
    borderRadius: 10,
  },
  buttonNavText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8f8f8',
  },
});
