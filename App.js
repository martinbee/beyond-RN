import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers'
import Navigation from './src/components/Navigation';

const store = createStore(reducers);


const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
