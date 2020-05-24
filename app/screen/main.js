import React, { Component } from 'react';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import searchReducer from '../reducers/search';
import Tomorrow from './Tomorrow.js';
import Next5 from './next5days.js';
import Dia from './Dia.js';
import MainScreen from './MainScreen';
import Searchcity from './Sidebar';
import Dv from './Dv';
import MapView from './MapView';
import Webview from './Webview';
import Airmapview from './airvisualmap';

const logger = createLogger();
const store = createStore(searchReducer, composeWithDevTools(
  applyMiddleware(thunk, promise, logger),
));


class CurrentWeather extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dv />
      </Provider>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <Provider store={store}>
        <Searchcity />
      </Provider>
    );
  }
}

class Today extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dia />
      </Provider>
    );
  }
}

class Tom extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tomorrow />
      </Provider>
    );
  }
}

class Main2 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Next5 />
      </Provider>
    );
  }
}

class Main1 extends Component  {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>);
  }
}



    export {Main1,Main2, Tom, Today, Search, CurrentWeather, MapView, Airmapview }
