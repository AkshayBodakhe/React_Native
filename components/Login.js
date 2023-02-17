import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     
     const navigation = useNavigation();

     const saveEmailPass = async () => {
        try{
            await AsyncStorage.setItem('EMAIL',email);
            await AsyncStorage.setItem('PASSWORD',password);
            navigation.navigate('Contacts');
        }catch(e){
            console.log(e);
        }
       
     }

  return (
    <View style={{flex:1}}>
      <Text style={styles.text}>Login</Text>
      <TextInput placeholder='Enter Email Id' style={styles.input} value={email} onChangeText={text => setEmail(text)}/>
      <TextInput placeholder='Enter Password' style={styles.input} value={password} onChangeText={text => setPassword(text)}/>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>saveEmailPass()}>
        <Text style={{color:'#fff'}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({

    text : {
        alignSelf : 'center',
        fontSize : 20,
        marginTop : 100,
        fontWeight : '600'
    },
    input : {
        width : '90%',
        height : 50,
        borderWidth : 0.2,
        alignSelf : 'center',
        marginTop : 50,
        borderRadius : 10,
        paddingLeft : 20
    },
    loginBtn : {
        backgroundColor : '#000',
        height : 50,
        borderRadius : 20,
        alignSelf : 'center',
        width : '90%',
        marginTop : 30,
        alignItems : 'center',
        justifyContent : 'center'
    }
})