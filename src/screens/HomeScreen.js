import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import CustomButton from '../components/CustomButton';
import Modal from 'react-native-modal';
import CustomInput from '../components/CustomInput';
import {Colors, Typography} from '../styles';
const LogoText = () => {
  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: Colors.white,
    },
  };
  const logoItems = ['Optik', 'Form', 'Okuyucu'];
  return (
    <View style={styles.container}>
      {logoItems.map((item, index) => {
        return (
          <Text key={index} style={[styles.textStyle, Typography.Logo]}>
            {item}
          </Text>
        );
      })}
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleResultModal, setIsVisibleResultModal] = useState(false);

  return (
    <View style={styles.container}>
      <LogoText />
      <View style={styles.buttonView}>
        <CustomButton
          type="form"
          title="Form Tanımla"
          onPress={() => navigation.navigate('Form')}
        />
        <CustomButton
          type="scan"
          title="Tarama Yap"
          onPress={() => setIsVisible(true)}
        />
        <CustomButton
          type="result"
          title="Sonuç"
          onPress={() => setIsVisibleResultModal(true)}
        />
      </View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        onSwipeComplete={() => setIsVisible(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={styles.bottomHalfModalStyle}>
        <View style={styles.scanModalStyle}>
          <CustomButton title="Kamera ile Tara" />
          <CustomButton title="Dosyadan Tara" />
        </View>
      </Modal>
      <Modal
        isVisible={isVisibleResultModal}
        onBackdropPress={() => setIsVisibleResultModal(false)}
        onSwipeComplete={() => setIsVisibleResultModal(false)}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={styles.bottomHalfModalStyle}>
        <View style={styles.resultModalStyle}>
          <CustomInput
            title="Sınav Kodu"
            placeholder="Sınav Kodunu Giriniz..."
          />
          <CustomInput
            title="Öğrenci Numarası"
            placeholder="Öğrenci Numarası Giriniz..."
          />
          <CustomButton
            title="Sonuçları Göster"
            onPress={() => navigation.navigate('Result')}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  buttonView: {
    flex: 1,
  },

  resultModalStyle: {
    padding: 20,
    backgroundColor: Colors.white,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    justifyContent: 'center',
  },
  scanModalStyle: {
    height: 200,
    backgroundColor: Colors.white,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    justifyContent: 'center',
  },
  bottomHalfModalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default HomeScreen;
