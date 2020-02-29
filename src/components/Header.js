import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {Typography, Colors} from '../styles';

const HeaderButton = ({buttontitle, iconName, onPress}) => {
  const styles = {
    buttonStyle: {
      margin: 15,
    },
  };
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      {iconName ? (
        <Icons name={iconName} size={20} color="white" />
      ) : (
        <Text>{buttontitle}</Text>
      )}
    </TouchableOpacity>
  );
};
const HeaderTitle = ({title}) => {
  const styles = {
    titleStyle: {
      color: Colors.white,
    },
  };
  return (
    <View>
      <Text style={[styles.titleStyle, Typography.ButtonText]}>{title}</Text>
    </View>
  );
};

const Header = ({
  leftIconName,
  rightIconName,
  headerTitle,
  leftButtonOnPress,
  rightButtonOnPress,
}) => {
  return (
    <View style={styles.container}>
      <HeaderButton iconName={leftIconName} onPress={leftButtonOnPress} />
      <HeaderTitle title={headerTitle} />
      <HeaderButton iconName={rightIconName} onPress={rightButtonOnPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: Colors.primary,
  },
});

export default Header;
