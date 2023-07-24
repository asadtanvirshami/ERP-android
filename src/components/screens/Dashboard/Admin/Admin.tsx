import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../../../shared/Header';

const Admin = ({navigation}:any) => {
  return (
    <View>
      <Text style={{color:'black'}}>admin</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Task")}>
      <Text style={{color:'black', fontSize:22}} >Task</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Admin

const styles = StyleSheet.create({})