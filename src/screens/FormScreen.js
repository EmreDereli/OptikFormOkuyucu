import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';

const FormOption = ({index}) => {
  const styles = {
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    optionStyle: {
      width: 30,
      height: 30,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 30 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
    },
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: 'black',
          borderRadius: 30 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        }}>
        <Text style={{color: 'white'}}>{index}</Text>
      </View>

      <TouchableOpacity style={styles.optionStyle}>
        <Text>A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionStyle}>
        <Text>B</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionStyle}>
        <Text>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionStyle}>
        <Text>D</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionStyle}>
        <Text>E</Text>
      </TouchableOpacity>
    </View>
  );
};

const FormScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {}, [count]);
  const renderForm = () => {
    let formList = [];
    console.log(count);
    for (var i = 0; i < count; i++) {
      formList.push(<FormOption index={i + 1} />);
    }
    return formList;
  };
  return (
    <View style={{flex: 1}}>
      <Header
        leftButtonOnPress={() => navigation.goBack()}
        leftIconName="close"
        headerTitle="Form Tanımla"
        rightIconName="check"
      />
      <CustomInput
        title="Soru Sayısı"
        placeholder="Soru Sayısı Giriniz"
        onChangeText={text => setCount(text)}
      />
      <CustomInput title="Form Adı" placeholder="Form Adını Giriniz" />
      <ScrollView>{renderForm()}</ScrollView>
    </View>
  );
};

export default FormScreen;
