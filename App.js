import React from 'react';
import { StyleSheet, Text, TextInput, Image,
          View, TouchableOpacity } from 'react-native';
import Header from './Header';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'PT12352-mob',
      age: 2.5
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./img/con-cho.jpg')}
          style={{width: '100%', height: 300}}/>
        <Header tencuaban="something v2"/>
        <TextInput 
          onChangeText={(val) => this.setState({name: val})}
          style={{fontSize: 20, width: '100%'}} placeholder="Nhap Name vao trong nay"/>
        <Text style={{fontSize: 20}}>Tên: {this.state.name}</Text>
        <Text style={{fontSize: 20}}>Tuổi: {this.state.age}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
