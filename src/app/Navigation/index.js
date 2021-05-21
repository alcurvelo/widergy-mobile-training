// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'
import  Calculadora from '../screens/Calculadora'
import Home from '../screens/Home'
import HeaderNavigation from '../Navigation/HeaderNavigation'
import {Text} from 'react-native'
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
//Screens
function HomeScreen() {
    // screenOptions={{headerShown:false}}
  return (
      <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#00d564'},
          headerTintColor:'white',
          headerBackTitleVisible:true
      }}>
          <Stack.Screen name="Inicio" component={Home}/>
      </Stack.Navigator>
  );
}
function CalculadoraScreen() {
    return (
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#00d564'},
        header:({scene, previous, navigation})=>HeaderNavigation(scene, previous, navigation,"Calculadora")
    }}>
        <Stack.Screen name="Calculadora" component={Calculadora}/>
    </Stack.Navigator>
    );
}

function NavigationDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator 
        drawerContentOptions={{labelStyle:{
                                color:'white',
                                fontSize:20,
                                fontWeight:'bold'
                            }}} 
        drawerStyle={{backgroundColor:'#00d564'}}>
            <Drawer.Screen name="Inicio" component={HomeScreen} 
            options={{
                drawerIcon: ({ color }) => <Text>Icono</Text>
            }}/>
            <Drawer.Screen name="Calculadora" children={CalculadoraScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default NavigationDrawer;