/**
 * @format
 */
if (__DEV__) {
  import('./src/app/config/Reactotron').then(() =>
    console.log('Reactotron Configured'),
  );
}
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
