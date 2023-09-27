import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

type SignUpScreenProps = {navigation: any};

const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Sign Up Screen</Text>
    <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
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

export default SignUpScreen;
