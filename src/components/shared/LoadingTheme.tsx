import React,{useState,useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Loader = () => {

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../assets/images/png/bg.png')}
      style={styles.container}>
      <View>
        <Image
          style={styles.blob}
          source={require('../../../assets/images/png/blob.png')}
        />
      </View>
      <Text style={styles.heading}>Loading</Text>
      <Text style={styles.small}>Please wait.</Text>
      <View>
      <Image
          style={styles.blob_2}
          source={require('../../../assets/images/png/blobsm.png')}
        />
      </View>
    </ImageBackground>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blob: {
    height: 300,
    width: 300,
    top: -200,
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  blob_2:{
    height: 360,
    width: 340,
    bottom: -276,
    right: 0,
    position: 'absolute', 
  },
  heading: {
    color: 'black',
    fontSize: 35,
    fontWeight: '800',
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat-MediumItalic',
    left: 45,
  },
  small: {
    color: 'black',
    fontSize: 14,
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat-MediumItalic',
    left: 45,
    marginBottom: 40,
  },
  text: {
    color: 'black',
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginRight: 20,
    marginLeft: 20,
  },
  section_2: {margin: 30},
});
