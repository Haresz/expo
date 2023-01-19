import * as React from 'react';
import { Text, View, TextInput, StyleSheet, Button , Image, TouchableOpacity } from 'react-native';

import ButtonCustom from '../custom/ButtonCustom'

const LoginScreen = ({ navigation }) =>{
  
  const regHandler = () => {
    navigation.navigate('RegistrasiScreen')
  }

  // const logHandler = () => {
  //   navigation.navigate('Dasboard')

  // }
  return(
    <View style={{backgroundColor:'white', flex:1}}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../asset/snack-icon.png')} />
      </View>
      <View>
        <Text style={{marginLeft:30,fontSize:16, fontWeight:'bold'}}>Username</Text>
        <TextInput style={{borderRadius:10, backgroundColor:'white', border:'1px solid', padding:8, margin:20}}>
        </TextInput>
        <Text style={{marginLeft:30,fontSize:16, fontWeight:'bold'}}>Password</Text>
        <TextInput style={{borderRadius:10, backgroundColor:'white', border:'1px solid', padding:8, margin:20}}>
        </TextInput>
      </View>
      <Text style={{textAlign:'right', marginRight:30, fontWeight:'bold', fontSize:14, color:'grey' }}>
      Forgot Password?</Text>
      <TouchableOpacity 
      onPress={regHandler}
      style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text 
      style={{textAlign:'center', fontSize:14, color:'grey',}}>
      Don't have an account? 
        <Text
        onPress={regHandler}
        style={{marginLeft:5, fontWeight:'bold'}}
        >Sign up
        </Text>
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 80,
  },
  logo: {
    height: 128,
    width: 128,
  },
button: {
    marginTop: 20,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16,
    backgroundColor: '#4B9BB7',
    height: 45,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 12,
    letterSpacing: 2,
  },
});

export default LoginScreen;