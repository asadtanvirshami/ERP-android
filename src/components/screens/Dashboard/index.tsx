import {StyleSheet, BackHandler} from 'react-native';
import React, {useEffect} from 'react';

//Components
import Agent from './Agent/Agent';
import Admin from './Admin/Admin';
//Redux

const Dashboard = ({navigation}: any) => {
 



  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <>
    <Admin navigation={navigation} />
      {/* {type == 'admin' && (
        <>
          <Admin navigation={navigation} />
        </>
      )}
      {type == 'agent' && (
        <>
          <Agent />
        </>
      )} */}
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
