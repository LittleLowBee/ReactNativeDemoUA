

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '首页'
    };
    render() {
        return (
            <View>
                <Text style={{padding: 10}}>欢迎来到首页</Text>
            </View>
        )
    }
}

export default StackNavigator({
    Home: { screen: HomeScreen },
});