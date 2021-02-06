import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen'

export default class App extends React.Component () {
  render() {
    return(
     <View>
       <HomeScreen/>
       </View>
    )
  }
}