import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to the Weight Loss App!</Text>
      <Button title="Add Weight" onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;
