import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {Typography, Colors} from '../styles/index.js';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000);
  });

  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 30,
    },
    logoSmall: {
      fontSize: 14,
      fontFamily: 'Product Sans Regular',
      color: 'white',
    },
    logoTextStyle: {
      color: Colors.white,
    },
    bottomView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={[Typography.Logo, styles.logoTextStyle]}>Optik</Text>
        <Text style={[Typography.Logo, styles.logoTextStyle]}>Form</Text>
        <Text style={[Typography.Logo, styles.logoTextStyle]}>Okuyucu</Text>
      </View>
      <LottieView
        source={require('../../scanner.json')}
        style={{width: 200, height: 200}}
        autoPlay
        loop
      />
      <View style={styles.bottomView}>
        <Text style={styles.logoSmall}>Aragonit</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
