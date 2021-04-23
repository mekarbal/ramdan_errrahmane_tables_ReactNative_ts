import React from 'react'
import {View,StyleSheet} from 'react-native'
import ButtonShared from './ButtonShared'
const ListNavigation = (props:any) => {
    
    const navigateToAssis =()=> {
        props.navigation.navigate('Assistance')
    }
    const navigateToBF =()=> {
        props.navigation.navigate('Assist')
    }
    return (
        <View style={styles.listContainer}>
            <ButtonShared text="Add Assistance Place" onPress={() =>navigateToAssis()}/> 
            <ButtonShared text="Add ftour Place" onPress={() =>navigateToBF()}/> 
            <ButtonShared text="Display all assistance"/> 
            <ButtonShared text="Display all Ftours"/> 
        </View>
    )
}
const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'skyblue',
        height:'100%',
        justifyContent: 'center',
        padding: 25
    }
})

export default ListNavigation
