import React, { useEffect, Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';

import About from '../../screens/About';
import Home from '../../screens/Home';
import History from '../../screens/History';
import Auth from '../../screens/Auth';

import Routes from '../Routes';
import authActions from '../../redux/auth/actions';
import styles from './styles';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => !!state.authR.token);

  const logout = () => dispatch(authActions.logout());

  useEffect(() => {
    dispatch(authActions.getSavedToken());
  }, [dispatch]);

  const optionsScreen = {
    headerTintColor: 'white',
    headerShown: true,
    headerStyle: styles.header,
    headerRight: () => {
      return (
        <TouchableOpacity onPress={logout} style={styles.bLogout}>
          <Text style={styles.bLogoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      );
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: styles.card }}>
        {isAuthenticated ? (
          <Fragment>
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
          </Fragment>
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
