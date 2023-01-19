import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {

  const backHandler = () => {
    navigation.goBack()
    alert('BERHASIL CUY')
  }

  return (
    <View style={{backgroundColor:'whitte', flex:'1', padding:8}}>
      <View>
        <Text style={{ fontWeight:'bold', textAlign:'center', marginTop:100, fontSize:16}}>Sign Up</Text>
        <TextInput 
        placeholder="Full Name"
        style={{ borderRadius:10, backgroundColor:'white', border:'1px solid', padding:8, marginTop:10 }}>
        </TextInput>
        <TextInput 
        placeholder="Username"
        style={{ borderRadius:10, backgroundColor:'white', border:'1px solid', padding:8,marginTop :10 }}>
        </TextInput>
        <TextInput 
        placeholder="Password"
        style={{ borderRadius:10, backgroundColor:'white', border:'1px solid', padding:8, marginTop :10 }}>
        </TextInput>
        <TextInput 
        placeholder="Confirm Password"
        style={{ borderRadius:10, backgroundColor:'white', border:'1px solid', padding:8, marginTop :10 }}>
        </TextInput>
      </View>
      <View>
      <TouchableOpacity 
      onPress={backHandler}
      style={styles.button}>
      <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
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

export default RegisterScreen;