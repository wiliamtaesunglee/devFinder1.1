import React, { useState } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { authorize } from 'react-native-app-auth';

import config from '../../config';

const LoginScreen = () =>  {
    const [data, setData] = useState({});
    const _authorize = async  () => {
        try {
            // Make request to Google to get token
            const authState = await authorize(config);

        } catch (error) {
            console.log('error', error)
        }
    }

    return (
            <View>
                <Text>Clicke no Botão para logar no seu Github</Text>
                <Button
                    title='Login'
                    onPress={() => _authorize()}
                    data={data}
                />
            </View>
        );

};

export default LoginScreen;
