import {StyleSheet} from 'react-native';
import React, {useState} from 'react';

import Login from './Login';
import SignUp from './SignUp';
import ForgetPassword from './ForgetPassword';

const Auth = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);

  return (
    <>
     {createAccount && !forgetPassword ? (
        <SignUp setCreateAccount={setCreateAccount} />
      ) : (
        forgetPassword ? (
          <ForgetPassword setForgetPassword={setForgetPassword} />
        ) : (
          <Login setCreateAccount={setCreateAccount} setForgetPassword={setForgetPassword} />
        ) 
      )}
    </>
  );
};

export default Auth;

const styles = StyleSheet.create({});
