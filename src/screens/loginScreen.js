import React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { authorize } from 'react-native-app-auth';

import config from '../../config';

class LoginScreen extends React.Component  {
    async _authorize () {
        try {
            // Make request to Google to get token
            const authState = await authorize(config);

            console.log({ authState })
        } catch (error) {
            console.log('error', error)
        }
    }
    render() {
        return (
            <View>
                <Text>Clicke no Botão para logar no seu Github</Text>
                <Button
                    title='Login'
                    onPress={this._authorize}/>
            </View>
        );
    }
};

export default LoginScreen;
