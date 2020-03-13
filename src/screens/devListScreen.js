import React from 'react';
import { View, Text } from 'react-native';

const DevListScreen = ({ data }) => {
    console.log(data);
  return (
    <View>
      <Text>
        List of Developers here
      </Text>
    </View>
  );
};

export default DevListScreen;
