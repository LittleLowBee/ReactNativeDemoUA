
// 主页面 设置TabBar 和 Navigation
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

// 导入包
import {
    TabNavigator,
    TabBarBottom,
} from 'react-navigation';

// 主页面
import HomeScreen from './HomeScreen'
// 聊天页面
import ChatScreen from './ChatScreen'


const MyApp = TabNavigator({
    // 设置页面及标题
    Home: {
        screen: HomeScreen,
        navigationOptions:{
            tabBarLabel:'首页',
            icon: ({tintColor}) => (
                <Image
                    source={require('./image/my.png')}
                    style={[{tintColor: tintColor},styles.icon]}
                />
            ),
        }
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions:{
            tabBarLabel:'聊天',
            icon: ({tintColor}) => (
                <Image
                    source={require('./image/hot.png')}
                    style={[{tintColor: tintColor},styles.icon]}
                />
            ),

        }
    },
},
    // 设置基本属性...
    {
    animationEnabled: false,
        tabBarOptions: {
            activeTintColor: '#008AC9', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片默认颜色
            indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            style: {
                backgroundColor: '#fff', // TabBar 背景色
            },
            labelStyle: {
                fontSize: 12, // 文字大小
            },
        },
}
);


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});

class MainScreen extends React.Component {
    render(){
        return (
            <MyApp/>
        )
    };
}

export default MainScreen;