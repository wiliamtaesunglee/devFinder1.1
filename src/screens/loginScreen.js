import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Clicke no Botão para logar no seu Github</Text>
      <Button
        title='Login'
        onPress={() => navigation.navigate('DevList')} />
    </View>
  );
};

export default LoginScreen;
