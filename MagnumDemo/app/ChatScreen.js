
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

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: '聊天'
    };
    render() {
        return (
            <View>
                <Text style={{padding: 10}}>开始聊天吧!</Text>
            </View>
        )
    }
}

export default StackNavigator({
    Chat: { screen: ChatScreen }
});









