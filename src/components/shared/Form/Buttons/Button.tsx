import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({text}:any) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ED213A',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 48,
        paddingRight: 48,
        borderRadius: 8,
      },
      button_text: {
        color: 'white',
        fontSize: 16,
}});
