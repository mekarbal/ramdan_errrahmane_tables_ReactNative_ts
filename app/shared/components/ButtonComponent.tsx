import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        color: 'red',
        backgroundColor:'blue'
    }
});
 
const ButtonComponent = () => {
    return (
        <Button
        title="Tester"
        onPress={() => {
            Alert.alert('Simple Button pressed');
        }}
      />
    );
}

 
export default ButtonComponent;