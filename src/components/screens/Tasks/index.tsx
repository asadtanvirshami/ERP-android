import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useMMKVStorage } from "react-native-mmkv-storage";
import MMKV from '../../../functions/mmks';

type Props = {}

const Tasks = (props: Props) => {
  const [myInventory, setMyInventory] = useMMKVStorage("inventory", MMKV,[]);
  console.log(myInventory, 'inventory')
  // useEffect(() => {
  //   const two:any =[{id:"123"}]
    
  //   setMyInventory(two)
  // },[])
  
  return (
    <View>
      <Text>Tasks</Text>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({})