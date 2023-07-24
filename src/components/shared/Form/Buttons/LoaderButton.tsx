import {StyleSheet, Text, TouchableOpacity,  ActivityIndicator} from 'react-native';
import React from 'react';

const LoaderButton = () => {
  return (
    <TouchableOpacity disabled={true} style={styles.button}>
      <ActivityIndicator size={24} color={'white'}  />
    </TouchableOpacity>
  );
};

export default LoaderButton;

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
     });
