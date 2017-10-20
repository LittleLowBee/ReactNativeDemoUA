/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '首页',
    };
    render() {
        return (
            <View>
              <Text>来啊，快活呀!</Text>
            </View>
        );
    }
}

export const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen }
});

export default class App extends Component<{}> {

  render() {
    return (<SimpleApp/>);
  }
}
