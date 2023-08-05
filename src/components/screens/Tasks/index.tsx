import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

import Header from '../../shared/Header'

const Tasks = ({navigation:{goBack}}:any) => {
  return (
    <>
    <Header goBack={goBack}/>
    <View style={styles.container}>
        <View>

        </View>
    </View>
    </>
  )
}

export default Tasks

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  }
})