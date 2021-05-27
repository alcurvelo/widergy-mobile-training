import React from 'react';
//Importando librerias para la navegacion
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'
//Componentes propios
import Home from '../screens/Home'
import Calculadora from '../screens/Calculadora'
import DrawerScreenLayout from './components/DrawerScreenLayout'
import styles from './styles';
import {screenOptionsHome,screenOptions} from './navigatorsOptions'
//Declaracion de los navigator
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
//Screens with stack navigation
const HomeScreen=()=>{
  return (
      <Stack.Navigator screenOptions={screenOptionsHome}>
          <Stack.Screen name="Inicio" component={Home}/>
      </Stack.Navigator>
  );
}
const CalculadoraScreen=()=>{
    return (
        <Stack.Navigator screenOptions={screenOptions("Calculadora")}>
            <Stack.Screen name="Calculadora" component={Calculadora}/>
        </Stack.Navigator>
    );
}
//Fin de screens
//Drawer Navigation
const NavigationDrawer=()=>{
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerStyle={styles.backgroundDrawerNavigator}>
            <Drawer.Screen name="Inicio" component={HomeScreen} 
            options={{
                drawerIcon:()=><DrawerScreenLayout nombre='Inicio' urlIcon='https://avatars.githubusercontent.com/u/23506803?v=4'/>
            }}/>
            <Drawer.Screen name="Calculadora" children={CalculadoraScreen}
            options={{
                drawerIcon:()=><DrawerScreenLayout nombre='Calculadora' urlIcon='https://images.vexels.com/media/users/3/127358/isolated/preview/736663fe6f9e03fcb39ace9020c42b4c-icono-de-calculadora-estacionaria-by-vexels.png'/>
            }}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default NavigationDrawer;