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
import AnswerButton from '../components/AnswerButton';
import AnswerGroup from '../components/AnswerGroup';
import {Fonts} from '../styles';
// const AnswerButton = ({onPress, answer}) => {
//   const styles = {
//     optionStyle: {
//       width: 30,
//       height: 30,
//       borderColor: 'black',
//       borderWidth: 1,
//       borderRadius: 30 / 2,
//       justifyContent: 'center',
//       alignItems: 'center',
//       margin: 5,
//     },
//   };

//   const onPressButton = () => {
//     onPress();
//     control = true;
//   };

//   return (
//     <TouchableOpacity
//       style={styles.optionStyle}
//       onPress={() => onPressButton()}>
//       <Text>{answer}</Text>
//     </TouchableOpacity>
//   );
// };

const FormScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [formName, setFormName] = useState('');

  const [answer, setAnswer] = useState([]);
  let dizi = [];
  useEffect(() => {}, [count]);

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
            fontFamily: Fonts.ProductSansRegular,
          }}>
          <Text style={{color: 'white'}}>{index}</Text>
        </View>

        <AnswerGroup
          checked={answer[index]}
          getAnswer={val => {
            let newArr = [...answer];
            newArr[index] = val;
            setAnswer(newArr);
          }}
        />
      </View>
    );
  };

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
      <CustomInput
        title="Form Adı"
        placeholder="Form Adını Giriniz"
        onChangeText={text => {
          setFormName(text);
        }}
      />
      <ScrollView>{renderForm()}</ScrollView>
    </View>
  );
};

export default FormScreen;
