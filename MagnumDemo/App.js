/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 引入RN库
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// 底部
import
  Tabbar
 from 'react-native-tabbar-bottom';

// 引入其他页面
// import HomeScreen from './app/HomeScreen';
// import ChatScreen from './app/ChatScreen';
// import ProfileScreen from './app/ProfileScreen';
// import SearchScreen from './app/SearchScreen';
// import NotificationScreen from './app/NotificationScreen';


export default class App extends Component<{}> {

  constructor() {
    super()
    this.state = {
      page:"HomeScreen",
    }
  }

  render() {
    return (
        <View style={styles.container}>

            {this.state.page === "HomeScreen" && <Text>Screen1</Text>}
            {this.state.page === "ChatScreen" && <Text>Screen2</Text>}

            <Tabbar
                stateFunc={(tab) => {
                this.setState({page: tab.page})
            }}
                activePage={this.state.page}
                tabs={[
                    {
                        page: "HomeScreen",
                        icon: "home",
                    },
                    {
                        page: "ChatScreen",
                        icon: "chat",
                        badgeNumber: 7,
                    },
                ]}/>
        </View>

    );
  }
}

// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888888',
  },
});
