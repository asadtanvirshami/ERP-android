import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React,{useState} from 'react';

const PasswordInput = ({
  placeholder,
  placeholderTextColor,
  source,
  value,
  onChangeText,
}: any) => {
  const [hide, setHide] =  useState(false)
  return (
    <View style={styles.inputContainer}>
      <Image style={styles.icon} source={source} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={hide ? false : true}
      />
      <TouchableOpacity onPress={()=>{setHide((prev:any) => !prev)}} style={styles.eyeIconContainer}>
        <Image
          style={styles.eye}
          source={require('../../../../../assets/images/png/eyelock.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  eye: {
    height: 20,
    width: 20,
    position: 'absolute',
  },
  icon: {},
  inputContainer: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: 300,
    backgroundColor: 'white',
    height: 47,
    padding: 5,
    paddingRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#2b2b2a',
  },
  eyeIconContainer: {
    padding: 10,
  },
});
