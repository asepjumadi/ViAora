
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabLayout from './app/(tabs)/Index';
import App from './app/Index';
import SignUp from './app/(auth)/sign-up';
import SignIn from './app/(auth)/sign-in';

const Stack = createNativeStackNavigator();
const RootLayout = () => {
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" options={{headerShown:false}} component={App} />
        <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUp} />
        <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn} />
        <Stack.Screen name="TabLayout"   component={TabLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootLayout;

