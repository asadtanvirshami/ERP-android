import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../shared/Header';
const Admin = ({navigation}:any) => {
  return (
    <View>
    <Header navigation={navigation} />
      <Text>admin</Text>
    </View>
  )
}

export default Admin

const styles = StyleSheet.create({})