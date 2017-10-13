/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      //  容器
      <View style={styles.container}>
        <Text style={styles.welcome}>
          江山看不尽,最美镜中人
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //  容器
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
      backgroundColor:'#EEEEEE',
  },
  //  欢迎文字
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },


});
