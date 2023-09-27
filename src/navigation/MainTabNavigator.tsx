import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DashboardScreen from '../screens/Main/DashboardScreen';
import WeightTrackingScreen from '../screens/Main/WeightTrackingScreen';
import GoalSettingScreen from '../screens/Main/GoalSettingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="WeightTracking" component={WeightTrackingScreen} />
      <Tab.Screen name="GoalSetting" component={GoalSettingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* Add more screens or stack  */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
