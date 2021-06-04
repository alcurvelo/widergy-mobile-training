import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxHistories: {
    flex: 0.94,
  },
  optionsGlobal: {
    width: '100%',
    height: 45,
    backgroundColor: '#ffb200',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textOptionsGlobal: {
    flex: 2,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  buttonGlobal: {
    width: 100,
    height: '100%',
    backgroundColor: '#C14242',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
  },
  boxNavButtons: {
    flex: 0.06,
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
