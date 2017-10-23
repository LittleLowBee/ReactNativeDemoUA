

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TextInput,
    Alert
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

// Login页面
class LoginScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                {/*电话号码*/}
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, top:104, left:10, right:20}}
                    // onChangeText={(text) => this.setState({text})}
                    // value={this.state.text}
                    placeholder={'输入电话号码'}
                />
                {/*密码*/}
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, top:10, left:10, right:20}}
                    // onChangeText={(text) => this.setState({text})}
                    // value={this.state.text}
                    placeholder={'输入密码'}

                />
                {/*登录button*/}

            </View>
        )
    }
}



// 注册按钮方法

// 忘记密码按钮方法

// Login按钮方法


// 样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'flex-start', // 对象方式
        //justifyContent: 'flex-end',
        flexDirection:'column',
    }
});


export default LoginScreen
















