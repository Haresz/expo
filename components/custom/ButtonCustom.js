import * as React from 'react';
import { View, Button } from 'react-native';

const ButtonCustom = (props) => {
  return (
    <View style={{padding:props.pd, backgroundColor:props.bg, margin:props.margin, borderRadius:props.br}}>
    <Button title={props.title} color={props.color} />
    </View>
  )
}

export default ButtonCustom;