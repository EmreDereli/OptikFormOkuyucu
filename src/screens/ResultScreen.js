import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Header from '../components/Header';

const CustomImageView = () => {
  const styles = {
    container: {
      backgroundColor: 'white',
      margin: 5,

      height: 250,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  };
  return (
    <View style={styles.container}>
      <Image />
    </View>
  );
};

const ResultCard = ({ad}) => {
  const styles = {
    container: {
      backgroundColor: 'white',
      flexDirection: 'row',
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    textStyle: {
      marginVertical: 10,
      marginHorizontal: 20,
      fontFamily: 'Product Sans Regular',
      fontSize: 16,
    },
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.textStyle}>Ad : {ad}</Text>
        <Text style={styles.textStyle}>Soyad :</Text>
        <Text style={styles.textStyle}>Numara : </Text>
        <Text style={styles.textStyle}>Sınav Kodu : </Text>
        <Text style={styles.textStyle}>Doğru : </Text>
        <Text style={styles.textStyle}>Yanlış : </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textStyle}>Seyfettin</Text>
        <Text style={styles.textStyle}>Yıldırım</Text>
        <Text style={styles.textStyle}>334321</Text>
        <Text style={styles.textStyle}>141123</Text>
        <Text style={styles.textStyle}>12</Text>
        <Text style={styles.textStyle}>12</Text>
      </View>
    </View>
  );
};

const ResultScreen = () => {
  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  };
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(6);
  }, [count]);

  return (
    <View style={styles.container}>
      <Header leftIconName="close" headerTitle="Sonuç" />
      <CustomImageView />
      <ResultCard ad={count} />
    </View>
  );
};

export default ResultScreen;
