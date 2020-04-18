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


class App extends Component  {
    render(){
      return (
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={Main1} />
              <Drawer.Screen name="next5days" component={Main2} />
              <Drawer.Screen name="Tomorrow" component={Tomorrow} />
              <Drawer.Screen name="More" component={Dia} />
            </Drawer.Navigator>
          </NavigationContainer>
      );
    }
  }

    export {App,Main2}



