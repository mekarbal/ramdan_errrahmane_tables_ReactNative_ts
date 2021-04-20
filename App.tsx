import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddAssistance from './app/assistances/screens/AddAssistance';
import Constants from 'expo-constants'
import firebase from 'firebase';
import ListNavigation from './app/shared/componenets/ListNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


var firebaseConfig = {
  apiKey: "AIzaSyAP2O_RSdni3pwPbK_cgKuv7UIChwSrXcE",
  authDomain: "errahmanetable.firebaseapp.com",
  projectId: "errahmanetable",
  storageBucket: "errahmanetable.appspot.com",
  messagingSenderId: "223055466573",
  appId: "1:223055466573:web:50cbe6868b9d1a38860c04",
  measurementId: "G-7LQL2MVEBW"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const Stack=createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
 
     <View style={styles.container}>
        <StatusBar style="auto" />
       <Stack.Navigator>
        
        <Stack.Screen name="Home" component={ListNavigation}  options={{
          title: "Home",
          headerTintColor:'white',
          headerStyle:{
            backgroundColor: '#057385',
          }, 
          headerTitleStyle: { alignSelf: 'center' },
        }}/> 
        <Stack.Screen name="Assistance" component={AddAssistance} options={{
          title: "Add Assistance",
          headerTintColor:'white',
          headerStyle:{
            backgroundColor: '#057385',
          }, 
          headerTitleStyle: { alignSelf: 'center',margin:2 },
        }} /> 
        
      </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constants.statusBarHeight,
  },});
