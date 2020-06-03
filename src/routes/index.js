import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../pages/OnBoarding';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Onboarding" component={OnBoarding} />
  </Stack.Navigator>
);

export default StackNavigator;
