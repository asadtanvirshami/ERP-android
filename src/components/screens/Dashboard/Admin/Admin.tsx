import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

import TopSection from '../../../shared/DashboardLayout/TopSection'

const Admin = ({navigation}:any) => {
  return (
    <View style={styles.container}>
        <TopSection/>
        <View>
          
        </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Task")}>
      <Text style={{color:'black', fontSize:22}} >Task</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Admin

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  }
})