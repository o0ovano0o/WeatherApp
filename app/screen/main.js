import React, { Component } from 'react';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';


import searchReducer from '../reducers/search';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tomorrow from './Tomorrow.js';
import Next5 from './next5days.js';
import Dia from './Dia.js';
const Drawer = createDrawerNavigator();
import MainScreen from './MainScreen';
import Searchcity from './Sidebar';
import Dv from './Dv';



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

class Main1 extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>);
  }
}


class App extends Component  {
    render(){
      return (
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Thời tiết trong ngày" component={Main1} />
              <Drawer.Screen name="Chi tiết" component={Today} />
              <Drawer.Screen name="Thời tiết 7 ngày tới" component={Main2} />
              <Drawer.Screen name="Thời tiết ngày mai" component={Tom} />
            </Drawer.Navigator>
          </NavigationContainer>
      );
    }
  }

    export {App,Main2, Tom, Today, Search, CurrentWeather }
