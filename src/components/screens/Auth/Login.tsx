import React,{useState,useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

//Components Imports
import InputIcon from '../../shared/Form/Inputs/InputIcon';
import PasswordInput from '../../shared/Form/Inputs/PasswordInput';
import Button from '../../shared/Form/Buttons/Button';

import { AccountLogin } from '../../../utils/api/Auth';
import LoaderButton from '../../shared/Form/Buttons/LoaderButton';

const Login = ({ setCreateAccount,setForgetPassword}:any) => {
  const [state, setState] = useState({email:'',password:''})
  
  const [connected,setConnected] = useState(false)
  const [loading,setLoading] = useState(false)
  

  const handleSubmit = async()=>{
    if(state.email.length>3 && state.password.length>2){
      if(!state.email.includes('@')){
        Alert.alert("Email Error","Please Enter a valid email");
      }else{
        setLoading(true)
        const AccountDetail = await AccountLogin(state)
        if(AccountDetail){
          if(AccountDetail.error===null){
            AsyncStorage.setItem('@token',AccountDetail.token)
            const token: any = jwt_decode(AccountDetail.token);
            AsyncStorage.setItem('@user_',token)
          }else if(AccountDetail.message == 'invalid'){
            Alert.alert("Email Error","Email not exists. Please try again.");
          }else if(AccountDetail.error != null){
            console.log('error')
          }
        }
        setLoading(false)
      }
    }
  }

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
        value={state.email}
        onChangeText={(x:any)=> setState((prev) => ({
          ...prev,
          email: x,
        }))}
      />
      <PasswordInput
        source={require('../../../../assets/images/png/lock.png')}
        placeholder="Password"
        placeholderTextColor="gray"
        value={state.password}
        onChangeText={(x:any)=> setState((prev) => ({
          ...prev,
          password: x,
        }))}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=>{setCreateAccount(true)}}>
          <Text style={styles.text}>Create a new account.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setForgetPassword(true)}}>
          <Text style={styles.text}>Forget password.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section_2}>
        {!loading?<Button text={'LOGIN'} onPress={handleSubmit}/>:<LoaderButton/>}
      </View>
      <View>
      <Image
          style={styles.blob_2}
          source={require('../../../../assets/images/png/blobsm.png')}
        />
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
  blob_2:{
    height: 230,
    width: 300,
    alignSelf:"baseline",
    right: 0,
    justifyContent:'space-evenly',
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
