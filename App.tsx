import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/state/store';
import FlashMessage from 'react-native-flash-message';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
