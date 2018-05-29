import React from 'react';
import { StyleSheet, Text, TextInput, Image,
          View, TouchableOpacity } from 'react-native';


const resizeMode = 'center';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <Image source={require('./img/logo.jpg')} style={styles.bgImage}>

      </Image>
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
  bgImage: {
    backgroundColor: '#ccc',
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  }
  
});
