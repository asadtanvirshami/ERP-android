import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
//Components Imports
import InputIcon from '../../shared/Form/Inputs/InputIcon';
import PasswordInput from '../../shared/Form/Inputs/PasswordInput';
import Button from '../../shared/Form/Buttons/Button';

const Login = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../../assets/images/png/bg.png')}
      style={styles.container}>
      <View>
        <Image
          style={styles.blob}
          source={require('../../../../assets/images/png/blob.png')}
        />
      </View>
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.small}>Please login to continue.</Text>
      <InputIcon
        source={require('../../../../assets/images/png/email.png')}
        placeholder="Email"
        placeholderTextColor="gray"
      />
      <PasswordInput
        source={require('../../../../assets/images/png/lock.png')}
        placeholder="Password"
        placeholderTextColor="gray"
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Text style={styles.text}>Create a new account.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Forget password.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section_2}>
        <Button text={'LOGIN'} />
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blob: {
    height: 300,
    width: 300,
    top: -200,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },

  heading: {
    color: 'black',
    fontSize: 35,
    fontWeight: '800',
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat-MediumItalic',
    left: 45,
  },
  small: {
    color: 'black',
    fontSize: 14,
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat-MediumItalic',
    left: 45,
    marginBottom: 40,
  },
  text: {
    color: 'black',
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginRight: 20,
    marginLeft: 20,
  },
  section_2: {margin: 30},
});
