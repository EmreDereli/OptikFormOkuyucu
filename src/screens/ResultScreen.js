import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import Header from '../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import {Fonts} from '../styles';

const CustomImageView = ({url}) => {
  const styles = {
    container: {
      backgroundColor: 'white',
      margin: 5,
      width: Dimensions.get('window').width - 10,
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
      <Image
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'contain',
        }}
        source={{uri: url}}
      />
    </View>
  );
};
const AnswerView = ({studentAnswer, examAnswer}) => {
  const styles = {
    container: {
      backgroundColor: 'white',
      padding: 10,
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
  let dizi = [];
  let indexler = [];
  for (let index = 0; index < examAnswer.length; index++) {
    if (examAnswer[index] === studentAnswer[index]) {
      let a = index + 1 + '' + studentAnswer[index].toUpperCase();
      const element = (
        <Text
          style={{
            margin: 5,
            color: 'green',
            fontFamily: Fonts.ProductSansRegular,
          }}>
          {a}
        </Text>
      );
      const elementIndex = (
        <Text
          style={{
            margin: 5,
            color: 'green',
            fontFamily: Fonts.ProductSansRegular,
          }}>
          {index + 1 + '' + examAnswer[index]}
        </Text>
      );
      indexler.push(elementIndex);
      dizi.push(element);
      console.log(dizi);
    } else if (studentAnswer[index] === 'X') {
      let a = index + 1 + '' + studentAnswer[index].toUpperCase();
      const element = (
        <Text
          style={{
            margin: 5,
            color: 'red',
            fontFamily: Fonts.ProductSansRegular,
          }}>
          {a}
        </Text>
      );
      const elementIndex = (
        <Text
          style={{
            margin: 5,
            color: 'green',
            fontFamily: Fonts.ProductSansRegular,
          }}>
          {index + 1 + '' + examAnswer[index]}
        </Text>
      );
      indexler.push(elementIndex);
      dizi.push(element);
      console.log(dizi);
    } else if (studentAnswer[index] === '_') {
      let a = index + 1 + '-';
      const element = (
        <Text
          style={{
            margin: 5,
            color: 'red',
            fontFamily: Fonts.ProductSansRegular,
          }}>
          {a}
        </Text>
      );
      const elementIndex = (
        <Text
          style={{
            margin: 5,
            color: 'green',
            fontFamily: Fonts.ProductSansRegular,
          }}>
          {index + 1 + '' + examAnswer[index]}
        </Text>
      );
      indexler.push(elementIndex);
      dizi.push(element);
      console.log(dizi);
    } else {
      let a = index + 1 + '' + studentAnswer[index].toUpperCase();
      const element = (
        <Text
          style={{
            margin: 5,
            color: 'red',
            fontFamily: Fonts.ProductSansRegular,
          }}>
          {a}
        </Text>
      );
      const elementIndex = (
        <Text
          style={{
            margin: 5,
            color: 'green',
            fontFamily: Fonts.ProductSansRegular,
          }}>
          {index + 1 + '' + examAnswer[index]}
        </Text>
      );
      indexler.push(elementIndex);
      dizi.push(element);
      console.log(dizi);
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontFamily: Fonts.ProductSansRegular}}>
          Cevap Anahtarı:
        </Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {indexler}
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{fontFamily: Fonts.ProductSansRegular}}>
          Öğrenci Cevapları:
        </Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {dizi}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};
const ResultCard = ({ad, soyad, ogrNo, examNo, correctAnswer, wrongAnswer}) => {
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
        <Text style={styles.textStyle}>Ad :</Text>
        <Text style={styles.textStyle}>Soyad :</Text>
        <Text style={styles.textStyle}>Numara : </Text>
        <Text style={styles.textStyle}>Sınav Kodu : </Text>
        <Text style={styles.textStyle}>Doğru : </Text>
        <Text style={styles.textStyle}>Yanlış : </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textStyle}>{ad}</Text>
        <Text style={styles.textStyle}>{soyad}</Text>
        <Text style={styles.textStyle}>{ogrNo}</Text>
        <Text style={styles.textStyle}>{examNo}</Text>
        <Text style={styles.textStyle}>{correctAnswer}</Text>
        <Text style={styles.textStyle}>{wrongAnswer}</Text>
      </View>
    </View>
  );
};

const ResultScreen = ({route, navigation}) => {
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
  const {data} = route.params;
  console.log('DATA : ', data[0].exams.examURL);
  return (
    <View style={styles.container}>
      <Header
        leftIconName="close"
        headerTitle="Sonuç"
        leftButtonOnPress={() => navigation.goBack()}
      />
      <ScrollView>
        <CustomImageView url={data[0].exams.examURL} />
        <ResultCard
          ad={data[0].student.name}
          soyad={data[0].student.surname}
          ogrNo={data[0].student.no}
          correctAnswer={data[0].exams.correctAnswer}
          wrongAnswer={data[0].exams.wrongAnswer}
          examNo={data[0].exams.examNo}
        />
        <AnswerView
          studentAnswer={data[0].exams.studentAnswer}
          examAnswer={data[0].exams.examAnswers.examAnswer}
        />
      </ScrollView>
    </View>
  );
};

export default ResultScreen;
