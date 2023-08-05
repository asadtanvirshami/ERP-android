import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';

const TopSection = () => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginTop: 10, padding: 8}}>
          <Text style={{fontSize:18, color:'black'}}>Welcome,</Text>
          <Text style={styles.heading}>{user?.name.toUpperCase('0')}</Text>
          <Text style={styles.sub_heading}>
            {user?.companyName.toUpperCase('0')} -
            <Text style={{fontSize: 19}}> {user?.designation}</Text>
          </Text>
          <Text style={{color: 'gray'}}>{user?.email}</Text>
        </View>
        <View style={styles.image_view}>
          <View style={styles.avatar_section}>
            <Text style={styles.avatar_char}>
              {user?.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopSection;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: 'white',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 5,
    paddingRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image_view: {
    marginTop: 10,
    flex: 0.9,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  avatar_section: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#db274b', // You can set your desired background color here
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar_char: {
    fontSize: 34,
    fontWeight: '600',
    color: 'white',
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  sub_heading: {
    color: 'black',
    fontSize: 17,
    marginTop:8
  },
});
