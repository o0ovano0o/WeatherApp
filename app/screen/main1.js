import React from 'react';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';


import WeatherApp from './next5days';


import configureStore from '../reducers/index';

const store = configureStore()



const Main = () =>
    (<Provider store={store}>
      <WeatherApp />
    </Provider>);

export default Main;
