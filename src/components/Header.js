import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

const HeaderButton = ({buttontitle, iconName}) => {
  const styles = {
    buttonStyle: {
      margin: 15,
    },
  };
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      {iconName ? (
        <Icons name={iconName} size={20} color="white" />
      ) : (
        <Text>{buttontitle}</Text>
      )}
    </TouchableOpacity>
  );
};
const HeaderTitle = ({title}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Product Sans Regular',
          fontSize: 20,
          color: 'white',
        }}>
        {title}
      </Text>
    </View>
  );
};

const Header = ({leftIconName, rightIconName, headerTitle}) => {
  return (
    <View style={styles.container}>
      <HeaderButton iconName={leftIconName} />
      <HeaderTitle title={headerTitle} />
      <HeaderButton iconName={rightIconName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#2a2c41',
  },
});

export default Header;
