import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import TopSection from '../../../shared/DashboardLayout/TopSection';
import CardBox from '../../../shared/BoxCard';

const Admin = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TopSection />
      <View style={styles.section}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 40,
          }}>
          <CardBox title="Tasks" route="Task" navigation={navigation} />
          <CardBox title="Sales" route="Task" navigation={navigation} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
          }}>
          <CardBox title="Settings" route="Task" navigation={navigation} />
          <CardBox title="Profile" route="Task" navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    flex: 0.1,
  },
});
