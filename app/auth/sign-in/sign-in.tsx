import React,{useEffect} from 'react';
import {
    ScrollView,StyleSheet,Text,
    TextInput,Alert,
    Image
} from 'react-native';
import { Auth } from '../../shared/models/auth.model'
import {AuthEnum} from '../../shared/enums/auth.enum';
import { auth } from 'react-native-firebase';
import ButtonShared from '../../shared/components/ButtonShared';
import firebase from '../../../firebase/firebase';

export function SignIn(props:any) {
    // let authEnum = AuthEnum;
    
    const [email, onChangeEmail] = React.useState(""); 
    const [password, onChangePassword] = React.useState("");

    function add(){
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(res=>{
                console.log(res);
                props.navigation.navigate('Home')
            })
        } catch (err) {
            console.log(err.message);
        }
    }
    
    function navigateToSignUp() {
        props.navigation.navigate('Sign up')
    }

    return (
        <ScrollView style={styles.container}>
            {/* <Text>  {authEnum.BOOKED}  {authEnum.FREE}</Text> */}
            <Image source={require('../../../assets/logo.png')} />
            <TextInput
                style={styles.input}
                placeholder={'exemple@gmail.co'}
                placeholderTextColor="white"
                onChangeText={onChangeEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder={'********'}
                placeholderTextColor="white"
                secureTextEntry={true}
                onChangeText={onChangePassword}
                value={password}
            />
            <ButtonShared text="SIGN IN"
                onPress={() => {
                    // Alert.alert(email);
                    add()
                }}
            /> 
            <Text style={styles.signLink}>Don't have an account yet ? 
                <Text style={styles.toSignUp} onPress={() =>navigateToSignUp()}>
                    &nbsp; Sign Up
                </Text>
            </Text>
        </ScrollView>
    );
}

export function Test(){
    console.log('hola')
}

const styles = StyleSheet.create({
    container: {
        padding:30,
        minWidth:370,
        backgroundColor:'skyblue'
    },
    input: {
        height: 40,
        margin: 12,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor:'#fff',
    },
    signLink: {
        marginTop:15,
        color:'#fff',
        marginBottom:80,
        textAlign:'right',
    },
    toSignUp :{
        fontWeight: 'bold',
        color: 'red',
    }
});