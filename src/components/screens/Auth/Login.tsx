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
import { useSelector,useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
//Components Imports
import InputIcon from '../../shared/Form/Inputs/InputIcon';
import PasswordInput from '../../shared/Form/Inputs/PasswordInput';
import Button from '../../shared/Form/Buttons/Button';

import { AccountLogin } from '../../../utils/api/Auth';
import { loginSuccess } from '../../../redux/actions/userActions/userActions';

import { userVerification } from '../../../functions/UserVerification'
import checkNetConnection from '../../../functions/CheckNetConnection'; 

const Login = ({navigation}:any) => {
  const [state, setState] = useState({email:'',password:''})
  const [connected,setConnected] = useState(false)

  const route = useRoute() 
  
  const userData = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch()

  const handleSubmit = async()=>{
    if(state.email.length>2 && state.password.length>2){
      if(!state.email.includes('@')){
        Alert.alert("Email Error","Please Enter a valid email");
      }
      const AccountDetail = await AccountLogin(state)
      if(AccountDetail){
        if(AccountDetail.error===null){
          AsyncStorage.setItem('@token',AccountDetail.token)
          const token: any = jwt_decode(AccountDetail.token);
          dispatch(loginSuccess(token, token.type));
        }else if(AccountDetail.message == 'invalid'){
          Alert.alert("Email Error","Email not exists. Please try again.");
        }else if(AccountDetail.error != null){
          console.log('error')
        }
      }
    }
  }

  useEffect(() => {
    checkNetConnection(setConnected,navigation,route)//connection check
    async function VerifyUser() {
      let token = await AsyncStorage.getItem('@token') || '';
      console.log(token)
      userVerification(token).then((r:any) => {
        //customer verification
        if (r?.isLoggedIn === true) {
          navigation.navigate('App', { screen: 'Dashboard' });
        }
      });
    }
    VerifyUser();
    console.log(connected)
  }, [])

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
        <TouchableOpacity>
          <Text style={styles.text}>Create a new account.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Forget password.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section_2}>
        <Button text={'LOGIN'} onPress={handleSubmit}/>
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
