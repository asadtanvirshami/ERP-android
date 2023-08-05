import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Header = ({goBack}: any) => {
  // 500: "#ED213A",
  // 700: "#93291E",
  return (
     <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../../assets/images/png/back.png')}
          />
        </TouchableOpacity>
      </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderBottomColor:'silver',
    borderBottomWidth:1,
    backgroundColor: 'white',
    padding: 9,

  },
  image: {
    height: 27,
    width: 27,
  },
});
