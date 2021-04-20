import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SignIn } from './app/auth/sign-in/sign-in';
import { RamadanHome } from './app/ramadan/screens/ramadan-home';
import { RamadanMap } from './app/ramadan/screens/ramadan-map';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
