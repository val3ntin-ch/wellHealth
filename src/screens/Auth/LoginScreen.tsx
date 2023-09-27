import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

type LoginScreenProps = {navigation: any};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Login Screen</Text>
    <Button
      title="Go to Sign Up"
      onPress={() => navigation.navigate('SignUp')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default LoginScreen;
