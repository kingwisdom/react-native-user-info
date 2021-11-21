import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './src/routes/StackRoutes';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';

import {Provider} from 'react-redux'
import {Store} from './src/redux/store'

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            header:()=> null
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUp}
          options={{
            header:()=> null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
