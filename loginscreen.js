import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

export default class App loginscreen extends Component {
  render() {
      return (
          <View style={styles.container}>
              <Text>login in</Text>
              <button onPress = {

               () =>
               this/setRecoveryProps.navigation.navigate('about')

              }
              title="press"></button>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});