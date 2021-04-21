import React,{useEffect} from 'react';
import {
    ScrollView,StyleSheet,Text,
    TextInput,Alert,
    Image,Linking
} from 'react-native';
import { Auth } from '../../shared/models/auth.model'
import {AuthEnum} from '../../shared/enums/auth.enum';
import { auth } from 'react-native-firebase';
import ButtonShared from '../../shared/components/ButtonShared';
// import { RamadanController } from './controllers/ramadan-controller';

export function SignIn(props:any) {
    // let ramadanController = new  RamadanController();
    // let authEnum = AuthEnum;
    
    const [email, onChangeEmail] = React.useState(""); 
    const [password, onChangePassword] = React.useState("");

    function add(){
        console.log('add pressed')
        let auth = new Auth();

        auth.email=email;
        auth.password=password;

        // ramadanController.Add(ramadan);
    }
    function navigateToSignUp() {
        props.navigation.navigate('Sign up')
    }

    function navigateToHome() {
        props.navigation.navigate('Home')
    }
    return (
        <ScrollView style={styles.container}>
            {/* <Text>  {authEnum.BOOKED}  {authEnum.FREE}</Text> */}
            {/* <Text> {(email === '') ? '' : 'Bonjour, Je suis : '+ email} </Text> */}

            {/* <Text> {(password === '') ? '' : 'Mon password est : '+ password} </Text> */}
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
                onPress={() => navigateToHome()}
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