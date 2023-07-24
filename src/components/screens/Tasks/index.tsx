import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Tasks = ({navigation}:any) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Main")}}>
      <Text style={{color:'red'}}>Tasks</Text>
    </TouchableOpacity>
  )
}

export default Tasks

const styles = StyleSheet.create({})