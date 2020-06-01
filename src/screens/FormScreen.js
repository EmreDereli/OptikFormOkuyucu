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
import {Fonts, Colors} from '../styles';
import {postAnswer} from '../utils/FetchDataFromApi';
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
            backgroundColor: Colors.primary,
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
        rightButtonOnPress={async () => {
          let answerData = answer.toString();
          let data = {
            examNo: formName,
            answerList: answerData.split(',').join(''),
          };

          await postAnswer(data);
        }}
        leftIconName="close"
        headerTitle="Form Tanımla"
        rightIconName="check"
      />
      <CustomInput
        keyboardType="number-pad"
        title="Soru Sayısı"
        placeholder="Soru Sayısı Giriniz"
        onChangeText={text => setCount(text)}
      />
      <CustomInput
        keyboardType="number-pad"
        title="Sınav Kodu"
        placeholder="Sınav Kodunu Giriniz"
        onChangeText={text => {
          setFormName(text);
        }}
      />
      <ScrollView>{renderForm()}</ScrollView>
    </View>
  );
};

export default FormScreen;
