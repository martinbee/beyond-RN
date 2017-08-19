import { StackNavigator } from 'react-navigation';

import WorkoutList from '../WorkoutList';

const Navigation = StackNavigator({
  Home: {
    screen: WorkoutList,
  },
});

export default Navigation;
