import CreateWorkout  from '../screens/CreateWorkout';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Workouts from '../screens/Workouts';
import WorkoutRead from '../screens/WorkoutRead';
const Stack = createStackNavigator();

const WorkoutNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }} >
        <Stack.Screen name="Workouts" component={Workouts} />
        <Stack.Screen name="WorkoutRead" component={WorkoutRead} />
        <Stack.Screen name="CreateWorkout" component={CreateWorkout}/>
      </Stack.Navigator>
  );
};

export default WorkoutNavigation;
