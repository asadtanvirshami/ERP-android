import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = (navigation:any) => {
  
  return (
    <> 
     <View style={{flexDirection:'row', backgroundColor:'red'}}>
        <TouchableOpacity style={{top:25,left:20}} onPress={()=>{navigation.goBack()}}>
        <Text>going</Text>
        </TouchableOpacity>
        <View style={{left:47}}>
        <Text>going</Text>
        </View>
    </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({})