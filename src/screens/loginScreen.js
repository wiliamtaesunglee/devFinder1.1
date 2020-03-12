import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const fetchGit = async () => {
    await fetch('http://github.com/login/oauth/authorize', { client_id: '4fe64420755fe63ff364' })
        .then(resp => {
            Linking.openURL(resp.url).catch((err) => console.error('An error occurred', err));
        })
        .then(resp => console.log(resp.json()))
}

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Clicke no Botão para logar no seu Github</Text>
      <Button
        title='Login'
        onPress={() => fetchGit()} />
    </View>
  );
};

export default LoginScreen;
