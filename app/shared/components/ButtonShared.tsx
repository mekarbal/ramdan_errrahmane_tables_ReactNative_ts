import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Button} from 'react-native-paper'
const ButtonShared = (props:any) => {
    return (
        <View>            
          <TouchableOpacity
          style={styles.button}
          onPress={props.onPress}
          >
          <Text style={{color:'white',fontSize:16}}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default ButtonShared

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#B50045",
      padding: 10,
      marginTop: 45,
      borderRadius: 30,
    }
  });