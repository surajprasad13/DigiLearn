import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home/Home';
import Login from '../screens/auth/Login';
import {RootStackParamList} from './RouteType';
import CourseDetail from '../screens/Detail/CourseDetail';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
