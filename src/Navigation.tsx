import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Task from './screens/Task';
import {RootStackParamList} from './types/navigation.types';
import TaskForm from './screens/TaskForm';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="TaskForm" component={TaskForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
