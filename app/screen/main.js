import React, { Component } from 'react';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';


import MainScreen from './MainScreen';
import searchReducer from '../reducers/search';
import Next5 from './next5days';

const logger = createLogger();
const store = createStore(searchReducer, composeWithDevTools(
  applyMiddleware(thunk, promise, logger),
));

class Main2 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Next5 />
      </Provider>
    );
  }
}
class Main1 extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>);
  }
}


export  { Main1, Main2 };
