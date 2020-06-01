import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Fonts, Colors} from '../styles';
import Header from '../components/Header';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
const Card = ({ad, soyad, ogrNo, correctAnswer, wrongAnswer, net}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 7,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{padding: 5, fontFamily: Fonts.ProductSansRegular}}>
            Öğr No : {ogrNo}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{padding: 5, fontFamily: Fonts.ProductSansRegular}}>
            {ad}
          </Text>
          <Text style={{padding: 5, fontFamily: Fonts.ProductSansRegular}}>
            {soyad}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{alignItems: 'center', paddingHorizontal: 10}}>
            <Text
              style={{
                padding: 5,
                color: '#007f3f',
                fontFamily: Fonts.ProductSansRegular,
              }}>
              Doğru
            </Text>
            <Text
              style={{
                padding: 5,
                color: '#007f3f',
                fontFamily: Fonts.ProductSansRegular,
              }}>
              {correctAnswer}
            </Text>
          </View>

          <View style={{alignItems: 'center', paddingHorizontal: 10}}>
            <Text
              style={{
                padding: 5,

                color: 'crimson',
                fontFamily: Fonts.ProductSansRegular,
              }}>
              Yanlış
            </Text>
            <Text
              style={{
                padding: 5,
                color: 'crimson',
                fontFamily: Fonts.ProductSansRegular,
              }}>
              {wrongAnswer}
            </Text>
          </View>
          {net !== undefined ? (
            <View style={{alignItems: 'center', paddingHorizontal: 10}}>
              <Text
                style={{
                  padding: 5,
                  color: '#007fff',
                  fontFamily: Fonts.ProductSansRegular,
                }}>
                Net
              </Text>
              <Text
                style={{
                  padding: 5,
                  color: '#007fff',
                  fontFamily: Fonts.ProductSansRegular,
                }}>
                {net}
              </Text>
            </View>
          ) : null}
        </View>

        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              padding: 5,

              fontFamily: Fonts.ProductSansRegular,
            }}>
            Net :
          </Text>
          <Text style={{padding: 5}}>15</Text>
        </View> */}
      </View>
    </View>
  );
};
const AllResultScreen = ({route, navigation}) => {
  const {data} = route.params;
  console.log('DATA', data);
  const [showNet, setShowNet] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header headerTitle="Tüm Sonuçlar" />
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            margin: 10,

            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.primary,
            padding: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          onPress={() => setShowNet(!showNet)}>
          <Text style={{color: 'white', fontFamily: Fonts.ProductSansRegular}}>
            {showNet ? 'Netleri Gizle' : 'Netleri Göster'}
          </Text>
        </TouchableOpacity>

        {showNet ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 5,
              marginBottom: 10,
            }}>
            <Icons name="info-circle" color="crimson" size={20} />
            <Text
              style={{
                color: 'crimson',
                fontFamily: Fonts.ProductSansRegular,
                marginHorizontal: 10,
                fontSize: 12,
              }}>
              Netler 4 yanlış 1 doğruyu götürecek şekilde hesaplanmıştır.
            </Text>
          </View>
        ) : null}

        {showNet
          ? data.map(item => {
              const net = item.correctAnswer - item.wrongAnswer / 4;
              return (
                <Card
                  ad={item.name}
                  soyad={item.surname}
                  ogrNo={item.studentNo}
                  correctAnswer={item.correctAnswer}
                  wrongAnswer={item.wrongAnswer}
                  net={net}
                />
              );
            })
          : data.map(item => {
              return (
                <Card
                  ad={item.name}
                  soyad={item.surname}
                  ogrNo={item.studentNo}
                  correctAnswer={item.correctAnswer}
                  wrongAnswer={item.wrongAnswer}
                />
              );
            })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AllResultScreen;
