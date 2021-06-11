import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/app/navigation/AppNavigator';
import store from './src/app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default App;
