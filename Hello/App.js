/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import SimpleApp1 from './app/HomePage';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerRight: <Button title="Info"/>,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
              <Text>Hello, Chat App!</Text>
              <Button
                  onPress={() => navigate('Chat', {user: '小宋宋'})}
                  title="HomeScreen with Lucy"
              />
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const {params} = this.props.navigation.state;
        return (
            <View>
              <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

class PersonScreen extends React.Component {
    static navigationOptions = {
        title: 'PersonScreen ',
    };

    render() {
        return (
            <View>
              <Text>Pserson with Lucy</Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
    Person: {screen: PersonScreen},
});


class RecentChatsScreen extends React.Component {
    render() {
        return <Text>List of recent chats</Text>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return <Text>List of all contacts</Text>
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
});


export default class App extends React.Component {
    render() {
        return <SimpleApp1/>;
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





