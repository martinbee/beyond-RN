import React from 'react';
import { View, Text, FlatList } from 'react-native';

const WorkoutListDisplay = ({ workouts }) => {
  const renderWorkout = ({ workout }) => (
    <View>
      <Text>{workout.lift}</Text>
      <Text>{workout.weight}</Text>
      <Text>{workout.week}</Text>
    </View>
  );

  return (
    <FlatList
      data={workouts}
      renderItem={renderWorkout}
    />
  );
}

export default WorkoutListDisplay;
