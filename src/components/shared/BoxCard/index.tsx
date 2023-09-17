import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    navigation:any,
    route:string,
    title:string
}

const CardBox = ({navigation, route, title}: Props) => {
  return (
    <TouchableOpacity
    style={styles.mainScreens}
    onPress={() => navigation.navigate(route)}>
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.mainScreenText}>{title}</Text>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          alignSelf: 'center',
        }}></Text>
    </View>
    {/* <Text style={{color: 'white', lineHeight: 14}}>Tasks</Text> */}
  </TouchableOpacity>
  )
}

export default CardBox

const styles = StyleSheet.create({
    mainScreenText: {
        color: 'white',
        fontFamily: 'Inter-ExtraBold',
        // fontSize: 35,
        fontSize: 28,
      },
      mainScreens: {
        width: 130,
        height: 130,
        backgroundColor: '#db274b',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 7.68,
        elevation: 10,
      },
})