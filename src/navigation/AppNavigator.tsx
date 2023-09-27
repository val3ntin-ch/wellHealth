import React, {useState} from 'react';
import AuthStack from './AuthStack';
import MainTabNavigator from './MainTabNavigator';

const AppNavigator = () => {
  const [isLoggedIn, _] = useState(false); // Mock state for login. Typically, you'll use Redux or Context API for managing this state globally.

  return isLoggedIn ? <MainTabNavigator /> : <AuthStack />;
};

export default AppNavigator;
