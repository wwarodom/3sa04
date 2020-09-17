import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather'

export default function App() {

  return (
    <View>
       <Weather zipCode="83120" /> 
    </View>
  );
}

