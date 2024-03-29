
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from './pages/To_do_list';
import Login from './pages/Login';
import Home from './pages/Home'; // Import the Home component
import Calendar from './pages/Calendar';
import FeePayment from './pages/FeePayment';
import Details from './pages/Details';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home} // Use the imported Home component
          options={{ title: 'JCET COMPANION' }}
        />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="FeePayment" component={FeePayment} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
