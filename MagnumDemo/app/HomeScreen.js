


import React from 'react';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title:'首页',
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={{backgroundColor:'#fff',flex:1}}>
                <Text style={{padding:20}}>点击首页 {params.user}</Text>

            </View>

        );
    }
}

export default HomeScreen;




