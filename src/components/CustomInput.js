import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const CustomInput = ({
  title,
  placeholder,
  onChangeText,
  value,
  keyboardType,
}) => {
  const _onChangeText = text => {
    onChangeText(text);
  };
  const styles = {
    container: {
      marginHorizontal: 30,
      marginVertical: 10,
      borderColor: '#2a2c41',
      borderBottomWidth: 1,
    },
    titleTextStyle: {
      fontSize: 10,
      fontFamily: 'Product Sans Regular',
      color: '#2a2c41',
    },
    inputStyle: {
      fontFamily: 'Product Sans Regular',
    },
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{title}</Text>
      <TextInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={text => _onChangeText(text)}
        placeholder={placeholder}
        placeholderTextColor="#2a2c41"
        style={styles.inputStyle}
      />
    </View>
  );
};

export default CustomInput;
