import { StyleSheet, Text, View,BackHandler } from 'react-native'
import React,{useLayoutEffect,useState,useEffect} from 'react'
import { useRoute} from '@react-navigation/native';

import checkNetConnection from '../../../functions/CheckNetConnection'
import Header from '../../shared/Header';

const Dashboard = ({navigation}:any) => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
      }, []);
      
  return (
    <>
      <Text onPress={()=>{navigation.navigate("Admin")}}>TExt</Text>
    </>
  )
}

export default Dashboard

const styles = StyleSheet.create({})