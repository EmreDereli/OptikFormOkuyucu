import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import AnswerButton from './AnswerButton';
import {Colors, Fonts} from '../styles';

export default class AnswerGroup extends Component {
  state = {
    selectedAnswer: '',
    answersArray: [],
  };

  _onPress = val => {
    const {getAnswer} = this.props;
    this.setState({selectedAnswer: val});

    getAnswer(val);
  };
  renderAnswerButtons = () => {
    const {checked} = this.props;
    const items = [
      {id: 1, title: 'A'},
      {id: 2, title: 'B'},
      {id: 3, title: 'C'},
      {id: 4, title: 'D'},
      {id: 5, title: 'E'},
    ];

    return items.map(item => {
      return (
        <TouchableOpacity
          style={
            checked === item.title
              ? styles.checkedOptionStyle
              : styles.optionStyle
          }
          onPress={() => this._onPress(item.title)}>
          <Text
            style={
              checked === item.title
                ? styles.checkedTextColor
                : styles.textStyle
            }>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return <View style={styles.container}>{this.renderAnswerButtons()}</View>;
  }
}

const styles = StyleSheet.create({
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
  checkedOptionStyle: {
    width: 30,
    height: 30,
    borderColor: '#007fff',
    borderWidth: 1,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#007fff',
  },
  checkedTextColor: {
    fontFamily: Fonts.ProductSansRegular,
    color: 'white',
  },
  textStyle: {
    fontFamily: Fonts.ProductSansRegular,
    color: 'black',
  },
});
