import React from 'react';
import {View, Text, Button} from 'react-native';

const DashboardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to the Dashboard!</Text>
      <Button
        title="Medication Reminder"
        onPress={() => navigation.navigate('MedicationReminder')}
      />
      <Button
        title="Weight Tracking"
        onPress={() => navigation.navigate('WeightTracking')}
      />
      <Button
        title="Goal Setting"
        onPress={() => navigation.navigate('GoalSetting')}
      />
      <Button
        title="Behavior Change"
        onPress={() => navigation.navigate('BehaviorChange')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default DashboardScreen;
