import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Home';
import Calculator from '../../screens/Calculator';

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
            title: 'Welcome',
            headerShown: false,
            headerStyle: styles.header,
          }}
        />
        <Stack.Screen
          name={Routes.Calculator}
          component={Calculator}
          options={{
            headerShown: true,
            headerStyle: styles.header,
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
