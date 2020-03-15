import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, Button, Linking, Form } from 'react-native';
import { authorize } from 'react-native-app-auth';

import config from '../../config';

const LoginScreen = () =>  {
    const [token, setToken] = useState({});
    const [userData, setUserData] = useState({});

    const _authorize = async () => {
        try {
            const response = await authorize(config);

            setToken(response.accessToken);

            console.log('primeiro acesso', token)

            fetch(`https://api.github.com/user`, {
              method: "GET",
              headers: {
                "Authorization": `token ${token}`
              }
            })
            .then(r => setUserData(r._bodyText))

            console.log(userData)

        } catch (error) {
            console.log('retorno do erro: ', error);
        }
    }

    return (
            <View>
                <Text>Clicke no Botão para logar no seu Github</Text>
                <Button
                    title='Login'
                    onPress={() => _authorize()}
                />
            </View>
        );
};

export default LoginScreen;
