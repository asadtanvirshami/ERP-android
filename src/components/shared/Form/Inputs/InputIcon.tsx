import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const InputIcon = ({
  placeholder,
  placeholderTextColor,
  keyboardType,
  source,
  value,
  onChangeText,
}: any) => {
  return (
    <View style={styles.inputContainer}>
      <Image style={styles.icon} source={source} />
      <TextInput
          value={value}
          onChangeText={onChangeText}
        style={styles.input}
        keyboardType={keyboardType}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
      icon: {
        height: 22,
        width: 22,
        left:5
      },
  input: {
    flex: 1,
    paddingVertical: 9,
    paddingLeft:12,
    color: '#000',
  },
});

export default InputIcon;
