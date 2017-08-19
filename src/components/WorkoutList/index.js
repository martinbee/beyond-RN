import React, { Component } from 'react';
import { Text } from 'react-native';

// get workouts from phone storage whatever the heck that is, put into redux and
// use the redux workouts to pass to Display and render list

const stubWorkouts = [
  {
    lift: 'press',
    weight: 105,
    week: 1,
    date: new Date(),
  },
  {
    lift: 'deadlift',
    weight: 225,
    week: 1,
    date: new Date(),
  },
  {
    lift: 'bench',
    weight: 195,
    week: 1,
    date: new Date(),
  },
];

export default class WorkoutList extends Component {
  state = {
    workouts: [],
  };

  componetWillMount() {
    this.setState({ workouts: stubWorkouts });
  }

  render() {
    return <Text>{this.state.workouts}</Text>;
  }
}

//[
  //{
    //// additional saved info about lifts (accessories, weight etc.)
  //}
//]
