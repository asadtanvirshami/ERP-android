import {StyleSheet, BackHandler} from 'react-native';
import React, {useEffect} from 'react';

//Components
import Agent from './Agent/Agent';
import Admin from './Admin/Admin';
//Redux
import {useSelector} from 'react-redux';

const Dashboard = ({navigation}: any) => {
  const type = useSelector((state: any) => state.user.user.type);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <>
      {type == 'admin' && (
        <>
          <Admin navigation={navigation} />
        </>
      )}
      {type == 'agent' && (
        <>
          <Agent />
        </>
      )}
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
