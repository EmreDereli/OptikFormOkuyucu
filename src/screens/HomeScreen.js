import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, Alert, Keyboard} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Modal from 'react-native-modal';
import {Colors, Typography} from '../styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ImagePicker from 'react-native-image-picker';
import {getStudents, postImage} from '../utils/FetchDataFromApi';
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

const openCamera = () => {
  const options = {
    title: 'Resim Seç',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchCamera(options, response => {
    // Same code as in above section!
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = {uri: response.uri};

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };

      console.log(response.data);
      const r = postImage(response.data);
      console.log(r);
      // this.setState({
      //   avatarSource: source,
      // });
    }
  });
};
const openGallery = () => {
  const options = {
    title: 'Resim Seç',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchImageLibrary(options, response => {
    // Same code as in above section!
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = {uri: response.uri};

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      // setAvatar(source);
      console.log(response.data);
      const r = postImage(response.data);
      console.log(r);
      // this.setState({
      //   avatarSource: source,
      // });
    }
  });
};

const HomeScreen = ({navigation}) => {
  const [avatar, setAvatar] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleResultModal, setIsVisibleResultModal] = useState(false);
  // useEffect(() => {
  //   const response = getStudents();
  //   response.then(r => {
  //     console.log('namee:', r);
  //   });
  // }, []);
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
        animationInTiming={2000}
        swipeDirection={['down']}
        style={styles.bottomHalfModalStyle}>
        <View style={styles.scanModalStyle}>
          <View
            style={{
              width: 40,
              height: 2,
              backgroundColor: Colors.primary,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              marginTop: 5,
              marginBottom: 20,
              width: 20,
              height: 2,
              backgroundColor: Colors.primary,
              alignSelf: 'center',
            }}
          />
          <CustomButton onPress={openCamera} title="Kamera ile Tara" />
          <CustomButton onPress={openGallery} title="Dosyadan Tara" />
        </View>
      </Modal>
      <Modal
        isVisible={isVisibleResultModal}
        onBackdropPress={() => setIsVisibleResultModal(false)}
        onSwipeComplete={() => setIsVisibleResultModal(false)}
        swipeDirection={['down']}
        style={styles.bottomHalfModalStyle}>
        <View style={styles.resultModalStyle}>
          <View
            style={{
              width: 40,
              height: 2,
              backgroundColor: Colors.primary,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              marginTop: 5,
              marginBottom: 20,
              width: 20,
              height: 2,
              backgroundColor: Colors.primary,
              alignSelf: 'center',
            }}
          />
          <Formik
            initialValues={{examNo: '', studentNo: ''}}
            onSubmit={values => {
              Alert.alert(JSON.stringify(values));
              Keyboard.dismiss();
            }}
            validationSchema={Yup.object().shape({
              examNo: Yup.number()
                .min(100000, '**Sınav Numarası 6 haneli bir sayı olmalıdır')
                .max(999999, '**Sınav Numarası 6 haneli bir sayı olmalıdır')

                .required('Zorunlu Alan'),
              studentNo: Yup.number()
                .min(100000, '**Öğrenci Numarası 6 haneli bir sayı olmalıdır')
                .max(999999, '**Öğrenci Numarası 6 haneli bir sayı olmalıdır')
                .required('Zorunlu Alan'),
            })}>
            {({handleChange, handleSubmit, values, errors, isValid}) => (
              <View>
                <CustomInput
                  onChangeText={handleChange('examNo')}
                  value={values.examNo}
                  title="Sınav Kodu"
                  placeholder="Sınav Kodunu Giriniz..."
                />
                {errors.examNo ? (
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 10,
                      marginHorizontal: 30,
                      marginBottom: 10,
                    }}>
                    {errors.examNo}
                  </Text>
                ) : null}

                <CustomInput
                  onChangeText={handleChange('studentNo')}
                  value={values.studentNo}
                  title="Öğrenci Numarası"
                  placeholder="Öğrenci Numarası Giriniz..."
                />
                {errors.studentNo ? (
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 10,
                      marginHorizontal: 30,
                      marginBottom: 10,
                    }}>
                    {errors.studentNo}
                  </Text>
                ) : null}
                <CustomButton
                  disabled={!isValid}
                  title="Sonuçları Göster"
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
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
    height: 250,
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
