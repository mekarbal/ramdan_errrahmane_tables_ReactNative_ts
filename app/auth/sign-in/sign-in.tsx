import React,{useEffect} from 'react';
import {
    ScrollView,StyleSheet,Text,View,
    TextInput,Button,Alert,TouchableOpacity,
    Image
} from 'react-native';
import { Auth } from '../../shared/models/auth.model'
import {AuthEnum} from '../../shared/enums/auth.enum';
import { auth } from 'react-native-firebase';
// const {logo} = require('../../../assets/logo.jpg') 
// import { RamadanController } from './controllers/ramadan-controller';

export function SignIn() {
    // let ramadanController = new  RamadanController();
    let authEnum = AuthEnum;
    
    const [email, onChangeEmail] = React.useState(""); 
    const [password, onChangePassword] = React.useState("");

    function add(){
        console.log('add pressed')
        let auth = new Auth();

        auth.email=email;
        auth.password=password;

        // ramadanController.Add(ramadan);
    }
    return (
        <ScrollView style={styles.container}>
            {/* <Text>  {authEnum.BOOKED}  {authEnum.FREE}</Text> */}
            {/* <Text> {(email === '') ? '' : 'Bonjour, Je suis : '+ email} </Text> */}

            {/* <Text> {(password === '') ? '' : 'Mon password est : '+ password} </Text> */}
            <Image source={require('../../../assets/logo.png')} style={{}} />
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
                onChangeText={onChangePassword}
                value={password}
            />
            <TouchableOpacity style={styles.btnSign}>
                <Button
                    color="#B50045"
                    title="SIGN IN"
                    onPress={() => {
                        Alert.alert('Sign in');
                        add()
                    }}
                />
            </TouchableOpacity>
            <Text style={styles.signLink}>Don't have an account yet? Sign Up</Text>
        </ScrollView>
    );
}

export function Test(){
    console.log('hola')
}

const styles = StyleSheet.create({
    container: {
        padding:30,
        borderRadius:40,
        minWidth:370,

    },
    input: {
        height: 40,
        margin: 12,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor:'#fff',

    },
    btnSign: {
        marginTop:10,
        marginBottom:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:30
    },
    signLink: {
        margin:30,
        color:'#fff',
    }
});