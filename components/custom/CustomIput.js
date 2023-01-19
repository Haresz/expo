import * as React from 'react';
import { Text, View, TextInput, StyleSheet, Button, Image } from 'react-native';

const CustomInput = (props) => {
  return(
    <TextInput style={{backgroundColor:'grey', marginBottom:10, height:40, padding:30, flexDirection:'column'}}
    placeholder={props.caption} />
  )
}

export default CustomInput;