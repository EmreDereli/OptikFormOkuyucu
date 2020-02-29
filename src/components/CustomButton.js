import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Typography, Colors} from '../styles';

const CustomButton = ({title, onPress, type}) => {
  let ICON_NAME;
  if (type === 'scan') {
    ICON_NAME = 'file-find';
  } else if (type === 'result') {
    ICON_NAME = 'poll';
  } else if (type === 'form') {
    ICON_NAME = 'file';
  }
  return (
    <TouchableOpacity
      style={[type ? styles.container : styles.noIconStyle, styles.shadow]}
      onPress={onPress}>
      {type ? (
        <View style={styles.iconView}>
          <Icons name={ICON_NAME} size={30} color={Colors.white} />
        </View>
      ) : null}

      <View>
        <Text style={[styles.titleStyle, Typography.ButtonText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.white,
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: Colors.primary,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 30,
  },
  noIconStyle: {
    borderWidth: 2,
    borderColor: Colors.white,
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    backgroundColor: Colors.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleStyle: {
    color: Colors.white,
  },
  iconView: {
    marginHorizontal: 30,
  },
});

export default CustomButton;
