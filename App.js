import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Navigator from './components/Homestack'

import LoginScreen from './components/screen/LoginScreen'
import RegisterScreen from './components/screen/RegisterScreen'

export default function App() {
  return (
    <Navigator/>
  );
}