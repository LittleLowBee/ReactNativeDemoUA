/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MainScreen from './app/MainScreen' //主界面
import LoginScreen from './app/LoginScreen' // 登录界面

export default class App extends Component<{}> {

  render() {
      //return <MainScreen/> // 主页面
      return <LoginScreen/> // 登录页面
  }
}

