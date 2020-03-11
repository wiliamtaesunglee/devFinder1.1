import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'

import LoginScreen from './src/screens/loginScreen.js';
import DevListScreen from './src/screens/devListScreen.js';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='DevFinder'
          component={LoginScreen}
          options={{ title: 'Login Screen' }}
        />
        <Stack.Screen
          name='DevList'
          component={DevListScreen}
          options={{ title: 'List Of Developers' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
