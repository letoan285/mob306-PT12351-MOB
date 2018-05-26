import React from 'react';
import { StyleSheet, Text, TextInput,
          View, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props.tencuaban = 'header thay doi noi dung cua prop tencuaban';
  }

  render() {
    return (
      <View>
        <Text>{this.props.tencuaban}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
