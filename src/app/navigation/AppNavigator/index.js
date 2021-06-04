import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import About from '../../screens/About';
import Home from '../../screens/Home';
import History from '../../screens/History';

import Routes from '../Routes';

import styles from './styles';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{cardStyle: styles.card}}>
        <Stack.Screen
          name={Routes.Home}
          component={Home}
          options={{
            headerTintColor: 'white',
            headerShown: true,
            headerStyle: styles.header,
          }}
        />
        <Stack.Screen
          name={Routes.History}
          component={History}
          options={{
            headerTintColor: 'white',
            headerShown: true,
            headerStyle: styles.header,
          }}
        />
        <Stack.Screen
          name={Routes.About}
          component={About}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
