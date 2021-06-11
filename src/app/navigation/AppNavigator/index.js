import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { UTLoading } from '@widergy/mobile-ui';

import About from '../../screens/About';
import Home from '../../screens/Home';
import History from '../../screens/History';
import Auth from '../../screens/Auth';

import Routes from '../Routes';
import actionsAuth from '../../redux/auth/actions';
import styles from './styles';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => !!state.authR.token);

  useEffect(() => {
    dispatch(actionsAuth.userLoged());
  }, [dispatch]);

  const optionsScreen = {
    headerTintColor: 'white',
    headerShown: true,
    headerStyle: styles.header,
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => dispatch(actionsAuth.logout())}
          style={styles.bLogout}
        >
          <Text style={styles.bLogoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      );
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: styles.card }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name={Routes.Home}
              component={Home}
              options={optionsScreen}
            />
            <Stack.Screen
              name={Routes.History}
              component={History}
              options={optionsScreen}
            />
            <Stack.Screen
              name={Routes.About}
              component={About}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name={Routes.Auth}
            component={Auth}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
