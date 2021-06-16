import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@widergy/mobile-ui';
import AppNavigator from './src/app/navigation/AppNavigator';
import store from './src/app/redux/store';
import theme from './src/app/config/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};
export default App;
