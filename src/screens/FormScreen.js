import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';

const FormScreen = () => {
  return (
    <View>
      <Header
        leftIconName="close"
        headerTitle="Form Tanımla"
        rightIconName="check"
      />
      <CustomInput title="Form Adı" placeholder="Form Adını Giriniz" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FormScreen;
