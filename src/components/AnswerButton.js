import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class AnswerButton extends Component {
  state = {
    control: false,
  };
  onPressButton = () => {
    const {onPress} = this.props;
    this.setState({control: true});
    //onPress();

    console.log(this.state);
  };

  render() {
    const {answer, style} = this.props;
    const {control} = this.state;
    return (
      <TouchableOpacity style={style} onPress={() => this.onPressButton()}>
        <Text>{answer}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
  checkedOption: {
    width: 30,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'yellow',
  },
});
